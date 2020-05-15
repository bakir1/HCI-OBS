import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Address</li>
                <li>phone number </li>
                <li>email</li>
              </ul>
            </div>
            {/* Column 2 */}
            <div className="col-md-3 col-sm-6">
              <h4>Blog</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Salt</a>
                </li>
                <li>
                  <a href="/">Sweets</a>
                </li>
                <li>
                  <a href="/">Something New</a>
                </li>
                <li>
                  <a href="/">Reviews</a>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className="col-md-3 col-sm-6">
              <h4>Tutorial</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Tutorial Salt</a>
                </li>
                <li>
                  <a href="/">Tutorial Sweets</a>
                </li>
                <li>
                  <a href="/">Make Tutorial</a>
                </li>
                <li>
                  <a href="/">News</a>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4>Social Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Facebook</a>
                </li>
                <li>
                  <a href="/">Instagram</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Pinterest</a>
                </li>
                <li>
                  <a href="/">BuyMeCoffe</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy; {new Date().getFullYear()} Online Bakery Shop - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainYellow);
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainYellow);
  }
`;
