import { css } from '@emotion/react';
import { useSearchParams } from 'react-router-dom';
import Colors from '@assets/colors';

type Props = {
  text: string | number;
  onClick: () => void;
};

function PageButton({ text, onClick }: Props) {
  const [searchParams] = useSearchParams();
  const selectedPageNumber = Number(searchParams.get('page')) || 0;

  return (
    <span
      css={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: text == String(selectedPageNumber + 1) ? Colors.LIGHTSKY : 'white',
        height: '2rem',
        width: '2rem',
        border: 'none',
        fontSize: '1rem',
        borderRadius: '50%',
        '&:hover': {
          background: 'skyblue',
          cursor: 'pointer',
        },
      })}
      onClick={onClick}
    >
      {text}
    </span>
  );
}

export default PageButton;
