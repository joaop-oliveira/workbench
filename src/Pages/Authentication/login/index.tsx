import * as React from 'react';
import { FormGroup, InputGroup, Overlay, Classes, Button } from '@blueprintjs/core';
import { AuthenticationContext } from '../../../blocs/index';
import { ShowLoginFormEvent } from '../../../blocs/authentication/events';

interface Props {
  path: string;
}

export function Login(props: Props) {
  const authenticationBloc = React.useContext(AuthenticationContext);
  const isOpen = authenticationBloc.useIsOpenOverlaySubscription();
  function handleClose() {
    authenticationBloc.dispatch(new ShowLoginFormEvent(false));
  }
  return (
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center">
        <Overlay isOpen={isOpen} className={Classes.OVERLAY} hasBackdrop canOutsideClickClose>
          <div className={`${Classes.CARD} ${Classes.ELEVATION_4}`}>
            <FormGroup label="Username" labelFor="username" helperText="Type here your username...">
              <InputGroup id="username" leftIcon="user" />
            </FormGroup>
            <FormGroup label="Passoword" labelFor="password" helperText="And now your password">
              <InputGroup id="password" leftIcon="lock" />
            </FormGroup>
            <div className={Classes.DIALOG_FOOTER_ACTIONS}>
              <Button onClick={handleClose}>Login</Button>
            </div>
          </div>
        </Overlay>
      </div>
    </div>
  );
}
