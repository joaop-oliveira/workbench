import React from 'react';
import { Router } from '@reach/router';
import { Header } from './Components';
import { Home, Posts, PostPage, Login } from './Pages';
import { AuthenticationContext } from './blocs';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShowLoginFormEvent } from './blocs/authentication/events';

// j2w30zxxhhss Contenful Space ID
// sDCzA28w4Gd9kxGaHWB2HtYV5pWDEiKdS91ExlcHamk Contentful content delivery access token
// 11pFzNzeLqE5FdxbmIq7moUM8unc8c7h1Gzg8Xj3AVk Contenful preview access token

const App: React.FC = () => {
  const authenticationBloc = React.useContext(AuthenticationContext);
  function handleOpenOverlay() {
    authenticationBloc.dispatch(new ShowLoginFormEvent(true));
  }
  return (
    <>
      <Header openOverlay={handleOpenOverlay} />
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <Router>
              <Home path="/home" />
              <Posts path="/posts" />
              {/** 
              // @ts-ignore  */}
              <PostPage path="/post/:id" />
              <Login path=":none" />
            </Router>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
