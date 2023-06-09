const StabilityIcon = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="20" fill="#E7EBF0" />
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        stroke="url(#paint0_linear_1_468)"
        strokeOpacity="0.3"
      />
      <path
        d="M10.6697 29.0544C7.92893 26.3137 7.92893 21.87 10.6697 19.1293L19.135 10.664C21.8726 7.92636 26.3112 7.92636 29.0488 10.664C32.0213 13.6365 31.7263 18.5552 28.5307 21.3414C27.3323 22.3863 26.1465 23.4622 25.1545 24.4435C23.9492 25.6357 22.6163 27.0973 21.3497 28.5476C18.5621 31.7395 13.6421 32.0268 10.6697 29.0544Z"
        fill="white"
        stroke="#2E3A59"
      />
      <path
        d="M9.10563 27.3985C6.97393 25.2668 6.77622 21.8904 8.7049 19.599C10.4282 17.5517 12.4882 15.2006 14.2516 13.4564C15.8034 11.9215 17.8556 10.1343 19.6912 8.59596C21.9825 6.67557 25.3533 6.87667 27.4813 9.00463C30.0054 11.5288 29.7602 15.7109 27.0264 18.0504C25.5298 19.3312 23.9829 20.7092 22.7407 21.9379C21.2827 23.38 19.6368 25.2176 18.1465 26.9539C15.8059 29.6809 11.6273 29.9202 9.10563 27.3985Z"
        fill="white"
        stroke="#2E3A59"
      />
      <rect
        x="17.4355"
        y="14.5151"
        width="6"
        height="6"
        rx="3"
        transform="rotate(-45 17.4355 14.5151)"
        fill="#FFD058"
        stroke="#2E3A59"
      />
      <g filter="url(#filter0_d_1_468)">
        <rect
          x="11"
          y="23"
          width="2"
          height="2"
          rx="1"
          transform="rotate(-45 11 23)"
          fill="#00C368"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_468"
          x="10.4142"
          y="21"
          width="6"
          height="6"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.8 0"
          />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_468" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_468" result="shape" />
        </filter>
        <linearGradient
          id="paint0_linear_1_468"
          x1="41.5385"
          y1="40.7692"
          x2="-2.15385"
          y2="-1.23077"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default StabilityIcon;
