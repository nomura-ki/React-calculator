export default function Square({ value, onSquareClick, css }) {
  return (
    <button className="square" onClick={onSquareClick} class={css}>
      {value}
    </button>
  );
}
