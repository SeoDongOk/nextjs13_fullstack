'use client';
import { FC, useEffect, useState } from 'react';
import { Highlight, type Language } from 'prism-react-renderer';
import { useTheme } from 'next-themes';
import darkTheme from 'prism-react-renderer';
import lightTheme from 'prism-react-renderer';
import defaultProps from 'prism-react-renderer';

interface CodeProps {
  code: string;
  show: boolean;
  langage: Language;
  animationDelay?: number;
  animated?: boolean;
}

const Code: FC<CodeProps> = ({
  code,
  langage,
  show,
  animated,
  animationDelay,
}) => {
  const { theme: applicationTheme } = useTheme();
  const [text, setText] = useState(animated ? '' : code);

  useEffect(() => {
    if (show && animated) {
      let i = 0;
      setTimeout(() => {
        const intervalId = setInterval(() => {
          setText(code.slice(0, i));
        }, 15);
      }, animationDelay || 150);
    }
  }, [code, show, animated, animationDelay]);

  //number of lines
  const lines = text.split(/\r\n|\r|\n/);

  const theme = applicationTheme === 'light' ? lightTheme : darkTheme;

  return (
    <Highlight
      {...defaultProps}
      code={text}
      language={langage}
      theme={theme}
    ></Highlight>
  );
};

export default Code;
