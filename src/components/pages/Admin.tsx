import React, { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';

function Admin() {
  const [password, setPassword] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div
      css={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'olive',
        padding: '20px',
      })}
    >
      <h2 css={css({ marginBottom: '20px', color: 'white' })}>병역일터 정보 업데이트 페이지</h2>
      <div css={css({ marginBottom: '20px' })}>
        <input type="file" id="file" onChange={handleFileChange} />
      </div>
      <div css={css({ marginBottom: '20px' })}>
        <label htmlFor="password" css={css({ color: 'white' })}>
          비밀번호:
        </label>
        <input type={'password'} id="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button disabled={!selectedFile || !password}>Upload File</button>
      </div>
    </div>
  );
}

export default Admin;
