function ClockCircle(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 794 794" {...props}>
      <defs>
        <linearGradient
          id="prefix__b"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <stop offset={0} stopColor="#1e9600" />
          <stop offset={0.137} stopColor="#a3a50f" />
          <stop offset={0.298} stopColor="#f5af19" />
          <stop offset={0.546} stopColor="#f47b16" />
          <stop offset={1} stopColor="#f12711" />
        </linearGradient>
        <filter
          id="prefix__a"
          x={0}
          y={0}
          width={794}
          height={794}
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy={6} />
          <feGaussianBlur stdDeviation={3} result="blur" />
          <feFlood floodColor="#6a6a6a" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g filter="url(#prefix__a)">
        <circle
          data-name="Ellipse 1"
          cx={388}
          cy={388}
          r={388}
          transform="translate(9 3)"
          fill="url(#prefix__b)"
        />
      </g>
    </svg>
  );
}

export default ClockCircle;
