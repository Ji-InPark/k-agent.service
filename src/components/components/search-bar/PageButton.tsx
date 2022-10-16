import { css } from '@emotion/react';
import Colors from '../../../assets/colors';

type Props = {
  text: string;
  onClick: () => void;
};

function PageButton({ text, onClick }: Props) {
  return (
    <button
      css={css({
        textAlign: 'center',
        background: 'white',
        height: '2rem',
        width: '2rem',
        border: 'none',
        '&:hover': {
          background: Colors.LIGHTGRAY,
          cursor: 'pointer',
        },
      })}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PageButton;
