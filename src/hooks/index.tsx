import React from 'react';

import { AuthProvider } from './auth';

const AppPorvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppPorvider;
