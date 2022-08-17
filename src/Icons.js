import React, { useState } from "react";

export function IconAccount(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM20 8.33331C22.7667 8.33331 25 10.5666 25 13.3333C25 16.1 22.7667 18.3333 20 18.3333C17.2334 18.3333 15 16.1 15 13.3333C15 10.5666 17.2334 8.33331 20 8.33331ZM20 32C15.8334 32 12.15 29.8666 10 26.6333C10.05 23.3166 16.6667 21.5 20 21.5C23.3167 21.5 29.95 23.3166 30 26.6333C27.85 29.8666 24.1667 32 20 32Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconCart(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6666 30C9.83329 30 8.34996 31.5 8.34996 33.3333C8.34996 35.1666 9.83329 36.6666 11.6666 36.6666C13.5 36.6666 15 35.1666 15 33.3333C15 31.5 13.5 30 11.6666 30ZM1.66663 3.33331V6.66665H4.99996L11 19.3166L8.74996 23.4C8.48329 23.8666 8.33329 24.4166 8.33329 25C8.33329 26.8333 9.83329 28.3333 11.6666 28.3333H31.6666V25H12.3666C12.1333 25 11.95 24.8166 11.95 24.5833L12 24.3833L13.5 21.6666H25.9166C27.1666 21.6666 28.2666 20.9833 28.8333 19.95L34.8 9.13331C34.9333 8.89998 35 8.61665 35 8.33331C35 7.41665 34.25 6.66665 33.3333 6.66665H8.68329L7.11663 3.33331H1.66663ZM28.3333 30C26.5 30 25.0166 31.5 25.0166 33.3333C25.0166 35.1666 26.5 36.6666 28.3333 36.6666C30.1666 36.6666 31.6666 35.1666 31.6666 33.3333C31.6666 31.5 30.1666 30 28.3333 30Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconLogout(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="32"
        viewBox="0 0 45 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M33.3333 8.88889L30.2 12.0222L35.9333 17.7778H13.3333V22.2222H35.9333L30.2 27.9556L33.3333 31.1111L44.4444 20L33.3333 8.88889ZM4.44444 4.44444H22.2222V0H4.44444C2 0 0 2 0 4.44444V35.5556C0 38 2 40 4.44444 40H22.2222V35.5556H4.44444V4.44444Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconClose(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <path
        d="M27.7083 9.34791L25.652 7.29166L17.5 15.4437L9.34788 7.29166L7.29163 9.34791L15.4437 17.5L7.29163 25.6521L9.34788 27.7083L17.5 19.5562L25.652 27.7083L27.7083 25.6521L19.5562 17.5L27.7083 9.34791Z"
        fill={color}
      />
    </svg>
  );
}

export function IconCalendar(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <svg
      width="28"
      height="30"
      viewBox="0 0 28 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <path
        d="M24.5455 2.72727H23.1818V0H20.4545V2.72727H6.81818V0H4.09091V2.72727H2.72727C1.22727 2.72727 0 3.95455 0 5.45455V27.2727C0 28.7727 1.22727 30 2.72727 30H24.5455C26.0455 30 27.2727 28.7727 27.2727 27.2727V5.45455C27.2727 3.95455 26.0455 2.72727 24.5455 2.72727ZM24.5455 27.2727H2.72727V9.54545H24.5455V27.2727Z"
        fill={color}
      />
    </svg>
  );
}

export function IconStarFull() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 14.4663L14.562 18L13.086 11.34L18 6.85895L11.529 6.28105L9 0L6.471 6.28105L0 6.85895L4.914 11.34L3.438 18L9 14.4663Z"
        fill="#184D47"
      />
    </svg>
  );
}

export function IconStarHalf() {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.1177 6.85895L11.6467 6.27158L9.11768 0L6.58868 6.28105L0.117676 6.85895L5.03168 11.34L3.55568 18L9.11768 14.4663L14.6797 18L13.2127 11.34L18.1177 6.85895ZM9.11768 12.6947V3.88421L10.6567 7.71158L14.5987 8.07158L11.6107 10.8L12.5107 14.8547L9.11768 12.6947Z"
        fill="#184D47"
      />
    </svg>
  );
}

