import * as React from 'react';

function IconHamburger(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 18"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M0 0h25v4H0zm0 7h25v4H0zm0 7h25v4H0z"
        fill="#242D52"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default IconHamburger;
