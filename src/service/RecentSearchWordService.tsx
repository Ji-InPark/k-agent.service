import { useRecoilState } from 'recoil';
import { recentSearchWordsAtoms } from '@atoms/atoms';
import { RecentSearchWordEnum } from '@/types';

function RecentSearchWordService(method: RecentSearchWordEnum) {
  const [recentSearchWords, setRecentSearchWords] = useRecoilState(recentSearchWordsAtoms);

  const deleteRecentSearchWord = (searchWord: string) => {
    const words = recentSearchWords.filter((it) => it !== searchWord);

    setRecentSearchWords(words);
  };

  const addRecentSearchWord = (searchText: string) => {
    if (!searchText) return;

    const words = [searchText, ...recentSearchWords.filter((it) => it !== searchText)];

    if (words.length > 3) words.pop();

    setRecentSearchWords(words);
  };

  const methods = [addRecentSearchWord, deleteRecentSearchWord];

  return methods[method];
}

export default RecentSearchWordService;
