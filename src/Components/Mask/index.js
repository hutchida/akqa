import React from 'react';

const CurvedHouseBox = (
  <svg
    stroke="#bbc4ba"
    fill="none"
    height="400"
    width="400"
    viewBox="0 0 304 231"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m.5 36.3674c0-7.0571 4.76407-13.2061 11.6193-14.8418 26.9032-6.4192 93.2517-21.0256 139.8807-21.0256s112.977 14.6064 139.881 21.0256c6.855 1.6357 11.619 7.7847 11.619 14.8418v178.6326c0 8.56-6.94 15.5-15.5 15.5h-272c-8.56042 0-15.5-6.94-15.5-15.5z" />
  </svg>
);

export const Mask = () => {
  const image = 'https://picsum.photos/800'
  return (
    <div>
      <p>Lorem ipsum dolor sit amet</p>
      <div>{CurvedHouseBox}</div>
      <img src={image} />
    </div>
  );
};
