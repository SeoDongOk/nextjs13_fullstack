import { FC, useEffect, useState } from 'react';
import { type Language } from 'prism-react-renderer';
import { useTheme } from 'next-themes';

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
  const {} = useTheme();
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
  }, []);
  return <div>Code</div>;
};

export default Code;
