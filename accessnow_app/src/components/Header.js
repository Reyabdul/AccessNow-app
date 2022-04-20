import React from "react";
import Nav from './Nav';

class Header extends React.Component {
  render() {
    return(
      <header id="header">
        <h2 id="site-name"><a href="/">My React site</a></h2>
        <Nav />
      </header>
    );
  }
}
export default Header;