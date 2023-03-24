import Link from "next/link";
import Slider from "react-slick";
import Layout from "../src/layouts/Layout";
import {
  heroSliderOne
} from "../src/sliderProps";






const Index = () => {
  return (
    <Layout header={1}>
      <section className="hero-area-one">
        <Slider {...heroSliderOne} className="hero-slider-one">
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-1.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="hero-content text-center">
                    <h1 data-animation="fadeInUp" data-delay=".5s" className="fontsize">
                    El lugar que necesitas para organizar tus espacios!
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="#nosotros">
                        <a className="main-btn btn-yellow">Nosotros</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-2.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                 
                    <h1 data-animation="fadeInUp" data-delay=".5s" className="fontsize">
                    El lugar que necesitas para organizar tus espacios!
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="#nosotros">
                        <a className="main-btn btn-yellow">Nosotros</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-3.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="hero-content text-center">
               
                    <h1 data-animation="fadeInUp" data-delay=".5s" className="fontsize">
                    El lugar que necesitas para organizar tus espacios!
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="#nosotros">
                        <a className="main-btn btn-yellow">Nosotros</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_one-slider-4.jpg)",
              }}
            />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="hero-content text-center">
                    
                    <h1 data-animation="fadeInUp" data-delay=".5s" className="fontsize">
                     Bienvenido a Bodeguitas San Jorge
                    </h1>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link href="#nosotros">
                        <a className="main-btn btn-yellow">Nosotros</a>
                      </Link>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section">
        <div className="container-1350">
          <div className="features-wrap-one wow fadeInUp">
            <div className="row justify-content-center">
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="features-item d-flex mb-30">
                  <div className="fill-number">01</div>
                  <div className="icon">
                 <i className="iconfont icon-d-heart"></i>
                  </div>
                  <div className="text">
                    <h5>Contratos desde un mes </h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="features-item d-flex mb-30">
                  <div className="fill-number">02</div>
                  <div className="icon">
                    
                  </div>
                  <div className="text">
                    <h5>Seguro basico inlcuido</h5>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-12">
                <div className="features-item d-flex mb-30">
                  <div className="fill-number">03</div>
                  <div className="icon">
                   
                  </div>
                  <div className="text">
                    <h5>Un solo pago al mes </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section p-r z-1 pt-130 pb-80" id="nosotros">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="about-one_content-box mb-50">
                <div className="section-title section-title-left mb-30 wow fadeInUp">
                  <span className="sub-title">Nosotros</span>
                  <h2> Bodeguitas San Jorge</h2>
                </div>
                <div
                  className="quote-text mb-35 wow fadeInDown"
                  data-wow-delay=".3s"
                >
                  <p>
                  Con mas de 30 años en experiencia de almacenaje en Complejo industial bodegas San Jorge decidimos crear Bodeguitas San Jorge; un lugar que permite almacenar desde aritulos de hogar hasta productos de tu empresa. Con espacios que se adecuan a tu necesidad y presupuesto! Ubicado en la zona mas centra del pais. 
                  </p>
                </div>
                
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="about-one_image-box p-r mb-50 pl-100">
               
                <div className="about-img_two wow fadeInRight">
                  <img src="assets/images/about/about-1.png" alt="About Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-one dark-black-bg pt-130 pb-125 p-r z-1 column justify-content-center">
        <div className="container column justify-content-center ">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10 ">
              <div className="section-title section-title-white text-center mb-60 wow fadeInUp">
                <span className="sub-title">Bodegas</span>
                <h2>Espacios Bodegas</h2>
              </div>
            </div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="text">
                  <h3 className="title">
                   
                  <img src="assets/images/bodega1.webp" className="images-bodegas"  alt="Icon" />
                  <p>Bodega de 5mts2</p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
               
                <div className="text">
                  <h3 className="title">
                  
                  <img src="assets/images/bodega2.webp"  className="images-bodegas"  alt="Icon" />
                  <p>bodega de 6 mts2 </p>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
               
                <div className="text">
                  <h3 className="title">
                   
                  <img src="assets/images/bodega3.webp"  className="images-bodegas" alt="Icon" />
                    <p>bodega de 8 mts </p>
                  </h3>
                </div>
              </div>
            </div>
           
           
           
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="play-one_content-box bg_cover wow fadeInDown"
                style={{
                 
                }}
              >
                <a
                  href="#"
                  className="video-popup"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      
      {/*====== Start Service Section ======*/}
      <section className="popular-service p-r z-1 pt-130 pb-135" id="servicios">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Nuestros Servicios</span>
                <h2>Servicios</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/vigilancia.svg" className="icon-services" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                   
                      <a>Vigilancia las 24 horas</a>
                  
                  </h3>
                  
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/camara.svg" className="icon-services" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    
                      <a>Circuito de camaras </a>
                
                  </h3>
                 
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/alarma.svg" className="icon-services" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    
                      <a>Sistema de alarma por bodegas</a>
                   
                  </h3>
                
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-holder mb-50 wow fadeInDown">
                <img
                  src="assets/images/about/about-1.png"
                  alt="Service Image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/fumigacion.svg" className="icon-services" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                  
                      <a>Fumigacion mensual </a>
                   
                  </h3>
                  
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/seguro.svg" className="icon-services" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                   
                      <a>Seguros de daños </a>
                    
                  </h3>
                  
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Fancy Text Block Section ======*/}
     
      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-one light-gray-bg p-r z-1">
      </section>
      {/*====== End Testimonial Section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-one p-r z-2" id="contactenos">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-lg-6">
              <div className="contact-one_content-box wow fadeInLeft">
                <div className="contact-wrapper">
                  <div className="section-title section-title-left mb-40">
                    <span className="sub-title">Contáctanos</span>
                    <h2>¿Necesitas una bodega?</h2>
                  </div>
                  <div className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form_group">
                        <input
                          type="text"
                          className="form_control"
                          placeholder="Nombre completo"
                          name="name"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Email"
                          name="email"
                          required=""
                        />
                      </div>
                      <div className="form_group">
                        <textarea
                          className="form_control"
                          placeholder="mensaje"
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form_group">
                        <button className="main-btn yellow-bg">
                          Enviar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="contact-one_information-box bg_cover wow fadeInRight"
                style={{
                  backgroundImage: "url(assets/images/about/about-1.png)",
                }}
              >
                <div className="information-box">
                  <h3>Contáctanos</h3>
                 
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-placeholder" />
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Ubicacion</span>
                      <h5>Prolongacion alameda Juan Pablo II</h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-email" />
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Email</span>
                      <h5>
                        <a href="mailto:hotline@gmail.com">info@bodeguitasanjorge.com</a>
                      </h5>
                    </div>
                  </div>
                  <div className="information-item_one d-flex mb-25">
                    <div className="icon">
                      <i className="flaticon-phone-call" />
                    </div>
                    <div className="info">
                      <span className="sub-title mb-1">Numero</span>
                      <h5>
                        <a href="tel:+0123456789">+503 2261-0839 <br/>
+503 7039-0934<br/>
+503 7601-5097
</a>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
     
      {/*====== Start Footer ======*/}

      {/*====== End Footer ======*/}
      {/*====== back-to-top ======*/}
    </Layout>
  );
};
export default Index;
