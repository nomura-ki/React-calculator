import Square from "./Square";
import {
  HandleBackspaceClick,
  HandleClearAllClick,
  HandleClearEntryClick,
  HandleEqualClick,
  HandleNumberClick,
  HandleOperatorClick,
  HandlePointClick,
} from "../../CalcLogic/HandleButtonClick";

export default function Button({ setState }) {
  return (
    <div class="grid grid-cols-4 gap-[5px]">
      <Square
        value="CE"
        onSquareClick={() => {
          setState((prevState) => HandleClearEntryClick(prevState));
        }}
        css="allBtn BtnDlt"
      />
      <Square
        value="C"
        onSquareClick={() => {
          setState((prevState) => HandleClearAllClick(prevState));
        }}
        css="allBtn BtnDlt"
      />
      <Square
        value="⌫"
        onSquareClick={() => {
          setState((prevState) => HandleBackspaceClick(prevState));
        }}
        css="allBtn BtnDlt"
      />
      <Square
        value="÷"
        onSquareClick={() => {
          setState((prevState) => HandleOperatorClick("/", prevState));
        }}
        css="allBtn BtnOps"
      />
      <Square
        value="7"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(7, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="8"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(8, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="9"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(9, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="×"
        onSquareClick={() => {
          setState((prevState) => HandleOperatorClick("*", prevState));
        }}
        css="allBtn BtnOps"
      />
      <Square
        value="4"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(4, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="5"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(5, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="6"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(6, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="－"
        onSquareClick={() => {
          setState((prevState) => HandleOperatorClick("-", prevState));
        }}
        css="allBtn BtnOps"
      />
      <Square
        value="1"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(1, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="2"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(2, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="3"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(3, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="+"
        onSquareClick={() => {
          setState((prevState) => HandleOperatorClick("+", prevState));
        }}
        css="allBtn BtnOps"
      />
      <div></div>
      <Square
        value="0"
        onSquareClick={() => {
          setState((prevState) => HandleNumberClick(0, prevState));
        }}
        css="allBtn BtnNum"
      />
      <Square
        value="."
        onSquareClick={() => {
          setState((prevState) => HandlePointClick(prevState));
        }}
        css="allBtn BtnPit"
      />
      <Square
        value="="
        onSquareClick={() => {
          setState((prevState) => HandleEqualClick(prevState));
        }}
        css="allBtn BtnEq"
      />
    </div>
  );
}
