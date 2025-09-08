import * as React from "react";
import { SVGProps } from "react";
const CompanyParty = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 50}
    height={props.height || 50}
    fill="none"
    viewBox="0 0 50 51"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.465}
          d="m22.322 22.808 2.57 2.568"
        />
        <mask
          id="c"
          width={50}
          height={50}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "luminance",
          }}
        >
          <path fill="#fff" d="M0 0h50v50H0V0Z" />
        </mask>
        <g
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
          strokeWidth={1.465}
          mask="url(#c)"
        >
          <path d="M29.076 27.699a1.312 1.312 0 0 0 0-1.857l-4.896-4.89a1.315 1.315 0 0 0-1.858 0 1.312 1.312 0 0 0 0 1.856 1.315 1.315 0 0 0-1.859 0 1.312 1.312 0 0 0 0 1.857l4.896 4.89a1.315 1.315 0 0 0 1.858 0 1.312 1.312 0 0 0 0-1.856 1.315 1.315 0 0 0 1.859 0ZM10.08 33.69c-2.476 1.543-5.135 2.655-8.12 3.353-.408.096-.818.202-1.228.319" />
          <path d="M12.646 49.268c.118-.406.226-.815.323-1.227 1.276-5.446 3.932-9.805 8.077-13.946l4.429-4.424-5.127-5.122-4.429 4.424c-.85.85-1.709 1.636-2.585 2.361M16.967 28.416l4.637 4.632" />
          <path d="M4.036 36.553v9.414h9.424" />
          <path d="M7.018 35.34v7.646h7.653M35.998 12.078l-8.509 8.5M37.911 13.99l-5.146 5.14M49.175 4.304a4.367 4.367 0 0 0-7.367-2.238l-.627.626a2.138 2.138 0 0 0 0 3.026l-3.618 2.739a.555.555 0 0 0-.057.836l3.407 3.404a.557.557 0 0 0 .854-.08l2.556-3.76a2.144 2.144 0 0 0 3.03 0c.538-.49 1.141-1.148 1.45-1.77M44.323 8.857 43.02 7.555M33.574 7.086l-1.66-.913-1.693.85.355-1.86-1.331-1.347 1.88-.236.87-1.682.806 1.713 1.87.308-1.382 1.295.285 1.872ZM38.532 33.373l-1.66-.912-1.693.85.355-1.86-1.331-1.347 1.88-.237.87-1.681.806 1.713 1.87.308-1.382 1.295.285 1.871ZM17.028 17.23l-1.66-.913-1.694.849.356-1.86-1.332-1.346 1.88-.237.87-1.681.807 1.713 1.87.307-1.382 1.296.285 1.871ZM31.305 24.181s10.078-4.097 17.962 5.531M25.675 18.678S29.776 8.608 20.14.732" />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 0h50v50H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default CompanyParty;
