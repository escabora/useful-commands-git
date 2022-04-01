import { useEffect } from 'react';

export const DefineColor = ({ color }) => {
  useEffect(() => {
    window && (document.querySelector('body').style.backgroundColor = color);
  }, color);
  return (
    window && (document.querySelector('body').style.backgroundColor = color)
  );
};
