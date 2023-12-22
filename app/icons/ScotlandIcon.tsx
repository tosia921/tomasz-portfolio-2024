interface ScotlandIconProps {
  height: number;
  width: number;
}

function ScotlandIcon({ height, width }: ScotlandIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 62 42.6">
      <path
        d="M61.91,4,35,21.43,8.09,4a6.06,6.06,0,0,0-4,4.58L29.48,25,4.12,41.4a6.06,6.06,0,0,0,4,4.58L35,28.57,61.91,46a6.06,6.06,0,0,0,4-4.58L40.52,25,65.88,8.6A6.06,6.06,0,0,0,61.91,4Z"
        transform="translate(-4 -3.7)"
        style={{ fill: "#f9f9f9" }}
      />
      <path
        d="M65.88,41.4A6,6,0,0,0,66,40.2V9.8a6,6,0,0,0-.12-1.2L40.52,25Z"
        transform="translate(-4 -3.7)"
        style={{ fill: "#4758a9" }}
      />
      <path
        d="M35,21.43,61.91,4A6,6,0,0,0,60,3.7H10A6,6,0,0,0,8.09,4Z"
        transform="translate(-4 -3.7)"
        style={{ fill: "#4758a9" }}
      />
      <path
        d="M4.12,8.6A6,6,0,0,0,4,9.8V40.2a6,6,0,0,0,.12,1.2L29.48,25Z"
        transform="translate(-4 -3.7)"
        style={{ fill: "#4758a9" }}
      />
      <path
        d="M35,28.57,8.09,46A6,6,0,0,0,10,46.3H60A6,6,0,0,0,61.91,46Z"
        transform="translate(-4 -3.7)"
        style={{ fill: "#4758a9" }}
      />
    </svg>
  );
}

export default ScotlandIcon;
