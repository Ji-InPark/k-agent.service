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
