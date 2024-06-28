import { useMyContext } from "../hooks/useMyContext";
import counter from "./counter.module.css";

const Counter = () => {
  const { count, increaseCounter, decreaseCounter } = useMyContext();

  return (
    <>
      <h1 className={counter.headline}>Context counter</h1>

      <section>
        <p className={counter.paragraf}>{count}</p>
        <div className={counter.counterBlock}>
          <button
            className={counter.encreaseButton}
            onClick={() => increaseCounter()}
          >
            <h2>+1</h2>
          </button>
          <button
            className={counter.decreaseButton}
            onClick={() => decreaseCounter()}
          >
            count <h2>-1</h2>
          </button>
        </div>
      </section>
    </>
  );
};

export default Counter;
