import ReactDOM from 'react-dom';
import React from 'react';
import Home from './realworld/pages/Home';
import './style.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './realworld/components/NavBar';
import ArticleDetail from './realworld/pages/ArticleDetail';

const queryClient = new QueryClient();

function App() {
  // history vs hash(spa)
  // https://reactrouter.com/docs/en/v6/getting-started/tutorial
  // https://reactrouter.com/docs/en/v6/getting-started/tutorial#connect-the-url
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article/:slug" element={<ArticleDetail />} />
        </Routes>
      </HashRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
// https://react-redux.realworld.io/#/?_k=sia642
