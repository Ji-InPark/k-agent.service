import { css } from '@emotion/react';

function Header() {
  return (
    <div>
      <div
        css={css({
          fontSize: 56,
        })}
      >
        Military Checker
      </div>
    </div>
  );
}

export default Header;