export function IconStarEmpty() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6.85895L11.529 6.27158L9 0L6.471 6.28105L0 6.85895L4.914 11.34L3.438 18L9 14.4663L14.562 18L13.095 11.34L18 6.85895ZM9 12.6947L5.616 14.8453L6.516 10.7905L3.528 8.06211L7.47 7.70211L9 3.88421L10.539 7.71158L14.481 8.07158L11.493 10.8L12.393 14.8547L9 12.6947Z"
        fill="#BCC0BC"
      />
    </svg>
  );
}

export function IconSearch() {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.8674 15.7233H16.7381L16.3379 15.3373C17.7387 13.7078 18.582 11.5923 18.582 9.29102C18.582 4.15952 14.4225 0 9.29102 0C4.15952 0 0 4.15952 0 9.29102C0 14.4225 4.15952 18.582 9.29102 18.582C11.5923 18.582 13.7078 17.7387 15.3373 16.3379L15.7233 16.7381V17.8674L22.8702 25L25 22.8702L17.8674 15.7233V15.7233ZM9.29102 15.7233C5.73185 15.7233 2.85878 12.8502 2.85878 9.29102C2.85878 5.73185 5.73185 2.85878 9.29102 2.85878C12.8502 2.85878 15.7233 5.73185 15.7233 9.29102C15.7233 12.8502 12.8502 15.7233 9.29102 15.7233Z"
        fill="#184D47"
      />
    </svg>
  );
}

