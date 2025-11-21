export default function MainDisplay({ value }) {
  const mainDis = value;
  return (
    <div className="text-[40px] text-right whitespace-nowrap overflow-hidden">
      {mainDis}
    </div>
  );
}
