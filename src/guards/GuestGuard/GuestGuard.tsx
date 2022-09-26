import React, { FC } from 'react';
import { Redirect } from 'react-router';

// configs
import { PATH_NAME } from 'configs';

// services
import authService from 'services/authService';

const GuestGuard: FC<any> = ({ children }: any) => {
  const isAuth = authService.getAccessToken();

  if (isAuth) return <Redirect to={PATH_NAME.ROOT} />;

  return <>{children}</>;
};

export default GuestGuard;
