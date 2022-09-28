import { css } from '@emotion/react';
import Colors from '../../../assets/colors';
import Loading from '../../../assets/icon/Loading';

function LoadingModal() {
  return (
    <div
      css={css({
        zIndex: 1000,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: Colors.LIGHTGRAY,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <div
        css={css({
          position: 'absolute',
          width: 150,
          height: 150,
          padding: 40,
          textAlign: 'center',
          background: 'transparent',
          borderRadius: 10,
          '@keyframes spin': {
            from: { transform: ' rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
          animation: 'spin 1s ease infinite',
        })}
      >
        <Loading />
      </div>
    </div>
  );
}

export default LoadingModal;
