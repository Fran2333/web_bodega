import Link from "next/link";
const Footer = ({ footer }) => {
  switch (footer) {
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 />;
    default:
      return <DefaultFooter />;
  }
};
export default Footer;

const DefaultFooter = () => (
  <footer className="footer-default footer-white dark-black-bg">
    <div className="container">
      <div className="footer-top wow fadeInUp">
        <div className="row">
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex justify-content-center">
              <div className="site-logo text-center">
                <Link href="/">
                  <a className="brand-logo">
                    <img
                      src="assets/images/logo/logo-1.png"
                      alt="Footer Logo"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>ubicacion</h5>
                <h6></h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 footer-contact-item">
            <div className="contact-info d-flex">
              <div className="icon">
                <i className="flaticon-placeholder" />
              </div>
              <div className="text">
                <h5>Email</h5>
                <h6>
                  <a href="mailto:hotlineinfo@gmial.com">
                    info@bodeguitasanjorge.com
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-widget pt-70 pb-25">
        <FooterMenu />
      </div>
      
      <div className="footer-copyright">
        <div className="col-lg-12">
          <div className="copyright-text text-center">
            <p>© 2023 Bodeguitas San Jorge. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
);



const FooterMenu = () => (
  <div className="row">
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12">
      <div className="footer-widget about-widget mb-40 wow fadeInDown">
        <h4 className="widget-title">Nosotros</h4>
        <div className="footer-about-content">
          <p>
            Sit amet consectetur adipiscing elit sed do eiusmo tempor incidunt
            ut labore et dolore magna aliquae. Quis ipsum suspendisse ultrices
            gravida commodo viverra
          </p>
          <div className="social-box">
            <h4 className="mb-15">Siguenos</h4>
            <ul className="social-link">
              <li>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-lg-4 col-md-7 col-sm-12">
      <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
        <h4 className="widget-title">Services</h4>
        <div className="footer-widget-nav">
          <ul>
            <li>
              <a href="">texts</a>
            </li>
            <li>
              <a href=""> Texto</a>
            </li>
            <li>
              <a href="">Texto</a>
            </li>
            <li>
              <a href="">Texto</a>
            </li>
            <li>
              <a href="">MTexto</a>
            </li>
            <li>
              <a href="">Texto</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
