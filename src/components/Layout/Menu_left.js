import { render } from '@testing-library/react';
import { Component } from 'react';

class Menu_left extends Component {
  render() {
    return (
      <div id="layoutSidenav_nav">
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
          <div className="sb-sidenav-menu">
            <div className="nav">
              <div className="sb-sidenav-menu-heading">Menu</div>
              <a class="nav-link" href="/">
                <div class="sb-nav-link-icon"><i class="fas fa-laptop-code"></i></div>
                Chẩn đoán
              </a>
              <a class="nav-link" href="./create">
                <div class="sb-nav-link-icon"><i className="fas fa-plus"></i></div>
                Thêm mới
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Menu_left;
