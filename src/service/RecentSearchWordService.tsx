import { useRecoilState } from 'recoil';
import { recentSearchWordsAtoms } from '../recoil/atoms';
import { RecentSearchWordEnum } from '../types';

function RecentSearchWordService() {
  const [recentSearchWords, setRecentSearchWords] = useRecoilState(recentSearchWordsAtoms);

  const deleteRecentSearchWord = (searchWord: string) => {
    const words = recentSearchWords.filter((it) => it !== searchWord);

    setRecentSearchWords(words);
  };

  const addRecentSearchWord = (searchText: string) => {
    if (searchText === '') return;

    const words = [searchText, ...recentSearchWords.filter((it) => it !== searchText)];

    if (words.length > 3) words.pop();

    setRecentSearchWords(words);
  };

  return (type: RecentSearchWordEnum) => {
    if (type == RecentSearchWordEnum.ADD) return addRecentSearchWord;
    else return deleteRecentSearchWord;
  };
}

export default RecentSearchWordService;
