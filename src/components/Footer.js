import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Tanko"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        主页
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        关于腾柯
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/products">
                        腾柯产品
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        公司动态
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        联系我们
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 ">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="https://shop0729e047g0221.1688.com">
                        网上商城
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
