import React from 'react';
import { css } from '@emotion/react';
import X from '../../../../assets/icon/XIcon';
import RecentSearchWordService from '../../../../service/RecentSearchWordService';
import { RecentSearchWordEnum } from '../../../../types';
import SearchService from '../../../../service/SearchService';

type Props = {
  word: string;
};

function RecentSearchWord({ word }: Props) {
  const deleteRecentSearchWordService = RecentSearchWordService()(RecentSearchWordEnum.DELETE);
  const searchService = SearchService();

  return (
    <div
      css={css({
        display: 'flex',
        alignItems: 'center',
        borderStyle: 'solid',
        borderRadius: '1rem',
        padding: '0.3rem 0.5rem',
        marginRight: '0.5rem',
        '&:hover': {
          cursor: 'pointer',
        },
      })}
    >
      <span
        css={css({
          maxWidth: '5rem',
          whiteSpace: 'nowrap',
          overflow: 'auto',
          marginRight: '1rem',
        })}
        onClick={() => searchService(word, false)}
      >
        {word}
      </span>
      <span
        css={css({
          color: 'gray',
          '&:hover': {
            color: 'black',
          },
        })}
        onClick={() => deleteRecentSearchWordService(word)}
      >
        <X width={'1.2rem'} height={'1.2rem'} />
      </span>
    </div>
  );
}

export default RecentSearchWord;
