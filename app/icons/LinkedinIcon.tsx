interface LinkedinIconProps {
  height: number;
  width: number;
}

function LinkedinIcon({ height, width }: LinkedinIconProps) {
  return (
    <svg
      id="Layer_1"
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height={height}
      width={width}
    >
      <g>
        <path fill="#ffffff" d="M273,233.8v-0.7c-0.1,0.2-0.3,0.5-0.5,0.7H273z" />
        <path
          fill="#ffffff"
          d="M447.7,29.6H64.2C45.9,29.6,31,44.1,31,62v388c0,17.9,14.9,32.4,33.2,32.4h383.5c18.4,0,33.3-14.5,33.3-32.4   V62C481,44.1,466.1,29.6,447.7,29.6z M167.4,408.7h-68V204.2h68V408.7z M133.4,176.2H133c-22.8,0-37.5-15.7-37.5-35.3   c0-20.1,15.2-35.3,38.4-35.3c23.3,0,37.6,15.3,38,35.3C171.9,160.5,157.1,176.2,133.4,176.2z M412.5,408.7h-68V299.2   c0-27.5-9.8-46.2-34.4-46.2c-18.8,0-30,12.6-34.9,24.9c-1.8,4.4-2.2,10.5-2.2,16.6v114.2h-68c0,0,0.9-185.3,0-204.5h68v28.9   c9-13.9,25.2-33.8,61.3-33.8c44.7,0,78.2,29.2,78.2,92.1V408.7z"
        />
      </g>
    </svg>
  );
}

export default LinkedinIcon;
