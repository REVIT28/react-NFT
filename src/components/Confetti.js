import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const ConfettiCompose = () => {
  const { width, height } = useWindowSize();
  return <Confetti gravity={0.11} numberOfPieces={150} width={width} height={height * 1.5} />;
};

export default ConfettiCompose;
