import * as React from 'react';
import { AuthenticationBloc } from './authentication';

export const AuthenticationContext = React.createContext(new AuthenticationBloc());
