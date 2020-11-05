import React from 'react';
import PropTypes from 'prop-types';

const WarningIcon = ({width, fillColor}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    focusable="false"
    width={width}
    style={{transform: 'rotate(360deg)'}}
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 64 64"
  >
    <path
      d="M5.9 62c-3.3 0-4.8-2.4-3.3-5.3L29.3 4.2c1.5-2.9 3.9-2.9 5.4 0l26.7 52.5c1.5 2.9 0 5.3-3.3 5.3H5.9z"
      fill={fillColor}
    />
    <g fill="#231f20">
      <path d="M27.8 23.6l2.8 18.5c.3 1.8 2.6 1.8 2.9 0l2.7-18.5c.5-7.2-8.9-7.2-8.4 0" />
      <circle cx="32" cy="49.6" r="4.2" />
    </g>
    <rect x="0" y="0" width="64" height="64" fill="rgba(0, 0, 0, 0)" />
  </svg>
);

WarningIcon.defaultProps = {
  width: '100%',
  fillColor: '#FFD048',
};

WarningIcon.propTypes = {
  width: PropTypes.string,
  fillColor: PropTypes.string,
};

export default WarningIcon;
