import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { HeaderItem } from './HeaderItem';

interface Props {}

export function Header({  }: Props): React.ReactElement {
  return (
    <nav className="navbar navbar-expand-lg nav-color navbar-light nunito font-weight-bold d-flex justify-content-between">
      <div className="d-flex justify-content-start">
        <a className="navbar-brand text-light" href="#">
          <FontAwesomeIcon icon={faLaptopCode} color="white" />
          {'  Workbench'}
        </a>
        <ul className="navbar-nav">
          <HeaderItem to="/home" datacy="header-home-link">
            {'Home'}
          </HeaderItem>
          <HeaderItem to="/posts" datacy="header-posts-link">
            {'Posts'}
          </HeaderItem>
        </ul>
      </div>
      <ul className="navbar-nav">
        <HeaderItem to="/login" datacy="header-login-link">
          {'Login'}
        </HeaderItem>
      </ul>
    </nav>
  );
}
