import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import QuestionMark from '../../assets/icon/QuestionMark';

function Header() {
  return (
    <div css={css({ background: '#777D71', maxHeight: '4rem' })}>
      <div
        css={css({
          display: 'flex',
          justifyContent: 'space-between',
          width: 'calc(100% - 2rem)',
          padding: '1rem',
        })}
      >
        <span css={css({ '&:hover': { cursor: 'pointer' } })}>
          <Link to={'/'}>
            <img css={css({ height: '2rem' })} src={require('../../assets/icon/title.png')} />
          </Link>
        </span>
        <span css={css({ '&:hover': { cursor: 'pointer' } })}>
          <Link to={'/information'}>
            <QuestionMark width={'2rem'} height={'2rem'} />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Header;
