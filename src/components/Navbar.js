import React from "react";
import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Tanko" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/">
                首页
              </Link>
              <Link className="navbar-item" to="/about">
                关于我们
              </Link>
              <Link className="navbar-item" to="/products">
                产品中心
              </Link>
              <Link className="navbar-item" to="/rd">
                研发中心
              </Link>
              <Link className="navbar-item" to="/service">
                服务流程
              </Link>
              <Link className="navbar-item" to="/join">
                招贤纳士
              </Link>
              <Link className="navbar-item" to="/news">
                新闻资讯
              </Link>
              <Link className="navbar-item" to="/contact">
                联系我们
              </Link>
             {/* <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>*/}
            </div>
            {/*<div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>*/}
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
