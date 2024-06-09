import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function IntroductionParagraph() {
  return (
    <div>
      <h1>Date-Counter</h1>
      <div className="paragraph">
        The Date Counter app is a simple tool that displays the date based on a
        count value that users can adjust. Users can increase or decrease the
        count using the step value, which determines the increment. The count
        represents the number of days from today's date. When the count is zero,
        the app displays today's date. When the count is positive, it shows a
        future date based on the count. When the count is negative, it shows a
        past date based on the count. This app provides a straightforward
        interface for viewing dates relative to today by adjusting the count
        value.
      </div>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function getDate(num) {
    const date = new Date();
    date.setDate(date.getDate() + num);
    return date.toLocaleDateString("en-US");
  }

  function handleStepMinus() {
    setStep((s) => s - 1);
  }

  function handleStepPlus() {
    setStep((s) => s + 1);
  }

  function handleCountMinus() {
    setCount((c) => c - step);
  }

  function handleCountPlus() {
    setCount((c) => c + step);
  }

  function handleInputField(e) {
    setCount(Number(e.target.value));
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div className="main">
      <IntroductionParagraph />

      <div>
        <div>
          {/* The Slider */}
          <div>
            <input
              type="range"
              min="0"
              max="10"
              value={step}
              onChange={(e) => setStep(Number(e.target.value))}
            />
          </div>
          <button onClick={handleStepMinus}>-</button>Step: {step}
          <button onClick={handleStepPlus}>+</button>
        </div>

        <div>
          {/* The count + button */}
          <button onClick={handleCountMinus}>-</button>

          {/* The input field */}
          <input
            type="text"
            placeholder="Item..."
            value={count}
            onChange={handleInputField}
          />

          {/* The count - button */}
          <button onClick={handleCountPlus}>+</button>
        </div>
        {count === 0 && <span>Today is {getDate(0)}</span>}
        {count > 0 && (
          <span>
            {count} day{count > 1 ? "s" : ""} from today is {getDate(count)}
          </span>
        )}
        {count < 0 && (
          <span>
            {Math.abs(count)} day{Math.abs(count) > 1 ? "s" : ""} ago was{" "}
            {getDate(count)}
          </span>
        )}
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
