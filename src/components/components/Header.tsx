import { css } from '@emotion/react';

function Header() {
  return (
    <div>
      <div
        css={css({
          padding: '1rem',
        })}
      >
        <span css={css({ '&:hover': { cursor: 'pointer' } })} onClick={() => window.location.reload()}>
          <img css={css({ width: '15rem' })} src={require('../../assets/icon/title.png')} />
        </span>
      </div>
      <hr />
    </div>
  );
}

export default Header;
