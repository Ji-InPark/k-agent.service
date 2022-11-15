import { css } from '@emotion/react';
// @ts-ignore
import { ReactComponent as QuestionMark } from '../../assets/icon/QuestionMark.svg';

function Header() {
  return (
    <div css={css({ background: '#777D71', minHeight: '4rem' })}>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          width: 'calc(100% - 2rem)',
          padding: '1rem',
        })}
      >
        <span css={css({ '&:hover': { cursor: 'pointer' } })} onClick={() => window.location.reload()}>
          <img css={css({ height: '2rem' })} src={require('../../assets/icon/title.png')} />
        </span>
        <span css={css({ '&:hover': { cursor: 'pointer' } })} onClick={() => window.location.reload()}>
          <QuestionMark width={'2rem'} height={'2rem'} />
        </span>
      </div>
    </div>
  );
}

export default Header;
