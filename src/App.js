import Board from "./components/Board";
import MainDisplay from "./components/MainDisplay";
import SubDisplay from "./components/SubDisplay";

export default function App() {
  return (
    <>
      <div class="w-[330px] h-[390px] border-[1px] border-[#d2d4d6] border-solid bg-[#eff2f7] rounded-lg fixed left-[10%] top-[10%]">
        <div class="m-[5px]">
          <div class="h-[35px] w-[320px]">
            <SubDisplay />
          </div>
          <div class="h-[65px] w-[320px] mt-[5px]">
            <MainDisplay />
          </div>
        </div>
        <div class="flex justify-center items-center">
          <Board />
        </div>
      </div>
    </>
  );
}
