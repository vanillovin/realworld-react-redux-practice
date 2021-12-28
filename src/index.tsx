import ReactDOM from 'react-dom';
import React from 'react';
import Home from './realworld/pages/Home';
import './style.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
// https://react-redux.realworld.io/#/?_k=sia642
