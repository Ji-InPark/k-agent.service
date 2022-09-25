import { css } from '@emotion/react';

function SearchBar() {
  return (
    <div>
      <input
        css={css({
          marginLeft: 30,
        })}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}

export default SearchBar;
