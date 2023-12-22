interface EmailIconProps {
  height: number;
  width: number;
}

function EmailIcon({ height, width }: EmailIconProps) {
  return (
    <svg
      height={height}
      enableBackground="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      width={width}
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g id="_x31_12-gmail_x2C__email_x2C__mail">
        <g>
          <g>
            <g>
              <rect height="358.87" fill="#F1F5F7" width="357.904" x="77.045" y="76.565" />
              <path d="M256.002,293.738l178.947,141.697v-279.74L256.002,293.738z M256.002,293.738" fill="#DCE6EA" />
              <path
                d="M449.861,76.565h-14.912L256.002,218.26L77.045,76.565H62.134      c-24.693,0-44.737,20.094-44.737,44.858v269.152c0,24.759,20.044,44.859,44.737,44.859h14.911v-279.74l178.957,138.014      l178.947-138.047v279.773h14.912c24.699,0,44.742-20.101,44.742-44.859V121.424C494.604,96.66,474.561,76.565,449.861,76.565      L449.861,76.565z M449.861,76.565"
                fill="#F84437"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  );
}

export default EmailIcon;
