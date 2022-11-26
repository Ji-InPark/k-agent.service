import React from 'react';

type Props = {
  word: string;
};

function RecentSearchWord({ word }: Props) {
  return <div>{word}</div>;
}

export default RecentSearchWord;
