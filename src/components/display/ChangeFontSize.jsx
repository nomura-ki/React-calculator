import { useEffect, useRef } from "react";
import { Format } from "./Format";

export default function ChangeFontSize({ value, max, min }) {
  const containerRef = useRef(null);
  const text = Format(value);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const maxSize = max;
    const minSize = min;

    let size = maxSize;

    element.style.fontSize = size + "px";

    while (element.scrollWidth > element.clientWidth && size > minSize) {
      size--;
      element.style.fontSize = size + "px";
    }
  }, [text, max, min]);

  return (
    <div
      ref={containerRef}
      className="h-[65px] w-[320px] text-right whitespace-nowrap overflow-hidden"
      style={{ fontsize: `${max}px` }}
    >
      {text}
    </div>
  );
}
