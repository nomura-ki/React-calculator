export default function SubDisplay({ value }) {
  const subDis = value;
  return (
    <div className="text-[25px] text-right whitespace-nowrap overflow-hidden">
      {subDis}
    </div>
  );
}
