interface BloggerIconProps {
  height: number;
  width: number;
}

function BloggerIcon({ height, width }: BloggerIconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" id="line" viewBox="0 0 64 64" height={height} width={width}>
      <title />
      <path d="M26.305,44.9782l-8.79238,8.79238-10.928,3.64233,3.64233-10.928L46.08455,10.62735c.00812.00671,7.27136,7.28106,7.28357,7.28772L44.9844,26.29878a1,1,0,0,0,1.414,1.41391L57.90737,16.20376A7.15138,7.15138,0,0,0,47.79379,6.09017L8.646,45.238a.99553.99553,0,0,0-.24119.39059L4.0555,58.67748A1.00711,1.00711,0,0,0,5.32013,59.942L18.369,55.59272a.99564.99564,0,0,0,.3906-.24119L27.719,46.39217a.99983.99983,0,0,0-1.414-1.414ZM49.20775,7.50408C54.18234,2.844,61.155,9.83168,56.4934,14.78979L54.78209,16.5011,47.5067,9.22571C47.45006,9.22308,49.21965,7.51238,49.20775,7.50408Z" />
      <path d="M45.001,29.9958A14.999,14.999,0,1,0,60,44.9948,15.0154,15.0154,0,0,0,45.001,29.9958Zm0,27.99813A12.99913,12.99913,0,1,1,58.00013,44.9948,13.01418,13.01418,0,0,1,45.001,57.99393Z" />
      <path d="M39.7992,40.68161a.99956.99956,0,0,0-1.414,0l-3.60719,3.6062a1.00549,1.00549,0,0,0,0,1.414L38.38524,49.308a.99982.99982,0,1,0,1.414-1.414L36.899,44.9948l2.90019-2.89922A.99957.99957,0,0,0,39.7992,40.68161Z" />
      <path d="M55.224,44.28781l-3.60718-3.6062a.99983.99983,0,1,0-1.414,1.414L53.103,44.9948,50.20286,47.894a.99981.99981,0,1,0,1.41391,1.414L55.224,45.70178A1.00548,1.00548,0,0,0,55.224,44.28781Z" />
      <path d="M44.93265,41.14642,43.13,48.35883a.99945.99945,0,1,0,1.93933.48434L46.872,41.63083A.99963.99963,0,0,0,44.93265,41.14642Z" />
    </svg>
  );
}

export default BloggerIcon;
