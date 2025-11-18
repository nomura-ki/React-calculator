import Square from "./Square";
import HandleBackspaceClick from "../CalcLogic/HandleBackspaceClick";
import HandleClearAllClick from "../CalcLogic/HandleClearAllClick";
import HandleClearEntryClick from "../CalcLogic/HandleClearEntryClick";
import HandleEqualClick from "../CalcLogic/HandleEqualClick";
import HandleNumberClick from "../CalcLogic/HandleNumberClick";
import HandleOperatorClick from "../CalcLogic/HandleOperatorClick";
import HandlePointClick from "../CalcLogic/HandlePointClick";

export default function Board() {
  return (
    <>
      <div>
        <div class="grid grid-cols-4 gap-[5px]">
          <Square
            value="CE"
            onSquareClick={() => HandleClearEntryClick()}
            css="allBtn BtnDlt"
          />
          <Square
            value="C"
            onSquareClick={() => HandleClearAllClick()}
            css="allBtn BtnDlt"
          />
          <Square
            value="⌫"
            onSquareClick={() => HandleBackspaceClick()}
            css="allBtn BtnDlt"
          />
          <Square
            value="÷"
            onSquareClick={() => HandleOperatorClick("÷")}
            css="allBtn BtnOps"
          />
          <Square
            value="7"
            onSquareClick={() => HandleNumberClick(7)}
            css="allBtn BtnNum"
          />
          <Square
            value="8"
            onSquareClick={() => HandleNumberClick(8)}
            css="allBtn BtnNum"
          />
          <Square
            value="9"
            onSquareClick={() => HandleNumberClick(9)}
            css="allBtn BtnNum"
          />
          <Square
            value="×"
            onSquareClick={() => HandleOperatorClick("×")}
            css="allBtn BtnOps"
          />
          <Square
            value="4"
            onSquareClick={() => HandleNumberClick(4)}
            css="allBtn BtnNum"
          />
          <Square
            value="5"
            onSquareClick={() => HandleNumberClick(5)}
            css="allBtn BtnNum"
          />
          <Square
            value="6"
            onSquareClick={() => HandleNumberClick(6)}
            css="allBtn BtnNum"
          />
          <Square
            value="－"
            onSquareClick={() => HandleOperatorClick("－")}
            css="allBtn BtnOps"
          />
          <Square
            value="1"
            onSquareClick={() => HandleNumberClick(1)}
            css="allBtn BtnNum"
          />
          <Square
            value="2"
            onSquareClick={() => HandleNumberClick(2)}
            css="allBtn BtnNum"
          />
          <Square
            value="3"
            onSquareClick={() => HandleNumberClick(3)}
            css="allBtn BtnNum"
          />
          <Square
            value="+"
            onSquareClick={() => HandleOperatorClick("+")}
            css="allBtn BtnOps"
          />
          <div></div>
          <Square
            value="0"
            onSquareClick={() => HandleNumberClick(0)}
            css="allBtn BtnNum"
          />
          <Square
            value="."
            onSquareClick={() => HandlePointClick()}
            css="allBtn BtnPit"
          />
          <Square
            value="="
            onSquareClick={() => HandleEqualClick()}
            css="allBtn BtnEq"
          />
        </div>
      </div>
    </>
  );
}
