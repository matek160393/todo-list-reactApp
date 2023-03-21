import "./style.css";

const Buttons = ({ tasks, hideTasksDone }) => (
  <section className="buttons">
    {tasks.length > 0 && (
      <>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => !done)}
        >
          {hideTasksDone ? "Pokaż ukończone" : "Ukryj ukończone"}
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </section>
);

export default Buttons;