import { css } from '@emotion/react';
import search from '../../../../axios';
import { useSetRecoilState } from 'recoil';
import { isLoadingAtoms } from '../../../../recoil/atoms';

type Props = {
  id: number;
  buttonBackgroundColor: string;
  kreditjobKey: string;
  buttonImageUrl: string;
  imageAlt: string;
  imageWidth?: string;
  imageHeight?: string;
  buttonText?: string;
};

function KreditjobButton({ id, buttonBackgroundColor, kreditjobKey, buttonImageUrl, imageAlt, imageWidth = '100%', imageHeight = '100%', buttonText }: Props) {
  const setIsLoading = useSetRecoilState(isLoadingAtoms);

  return (
    <div
      css={css({
        display: 'flex',
        background: buttonBackgroundColor,
        border: 'none',
        color: 'white',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        transition: '0.2s',
        '&:hover': {
          transform: 'scale(1.04)',
        },
      })}
      onClick={async () => {
        setIsLoading(true);
        const kreditjobUrl = `https://www.kreditjob.com/company/${
          kreditjobKey !== null ? kreditjobKey : await search.get<string>(`/kreditjob/${id}`).then((it) => it.data)
        }`;
        window.open(kreditjobUrl, '_blank');
        setIsLoading(false);
      }}
    >
      <img
        css={css({
          maxWidth: imageWidth,
          maxHeight: imageHeight,
        })}
        src={buttonImageUrl}
        alt={imageAlt}
      />
      {buttonText}
    </div>
  );
}

export default KreditjobButton;
