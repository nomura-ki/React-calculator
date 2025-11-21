import { useState } from "react";
import ChangeFontSize from "./display/ChangeFontSize";
import Button from "./keyboard/Button";

const defaultState = {
  operandA: "0",
  operandB: "",
  operator: null,
  phase: "EnteringA",
  MDvalue: "0",
  SDvalue: "",
};

export default function MainWindow() {
  const [state, setState] = useState(defaultState);
  return (
    <>
      <div className="m-[5px]">
        <div className="h-[35px] w-[320px]">
          <ChangeFontSize value={state.SDvalue} max="25" min="10" />
        </div>
        <div className="mt-[5px]">
          <ChangeFontSize value={state.MDvalue} max="40" min="16" />
        </div>
      </div>

      <div class="flex justify-center items-center">
        <Button setState={setState} />
      </div>
    </>
  );
}
