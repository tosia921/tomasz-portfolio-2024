interface ArrowdownIconProps {
  height: number;
  width: number;
}

function ArrowdownIcon({ height, width }: ArrowdownIconProps) {
  return (
    <svg viewBox="0 0 24 24" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
      <title />
      <path
        fill="bg-primary"
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm4.71,10.71-4,4a1,1,0,0,1-1.41,0l-4-4a1,1,0,0,1,1.41-1.41L12,13.59l3.29-3.29a1,1,0,0,1,1.41,1.41Z"
      />
    </svg>
  );
}

export default ArrowdownIcon;
