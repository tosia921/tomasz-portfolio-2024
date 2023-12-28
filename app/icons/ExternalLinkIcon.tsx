interface ExternalLinkIconProps {
  height: number;
  width: number;
}

function ExternalLinkIcon({ height, width }: ExternalLinkIconProps) {
  return (
    <svg
      data-name="Layer 1"
      id="Layer_1"
      height={height}
      width={width}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <line
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        x1="19"
        x2="19"
        y1="6"
        y2="1"
      />
      <line
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        x1="14"
        x2="19"
        y1="1"
        y2="1"
      />
      <path
        d="M8.71,1H3A2,2,0,0,0,1,3V17a2,2,0,0,0,2,2H17a2,2,0,0,0,2-2V11.29"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
      />
      <line
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        x1="19"
        x2="9"
        y1="1"
        y2="11"
      />
    </svg>
  );
}

export default ExternalLinkIcon;
