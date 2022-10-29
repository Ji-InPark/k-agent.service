import { css } from '@emotion/react';

function Header() {
  return (
    <div css={css({ background: '#777D71', height: '4rem' })}>
      <div
        css={css({
          padding: '1rem',
        })}
      >
        <span css={css({ '&:hover': { cursor: 'pointer' } })} onClick={() => window.location.reload()}>
          <img css={css({ width: '15rem' })} src={require('../../assets/icon/title.png')} />
        </span>
      </div>
    </div>
  );
}

export default Header;
