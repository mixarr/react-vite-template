import { Route, Routes } from 'react-router-dom';

import ErrorPage from './error';
import IndexPage from './index';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
