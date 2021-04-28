const Avatar = ({ width, height, cx, cy, r }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <g fillRule="evenodd">
        <defs>
          <clipPath id="qieIUpjt-Cvtk6GwvsdXa">
            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              strokeWidth="0.1rem"
              stroke="#19d4c6"
            ></circle>
          </clipPath>
        </defs>
        <image
          x="0"
          y="0"
          width={width}
          height={height}
          xlinkHref="data:image/png;base64,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"
          clipPath="url(#qieIUpjt-Cvtk6GwvsdXa)"
        ></image>
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          strokeWidth="0.1rem"
          stroke="#19d4c6"
        ></circle>
      </g>
    </svg>
  );
};

export { Avatar };
