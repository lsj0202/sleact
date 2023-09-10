import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

const Workspace: FC = ({ children }) => {
  const { data, error, revalidate } = useSWR('/api/users', fetcher);
  const onLogout = useCallback(() => {
    axios
      .post('http://localhost:3095/api/users/logout', null, {
        withCredentials: true,
      }) // 쿠키 공유
      .then(() => {
        revalidate(); // 스토리지(쿠키) 삭제
      });
  }, []);
  return (
    <>
      <button onClick={onLogout}>
        <Link to="/login">로그아웃</Link>
      </button>
      <div>{children}</div>
    </>
  );
};

export default Workspace;
