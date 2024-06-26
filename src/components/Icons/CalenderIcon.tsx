import { IconPropsType } from "../../myTypes";

export default function CalenderIcon({ width, height }: IconPropsType) {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 0C3.77614 0 4 0.223858 4 0.5V1H12V0.5C12 0.223858 12.2239 0 12.5 0C12.7761 0 13 0.223858 13 0.5V1H14C15.1046 1 16 1.89543 16 3V14C16 15.1046 15.1046 16 14 16H2C0.895431 16 0 15.1046 0 14V3C0 1.89543 0.895431 1 2 1H3V0.5C3 0.223858 3.22386 0 3.5 0ZM2 2C1.44772 2 1 2.44772 1 3V4H15V3C15 2.44772 14.5523 2 14 2H2ZM15 5H1V14C1 14.5523 1.44772 15 2 15H14C14.5523 15 15 14.5523 15 14V5Z"
          fill="currentColor"
        />
        <path
          d="M11 7.5C11 7.22386 11.2239 7 11.5 7H12.5C12.7761 7 13 7.22386 13 7.5V8.5C13 8.77614 12.7761 9 12.5 9H11.5C11.2239 9 11 8.77614 11 8.5V7.5Z"
          fill="currentColor"
        />
      </svg>
    </>
  );
}
