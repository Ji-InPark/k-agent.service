import { css } from '@emotion/react';

function Header() {
  return (
    <div css={css({ textAlign: 'center' })}>
      <div
        css={css({
          fontSize: 56,
        })}
      >
        K-Agent
      </div>
      <div
        css={css({
          fontSize: 32,
        })}
      >
        간편한 병역특례 업체 조회
      </div>
    </div>
  );
}

export default Header;
