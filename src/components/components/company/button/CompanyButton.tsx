import { css } from '@emotion/react';

type Props = {
  buttonBackgroundColor: string;
  buttonOnClickUrl: string;
  buttonImageUrl: string;
  imageAlt: string;
  imageWidth: string | undefined;
  imageHeight: string | undefined;
  buttonText: string | undefined;
};

function CompanyButton({ buttonBackgroundColor, buttonOnClickUrl, buttonImageUrl, imageAlt, imageWidth = '100%', imageHeight = '100%', buttonText }: Props) {
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
          translate: '0% -15%',
        },
      })}
      onClick={() => window.open(buttonOnClickUrl, '_blank')}
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

export default CompanyButton;
