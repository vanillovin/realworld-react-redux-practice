import React from 'react';

export const CurrentUserContext = React.createContext<null | User>(null);
export const SetCurrentUserContext = React.createContext<
  React.Dispatch<React.SetStateAction<null | User>>
>(() => {});

export type User = {
  email: string;
  username: string;
  image: string;
  token: string;
};
