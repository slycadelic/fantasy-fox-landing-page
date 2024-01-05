import React from "react";

const FantasyFoxsvg = ({ stroke, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="test1"
            className={className}
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 300 300"
        >
            <defs>
                <radialGradient
                    id="test1-u-center-ring-0-stroke"
                    cx="0"
                    cy="0"
                    r="0.5"
                    gradientTransform="translate(.5 .5)"
                    gradientUnits="objectBoundingBox"
                    spreadMethod="reflect"
                >
                    <stop
                        id="test1-u-center-ring-0-stroke-0"
                        offset="88%"
                        stopColor="#8f8f8f"
                    ></stop>
                    <stop
                        id="test1-u-center-ring-0-stroke-1"
                        offset="100%"
                        stopColor="#000"
                    ></stop>
                </radialGradient>
            </defs>
            <ellipse
                id="test1-u-outer-ring"
                fill='rgba(210,219,237,0)'
                stroke="#000"
                strokeWidth="38"
                rx="130"
                ry="130"
                transform="translate(150 150)"
            ></ellipse>
            <ellipse
                id="test1-u-marking-rings"
                fill="rgba(255,255,255,0)"
                stroke={stroke || '#ff2800'}
                strokeWidth="5"
                rx="48.65"
                ry="49.793"
                transform="matrix(2.67213 0 0 2.61081 151.611 148.791)"
            ></ellipse>
            <g id="test1-s-g1" strokeWidth="0">
                <path
                    id="test1-u-rectangle"
                    d="M-15.076-2.701l135.534-1.29-11.217 34.594-112.037 1.136-12.28-34.44z"
                    transform="matrix(.74403 .00726 -.00699 .71573 110.759 12.786)"
                ></path>
                <path
                    id="test1-u-copy-of-rectangle"
                    d="M-15.076-2.701l135.534-1.29-11.217 34.594-112.037 1.136-12.28-34.44z"
                    transform="matrix(.74406 -.0041 -.00394 -.71575 111.5 286.497)"
                ></path>
                <path
                    id="test1-u-copy-of-rectangle-2"
                    d="M-15.076-2.701l135.534-1.29-11.217 34.594-112.037 1.136-12.28-34.44z"
                    transform="matrix(.55171 -.49924 -.48025 -.53073 208.628 280.245)"
                ></path>
                <path
                    id="test1-u-copy-of-rectangle-22"
                    d="M-15.076-2.701l135.534-1.29-11.217 34.594-112.037 1.136-12.28-34.44z"
                    transform="matrix(.57147 .4765 .45837 -.54974 33.255 229.269)"
                ></path>
            </g>
            <path
                id="test1-s-polygon1"
                stroke="#000"
                strokeWidth="10"
                d="M2.24102 -113.304497L14.035605 -37.827848 70.224759 -92.296366 33.119644 -24.641102 112.24102 -37.296366 40.409099 -3.304497 112.24102 30.687372 33.119644 18.032108 70.224759 85.687372 14.035605 31.218854 2.24102 106.695503 -9.553565 31.218854 -65.742719 85.687372 -28.637604 18.032108 -107.75898 30.687372 -35.927059 -3.304497 -107.75898 -37.296366 -28.637604 -24.641102 -65.742719 -92.296366 -9.553565 -37.827848 2.24102 -113.304497z"
                transform="matrix(.00328 .96785 -1.01601 .00344 147.007 148.214)"
            ></path>
            <ellipse
                id="test1-u-center-ring-1"
                fill="rgba(0,0,0,0)"
                stroke="#000"
                strokeWidth="5"
                rx="9.356"
                ry="9.576"
                transform="matrix(2.67213 0 0 2.61081 150 150)"
            ></ellipse>
            <ellipse
                id="test1-u-center-ring-0"
                stroke="url(#test1-u-center-ring-0-stroke)"
                strokeWidth="3"
                rx="7.485"
                ry="7.66"
                transform="matrix(2.67213 0 0 2.61081 150 150)"
            ></ellipse>
            <style></style>
        </svg>
    );
}

export default FantasyFoxsvg;