export function IconFacebook(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="#126244"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.9998 20.1223C39.9998 9.00731 31.0448 -0.00268555 19.9998 -0.00268555C8.94984 -0.000185547 -0.00515747 9.00732 -0.00515747 20.1248C-0.00515747 30.1673 7.30984 38.4923 16.8698 40.0023V25.9398H11.7948V20.1248H16.8748V15.6873C16.8748 10.6448 19.8623 7.85981 24.4298 7.85981C26.6198 7.85981 28.9073 8.25231 28.9073 8.25231V13.2023H26.3848C23.9023 13.2023 23.1273 14.7548 23.1273 16.3473V20.1223H28.6723L27.7873 25.9373H23.1248V39.9998C32.6848 38.4898 39.9998 30.1648 39.9998 20.1223Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconInstagram(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="#126244"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0C14.5725 0 13.89 0.025 11.7575 0.12C9.625 0.22 8.1725 0.555 6.9 1.05C5.56523 1.55205 4.35623 2.33957 3.3575 3.3575C2.34019 4.35674 1.55277 5.5656 1.05 6.9C0.555 8.17 0.2175 9.625 0.12 11.75C0.025 13.8875 0 14.5675 0 20.0025C0 25.4325 0.025 26.1125 0.12 28.245C0.22 30.375 0.555 31.8275 1.05 33.1C1.5625 34.415 2.245 35.53 3.3575 36.6425C4.4675 37.755 5.5825 38.44 6.8975 38.95C8.1725 39.445 9.6225 39.7825 11.7525 39.88C13.8875 39.975 14.5675 40 20 40C25.4325 40 26.11 39.975 28.245 39.88C30.3725 39.78 31.83 39.445 33.1025 38.95C34.4364 38.4477 35.6445 37.6602 36.6425 36.6425C37.755 35.53 38.4375 34.415 38.95 33.1C39.4425 31.8275 39.78 30.375 39.88 28.245C39.975 26.1125 40 25.4325 40 20C40 14.5675 39.975 13.8875 39.88 11.7525C39.78 9.625 39.4425 8.17 38.95 6.9C38.4473 5.56556 37.6599 4.35669 36.6425 3.3575C35.6441 2.33919 34.435 1.55161 33.1 1.05C31.825 0.555 30.37 0.2175 28.2425 0.12C26.1075 0.025 25.43 0 19.995 0H20.0025H20ZM18.2075 3.605H20.0025C25.3425 3.605 25.975 3.6225 28.0825 3.72C30.0325 3.8075 31.0925 4.135 31.7975 4.4075C32.73 4.77 33.3975 5.205 34.0975 5.905C34.7975 6.605 35.23 7.27 35.5925 8.205C35.8675 8.9075 36.1925 9.9675 36.28 11.9175C36.3775 14.025 36.3975 14.6575 36.3975 19.995C36.3975 25.3325 36.3775 25.9675 36.28 28.075C36.1925 30.025 35.865 31.0825 35.5925 31.7875C35.2719 32.6559 34.7601 33.4411 34.095 34.085C33.395 34.785 32.73 35.2175 31.795 35.58C31.095 35.855 30.035 36.18 28.0825 36.27C25.975 36.365 25.3425 36.3875 20.0025 36.3875C14.6625 36.3875 14.0275 36.365 11.92 36.27C9.97 36.18 8.9125 35.855 8.2075 35.58C7.33875 35.2598 6.55281 34.7489 5.9075 34.085C5.24188 33.4401 4.72931 32.6541 4.4075 31.785C4.135 31.0825 3.8075 30.0225 3.72 28.0725C3.625 25.965 3.605 25.3325 3.605 19.99C3.605 14.65 3.625 14.02 3.72 11.9125C3.81 9.9625 4.135 8.9025 4.41 8.1975C4.7725 7.265 5.2075 6.5975 5.9075 5.8975C6.6075 5.1975 7.2725 4.765 8.2075 4.4025C8.9125 4.1275 9.97 3.8025 11.92 3.7125C13.765 3.6275 14.48 3.6025 18.2075 3.6V3.605V3.605ZM30.6775 6.925C30.3623 6.925 30.0502 6.98708 29.7591 7.10769C29.4679 7.2283 29.2033 7.40508 28.9804 7.62794C28.7576 7.8508 28.5808 8.11538 28.4602 8.40656C28.3396 8.69774 28.2775 9.00983 28.2775 9.325C28.2775 9.64017 28.3396 9.95226 28.4602 10.2434C28.5808 10.5346 28.7576 10.7992 28.9804 11.0221C29.2033 11.2449 29.4679 11.4217 29.7591 11.5423C30.0502 11.6629 30.3623 11.725 30.6775 11.725C31.314 11.725 31.9245 11.4721 32.3746 11.0221C32.8246 10.572 33.0775 9.96152 33.0775 9.325C33.0775 8.68848 32.8246 8.07803 32.3746 7.62794C31.9245 7.17786 31.314 6.925 30.6775 6.925V6.925ZM20.0025 9.73C18.6402 9.70875 17.2872 9.95871 16.0224 10.4654C14.7577 10.972 13.6063 11.7252 12.6354 12.6811C11.6645 13.6369 10.8934 14.7764 10.3671 16.0331C9.8408 17.2899 9.56975 18.6388 9.56975 20.0012C9.56975 21.3637 9.8408 22.7126 10.3671 23.9693C10.8934 25.2261 11.6645 26.3656 12.6354 27.3214C13.6063 28.2773 14.7577 29.0305 16.0224 29.5371C17.2872 30.0438 18.6402 30.2938 20.0025 30.2725C22.6989 30.2304 25.2705 29.1298 27.1624 27.2081C29.0544 25.2865 30.1148 22.6979 30.1148 20.0012C30.1148 17.3046 29.0544 14.716 27.1624 12.7944C25.2705 10.8727 22.6989 9.77207 20.0025 9.73V9.73ZM20.0025 13.3325C21.7708 13.3325 23.4667 14.035 24.7171 15.2854C25.9675 16.5358 26.67 18.2317 26.67 20C26.67 21.7683 25.9675 23.4642 24.7171 24.7146C23.4667 25.965 21.7708 26.6675 20.0025 26.6675C18.2342 26.6675 16.5383 25.965 15.2879 24.7146C14.0375 23.4642 13.335 21.7683 13.335 20C13.335 18.2317 14.0375 16.5358 15.2879 15.2854C16.5383 14.035 18.2342 13.3325 20.0025 13.3325V13.3325Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconTwitter(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="34"
        viewBox="0 0 40 34"
        fill="#126244"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.565 33.5C27.66 33.5 35.9175 20.9925 35.9175 10.165C35.9175 9.81502 35.9175 9.46002 35.9025 9.11002C37.5101 7.94624 38.8977 6.5054 40 4.85502C38.4983 5.51715 36.9069 5.95354 35.2775 6.15002C36.9938 5.12412 38.2793 3.50995 38.895 1.60752C37.2825 2.56283 35.5175 3.23346 33.6775 3.59002C32.4405 2.27258 30.8035 1.39982 29.0202 1.10692C27.2369 0.814017 25.4068 1.11733 23.8133 1.96987C22.2199 2.82241 20.952 4.1766 20.2061 5.82267C19.4602 7.46875 19.2779 9.31486 19.6875 11.075C16.4244 10.9114 13.232 10.0637 10.3176 8.58688C7.40317 7.11007 4.83171 5.03713 2.77 2.50252C1.72335 4.31023 1.40393 6.44853 1.87662 8.48319C2.3493 10.5179 3.57864 12.2963 5.315 13.4575C4.01385 13.4133 2.7413 13.0639 1.6 12.4375V12.55C1.60224 14.4437 2.25827 16.2786 3.45718 17.7444C4.6561 19.2103 6.32437 20.2172 8.18 20.595C7.47566 20.7891 6.74807 20.8858 6.0175 20.8825C5.50246 20.8841 4.98845 20.8364 4.4825 20.74C5.00697 22.3702 6.02818 23.7954 7.40312 24.8162C8.77805 25.837 10.4378 26.4021 12.15 26.4325C9.24139 28.717 5.6485 29.956 1.95 29.95C1.2983 29.9528 0.647058 29.9152 0 29.8375C3.75379 32.2307 8.11324 33.5014 12.565 33.5V33.5Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconLinkedin(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="#126244"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 2.865C0 1.2825 1.315 0 2.9375 0H37.0625C38.685 0 40 1.2825 40 2.865V37.135C40 38.7175 38.685 40 37.0625 40H2.9375C1.315 40 0 38.7175 0 37.135V2.865ZM12.3575 33.485V15.4225H6.355V33.485H12.3575ZM9.3575 12.955C11.45 12.955 12.7525 11.57 12.7525 9.835C12.715 8.0625 11.4525 6.715 9.3975 6.715C7.3425 6.715 6 8.065 6 9.835C6 11.57 7.3025 12.955 9.3175 12.955H9.3575V12.955ZM21.6275 33.485V23.3975C21.6275 22.8575 21.6675 22.3175 21.8275 21.9325C22.26 20.855 23.2475 19.7375 24.9075 19.7375C27.08 19.7375 27.9475 21.3925 27.9475 23.8225V33.485H33.95V23.125C33.95 17.575 30.99 14.995 27.04 14.995C23.855 14.995 22.4275 16.745 21.6275 17.9775V18.04H21.5875C21.6008 18.0191 21.6141 17.9983 21.6275 17.9775V15.4225H15.6275C15.7025 17.1175 15.6275 33.485 15.6275 33.485H21.6275Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

export function IconGoogle() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="#126244"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.8625 16.3951C39.0957 17.7375 39.212 19.0976 39.21 20.4601C39.21 26.5451 37.035 31.6901 33.25 35.1726H33.255C29.945 38.2301 25.395 40.0001 20 40.0001C14.6957 40.0001 9.60859 37.893 5.85787 34.1422C2.10714 30.3915 0 25.3044 0 20.0001C0 14.6958 2.10714 9.60869 5.85787 5.85796C9.60859 2.10724 14.6957 9.90134e-05 20 9.90134e-05C24.9648 -0.0580469 29.7596 1.80718 33.38 5.2051L27.67 10.9151C25.6059 8.94754 22.8512 7.87008 20 7.9151C14.7825 7.9151 10.35 11.4351 8.77 16.1751C7.93227 18.6589 7.93227 21.3488 8.77 23.8326H8.7775C10.365 28.5651 14.79 32.0851 20.0075 32.0851C22.7025 32.0851 25.0175 31.3951 26.8125 30.1751H26.805C27.8473 29.4846 28.7388 28.5901 29.4259 27.5456C30.1129 26.501 30.5812 25.3281 30.8025 24.0976H20V16.3976H38.8625V16.3951Z"
        fill="#126244"
      />
    </svg>
  );
}

export function IconLocation(props) {
  return (
    <svg
      width="10"
      height="14"
      viewBox="0 0 10 14"
      fill={props.color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.9 0C2.191 0 0 2.191 0 4.9C0 8.575 4.9 14 4.9 14C4.9 14 9.8 8.575 9.8 4.9C9.8 2.191 7.609 0 4.9 0ZM4.9 6.65C3.934 6.65 3.15 5.866 3.15 4.9C3.15 3.934 3.934 3.15 4.9 3.15C5.866 3.15 6.65 3.934 6.65 4.9C6.65 5.866 5.866 6.65 4.9 6.65Z"
        fill={props.color}
      />
    </svg>
  );
}

export function Logout(props) {
  const [color, setColor] = useState(props.defaultColor);
  return (
    <div
      onMouseEnter={() => setColor(props.hoverColor)}
      onMouseLeave={() => setColor(props.defaultColor)}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          // d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"
          d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6l5-4-5-4v3H9v2h6v3z"
          fill={color}
        />
      </svg>
    </div>
  );
}
