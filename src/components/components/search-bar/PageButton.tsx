import { css } from '@emotion/react';
import Colors from '../../../assets/colors';
import { useRecoilValue } from 'recoil';
import { selectedPageNumberAtoms } from '../../../recoil/atoms';

type Props = {
  text: string;
  onClick: () => void;
};

function PageButton({ text, onClick }: Props) {
  const selectedPageNumber = useRecoilValue(selectedPageNumberAtoms);

  return (
    <button
      css={css({
        textAlign: 'center',
        background: text == String(selectedPageNumber + 1) ? Colors.LIGHTSKY : 'white',
        height: '2rem',
        width: '2rem',
        border: 'none',
        borderRadius: '50%',
        '&:hover': {
          background: 'skyblue',
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
