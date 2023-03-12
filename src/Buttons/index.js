import "./style.css";

const Buttons = ({ tasks, hideTasksDone }) => (
  <p className="section__buttons">
    {tasks.length > 0 && (
      <>
        <button
          className="section__button"
          disabled={tasks.every(({ done }) => !done)}
        >
        {hideTasksDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
          className="section__button"
          disabled={tasks.every(({ done }) => done)}
        >
        Ukończ wszystkie
        </button>
      </>
    )}
  </p>
);

export default Buttons;