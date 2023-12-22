interface LaptopIconProps {
  height: number;
  width: number;
}

function LaptopIcon({ height, width }: LaptopIconProps) {
  return (
    <svg
      id="Layer_1"
      height={height}
      width={width}
      enableBackground="new 0 0 128 128"
      version="1.1"
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path fill="#0ca8fd" d="M110,94H18V28c0-2.8,2.2-5,5-5h82c2.8,0,5,2.2,5,5V94z" />
      <path
        fill="#72d2fc"
        d="M101,88H27c-1.1,0-2-0.9-2-2V32c0-1.1,0.9-2,2-2h74c1.1,0,2,0.9,2,2v54C103,87.1,102.1,88,101,88z"
      />
      <path fill="#ff8f1f" d="M115,105H13c-2.8,0-5-2.2-5-5v-5h112v5C120,102.8,117.8,105,115,105z" />
      <path fill="#e0e0e0" d="M115,105H23c-2.8,0-5-2.2-5-5v-5h102v5C120,102.8,117.8,105,115,105z" />
      <path
        stroke="#30342d"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M18,95V28c0-2.8,2.2-5,5-5h82c2.8,0,5,2.2,5,5v67"
      />
      <path
        stroke="#30342d"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M115,105H13c-2.8,0-5-2.2-5-5v-5h112v5C120,102.8,117.8,105,115,105z"
      />
      <polyline
        stroke="#ffffff"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        points="50,48 37.5,60.5 50,73 "
      />
      <polyline
        stroke="#ffffff"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        points="77,48 89.5,60.5 77,73 "
      />
      <line
        stroke="#ffffff"
        fill="none"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
        x1="68"
        x2="59"
        y1="48"
        y2="73"
      />
    </svg>
  );
}

export default LaptopIcon;
