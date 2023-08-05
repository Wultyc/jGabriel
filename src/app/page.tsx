export default function Home() {
  return (
    <>
        <div id="preloader">
            <div id="status">
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>

        <nav id="navbar"  className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
            <div className="container">
                
                <a className="logo navbar-brand" href="#">Queue</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" 
                    aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                </button>

                <div className="collapse navbar-collapse navigation" id="navbarCollapse">
                    <ul id="navbar-navlist" className="navbar-nav navbar-nav-link ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#services">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#resume">Resume</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#news">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages
                            </a>
                            <div className="dropdown-menu rounded m-0" aria-labelledby="navbarDropdown">
                                <div className="container ms-0 ms-md-0">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a className="dropdown-item" href="page-blog.html">Blog</a>
                                            <a className="dropdown-item" href="page-blog-detail.html">Blog Detail</a>
                                            <a className="dropdown-item" href="page-portfolio.html">Portfolio</a>
                                            <a className="dropdown-item" href="page-portfolio-detail.html">Portfolio Detail</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul className="top-right text-right list-unstyled list-inline mb-0 mt-2 mt-sm-0 nav-social">
                        <li className="list-inline-item me-2"><a href="#"><i className="mdi mdi-facebook"></i></a></li>
                        <li className="list-inline-item me-2"><a href="#"><i className="mdi mdi-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="mdi mdi-instagram"></i></a></li>
                    </ul>
                    
                </div> 
            </div>
        </nav>

        <div className="hero-area position-relative bg-half-120" id="home"> {/* style="background-image:url('images/hero-bg.jpg')" */}
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12 align-items-center text-center">
                        <div className="title-heading mt-4 pb-60">
                            <img src="images/pal.png" className="img-fluid rounded-circle" alt=""/>
                            <h1 className="heading font-36 text-white mt-4">Here I'am Queue Downey</h1>
                            <h6 className="designation mb-3 text-white">I'm a Passionate <span className="text-primary">Web Designer</span></h6>
                            <div className="hero-btn mt-4 pt-2">
                                <a href="#" className="btn btn-primary rounded me-2 mb-2">Hire Me</a>
                                <a href="#" className="btn btn-primary rounded text-white mb-2">Download CV <i data-feather="download" className="fea icon-sm"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card public-profile border-0 rounded shadow no-margin" > {/** style="z-index: 1;" */}
                            <div className="card-body">
                                <div className="row align-items-center">
                                    <div className="col-lg-3 col-md-4 text-md-start">
                                        {/*<img src="images/client/05.jpg" className="avatar avatar-large rounded-circle shadow d-block mx-auto" alt="">*/} 
                                        <div className="about-details key-feature bg-light">
                                            <div className="media-body content">
                                                <h6 className="title mb-2">Personal Details</h6>
                                                <div className="bor-bottom mt-2 mb-2"></div>
                                                <p className="text-muted mb-2 mt-3 font-14"><a href="#" className="text-black">Email: </a> queue@gmail.com</p>
                                                <p className="text-muted mb-2 font-14"><a href="#" className="text-black">Languages: </a> English</p>
                                                <p className="text-muted mb-0 font-14"><a href="#" className="text-black">Nationality: </a> Australian</p>  
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-md-8">
                                        <div className="row align-items-end">
                                            <div className="col-md-12 text-md-start mt-4 mt-sm-0">
                                                <h4 className="heading me-2">I Am <span className="element text-primary" data-elements="Web Designer, Web Developer, Photographer"></span>
                                                    <span id="typed" className="text-primary"></span>
                                                </h4>
                                                <p className="text-light-muted mt-2">Obviously I'm a Web Designer. Web Developer with over 3 years of experience. 
                                                    Experienced with all stages of the development cycle for dynamic web projects. 
                                                    The as opposed to using 'Content here, content here', making it look like readable English.</p>
                                                <img src="images/signature.png" height="35" alt=""/>
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end col*/}
                                </div>{/*end row*/}
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>{/*end section */}


        {/* Service Start */}
        <section className="section bg-light" id="services">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">Awesome Service</h2>
                                <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                <span></span>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="feature-widget text-left rounded">
                            <div className="services-icon text-primary mb-3">
                                <i data-feather="monitor" className="fea icon-md"></i>
                            </div>
                            <div className="services-texts">
                                <h3 className="title mb-3">Web Developmnet</h3>
                                <p className="text-light-muted mb-4">With lots of unique blocks, you can easily build a page without coding.</p>
                                <a href="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="feature-widget text-left rounded">
                            <div className="services-icon text-primary mb-3">
                                <i data-feather="feather" className="fea icon-md"></i>
                            </div>
                            <div className="services-texts">
                                <h3 className="title mb-3">Design & Planning</h3>
                                <p className="text-light-muted mb-4">With lots of unique blocks, you can easily build a page without coding.</p>
                                <a href="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="feature-widget text-left rounded">
                            <div className="services-icon text-primary mb-3">
                                <i data-feather="disc" className="fea icon-md"></i>
                            </div>
                            <div className="services-texts">
                                <h3 className="title mb-3">Adobe Photoshop</h3>
                                <p className="text-light-muted mb-4">With lots of unique blocks, you can easily build a page without coding.</p>
                                <a href="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="feature-widget text-left rounded">
                            <div className="services-icon text-primary mb-3">
                                <i data-feather="layout" className="fea icon-md"></i>
                            </div>
                            <div className="services-texts">
                                <h3 className="title mb-3">Digital marketing</h3>
                                <p className="text-light-muted mb-4">With lots of unique blocks, you can easily build a page without coding.</p>
                                <a href="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="feature-widget text-left rounded">
                            <div className="services-icon text-primary mb-3">
                                <i data-feather="watch" className="fea icon-md"></i>
                            </div>
                            <div className="services-texts">
                                <h3 className="title mb-3">24 / 7</h3>
                                <p className="text-light-muted mb-4">With lots of unique blocks, you can easily build a page without coding.</p>
                                <a href="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="feature-widget text-left rounded">
                            <div className="icon services-icon text-primary mb-3">
                                <i data-feather="target" className="fea icon-md"></i>
                            </div>
                            <div className="services-texts">
                                <h3 className="title mb-3">Graphic Designer</h3>
                                <p className="text-light-muted mb-4">With lots of unique blocks, you can easily build a page without coding.</p>
                                <a href="#" className="text-primary">Read more <i className="mdi mdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>{/* end row */}
            </div>
        </section>
        {/* End Start */}

        {/* Start Section */}
        <section className="section" id="resume">
            <div className="container">

                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-4">
                        <div className="work-content mt-4">
                            <h2 className="text-capitalize">Work  Participation</h2>
                            <p className="mb-0 text-light-muted">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            <a href="#" className="btn btn btn-primary rounded mt-4 pt-2">See More <i className="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            <div className="main-timeline">
                                <div className="timeline mt-4">
                                    <a href="#" className="timeline-content">
                                        <div className="timeline-icon text-primary">
                                            <i data-feather="feather" className="fea icon-md"></i>
                                        </div>
                                        <h3 className="title mb-0">UX Designer</h3>
                                        <small className="company">Vivo - Senior Designer</small>
                                        <span className="badge skill-badge education-badge badge-light">2015 - 2018</span>
                                        <p className="description text-light-muted mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum
                                        </p>
                                    </a>
                                </div>
                                <div className="timeline mt-4">
                                    <a href="#" className="timeline-content">
                                        <div className="timeline-icon text-primary">
                                            <i data-feather="navigation" className="fea icon-md"></i>
                                        </div>
                                        <h3 className="title mb-0">Web Developer</h3>
                                        <small className="company">Oppo - HR Manager</small>
                                        <span className="badge skill-badge education-badge margin-50 badge-light">2012 - 2015</span>
                                        <p className="description text-light-muted mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum
                                        </p>
                                    </a>
                                </div>
                                <div className="timeline mt-4">
                                    <a href="#" className="timeline-content">
                                        <div className="timeline-icon text-primary">
                                            <i data-feather="package" className="fea icon-md"></i>
                                        </div>
                                        <h3 className="title mb-0">Graphic Designer</h3>
                                        <small className="company">Apple - Testor</small>
                                        <span className="badge skill-badge education-badge badge-light">2012 - 2010</span>
                                        <p className="description text-light-muted mt-2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* end container */}
        </section>{/* end section */}

        {/* Client Start */}
        <section className="section fan-fact" id="about"> {/* style="background-image:url('images/bg-pattern.png')" */}
            <div className="container">
                <div className="row" id="counter">
                    <div className="col-lg-3 col-6 my-3">
                        <div className="card counter-box border-0 shadow text-center rounded py-3">
                            <div className="card-body py-5">
                                <h2 className="mb-0"><span className="counter-value" data-target="97">0</span>%</h2>
                                <h5 className="counter-head mb-0">Happy Client </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 my-3">
                        <div className="card counter-box border-0 shadow text-center rounded py-3">
                            <div className="card-body py-5">
                                <h2 className="mb-0"><span className="counter-value" data-target="36">2</span> M </h2>
                                <h5 className="counter-head mb-0">Download </h5>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-6 my-3">
                        <div className="card counter-box border-0 shadow text-center rounded py-3">
                            <div className="card-body py-5">
                                <h2 className="mb-0"><span className="counter-value" data-target="3261">30</span> + </h2>
                                <h5 className="counter-head mb-0">Happy Users </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 my-3">
                        <div className="card counter-box border-0 shadow text-center rounded py-3">
                            <div className="card-body py-5">
                                <h2 className="mb-0"><span className="counter-value" data-target="39">1</span> + </h2>
                                <h5 className="counter-head mb-0">Years of expe. </h5>
                            </div>
                        </div>
                    </div>
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>
        {/* End Section Client */}


        {/* Skill & CTA START */}
        <section className="cta-full">
            <div className="container">
                <div className="row position-relative">
                    <div className="col-lg-4 padding-less img" data-jarallax='{"speed": 0.5}'></div> {/* style="background-image:url('images/skills.jpg')" */} {/* end col */}
                    <div className="col-lg-8 offset-lg-5">
                        <div className="cta-full-img-box">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center mb-3">
                                    <div className="container-title">
                                        <div className="titles">
                                            <h4 className="title title-line text-capitalize mb-4">Work Expertise</h4>
                                        </div>
                                        <p className="text-light-muted mx-auto width-max mb-0">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                    </div>
                                </div>{/*end col*/}
                            </div>{/*end row*/}

                            <div className="row align-items-center">
                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/bootstrap.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">70%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}

                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/nodejs-icon.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">55%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}

                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/react.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">68%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}

                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/post_gray_sql.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">75%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}    
                            </div>{/* end row */}

                            <div className="row align-items-center">
                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/amazons3.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">80%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}

                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/android.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">85%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}

                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/Angular.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">70%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}

                                <div className="col-lg-3 col-6 mt-4 pt-2">
                                    <div className="card explore-feature border-0 text-center bg-white p-3">
                                        <div className="card-body p-0">
                                            <div className="skill-icon rounded-circle shadow-lg d-inline-block">
                                                <img src="images/skills/mongodb.svg" alt="" className="img-fluid mx-auto"/>
                                            </div>
                                            <span className="badge skill-badge badge-light">65%</span>
                                        </div>
                                    </div>
                                </div>{/*end col*/}    
                            </div>{/* end row */}

                        </div> {/* end about detail */}
                    </div> {/* end col */}        
                </div>{/*end row*/}
            </div>{/*end container fluid*/}
        </section>{/*end section*/}   
        {/* Skill & CTA End */}


        {/* Projects/Work Start */}
        <section className="section bg-light" id="projects">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">My Work & Portfolio</h2>
                                <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                <span></span>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}


                <div className="row">
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <img src="images/portfolio/1.jpg" className="img-fluid" alt="work-image"/>
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                    <h5 className="mb-0"><a href="page-portfolio-detail.html" className="text-white title">Iphone mockup</a></h5>
                                    <h6 className="text-light tag mb-0">Branding</h6>
                                </div>
                                <div className="icons text-center">
                                    <a href="#" data-src="images/portfolio/1.jpg"  data-gallery="myGal" className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image">
                                        <i data-feather="camera" className="fea icon-sm"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <img src="images/portfolio/2.jpg" className="img-fluid" alt="work-image"/>
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                    <h5 className="mb-0"><a href="page-portfolio-detail.html" className="text-white title">Mockup Collection</a></h5>
                                    <h6 className="text-light tag mb-0">Mockup</h6>
                                </div>
                                <div className="icons text-center">
                                    <a href="#" data-src="images/portfolio/2.jpg" data-gallery="myGal" className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"><i data-feather="camera" className="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <img src="images/portfolio/3.jpg" className="img-fluid" alt="work-image"/>
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                    <h5 className="mb-0"><a href="page-portfolio-detail.html" className="text-white title">Abstract images</a></h5>
                                    <h6 className="text-light tag mb-0">Abstract</h6>
                                </div>
                                <div className="icons text-center">
                                    <a href="#" data-src="images/portfolio/3.jpg" data-gallery="myGal" className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"><i data-feather="camera" className="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <img src="images/portfolio/4.jpg" className="img-fluid" alt="work-image"/>
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                    <h5 className="mb-0"><a href="page-portfolio-detail.html" className="text-white title">Yellow bg with Books</a></h5>
                                    <h6 className="text-light tag mb-0">Books</h6>
                                </div>
                                <div className="icons text-center">
                                    <a href="#" data-src="images/portfolio/4.jpg" data-gallery="myGal" className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"><i data-feather="camera" className="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <img src="images/portfolio/5.jpg" className="img-fluid" alt="work-image"/>
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                    <h5 className="mb-0"><a href="page-portfolio-detail.html" className="text-white title">Company V-card</a></h5>
                                    <h6 className="text-light tag mb-0">V-card</h6>
                                </div>
                                <div className="icons text-center">
                                    <a href="#" data-src="images/portfolio/5.jpg" data-gallery="myGal" className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"><i data-feather="camera" className="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2">
                        <div className="card border-0 work-container work-modern position-relative d-block overflow-hidden rounded">
                            <div className="card-body p-0">
                                <img src="images/portfolio/6.jpg" className="img-fluid" alt="work-image"/>
                                <div className="overlay-work bg-dark"></div>
                                <div className="content">
                                    <h5 className="mb-0"><a href="page-portfolio-detail.html" className="text-white title">Mockup box with paints</a></h5>
                                    <h6 className="text-light tag mb-0">Photography</h6>
                                </div>
                                <div className="icons text-center">
                                    <a href="#" data-src="images/portfolio/6.jpg" data-gallery="myGal" className="text-primary work-icon bg-white d-inline-block rounded-pill mfp-image"><i data-feather="camera" className="fea icon-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>{/*end col*/}

                    <div className="col-12 mt-4 pt-2">
                        <div className="text-center">
                            <a href="page-portfolio.html" className="btn btn btn-primary rounded">See More <i className="mdi mdi-chevron-right"></i></a>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>
            {/* End container */}
        </section>
        {/* Projects End */}

        {/* Testimonial Start */}
        <section className="section bg-white">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">Clients Say</h2>
                                <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                <span></span>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="row">
                    <div className="col-12">
                        <div className="client-review-slider">
                            <div className="tiny-slide">
                                <div className="client-review rounded shadow m-2">
                                    <div className="align-items-center justify-content-start justify-content-sm-center">
                                        <div className="col-sm-auto mb-4 mb-sm-0">
                                            <img className="img-fluid avatar avatar-xl" src="images/client/01.jpg" alt=""/>
                                        </div>
                                        <div className="col pl-lg-4 clt-section">
                                            <h5 className="clt-title mt-2 mb-2">Ralph Edwards</h5>
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <p className="pera-title text-light-muted mb-0 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tiny-slide">
                                <div className="client-review rounded shadow m-2">
                                    <div className="align-items-center justify-content-start justify-content-sm-center">
                                        <div className="col-sm-auto mb-4 mb-sm-0">
                                            <img className="img-fluid avatar avatar-xl" src="images/client/female-4.jpg" alt=""/>
                                        </div>
                                        <div className="col pl-lg-4 clt-section">
                                            <h5 className="clt-title mt-2 mb-2">Jenny Wilson</h5>
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <p className="pera-title text-light-muted mb-0 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tiny-slide">
                                <div className="client-review rounded shadow m-2">
                                    <div className="align-items-center justify-content-start justify-content-sm-center">
                                        <div className="col-sm-auto mb-4 mb-sm-0">
                                            <img className="img-fluid avatar avatar-xl" src="images/client/male-1.jpg" alt=""/>
                                        </div>
                                        <div className="col pl-lg-4 clt-section">
                                            <h5 className="clt-title mt-2 mb-2">Courtney Henry</h5>
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <p className="pera-title text-light-muted mb-0 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                    </div>
                                </div>
                            </div>
                            <div className="tiny-slide">
                                <div className="client-review rounded shadow m-2">
                                    <div className="align-items-center justify-content-start justify-content-sm-center">
                                        <div className="col-sm-auto mb-4 mb-sm-0">
                                            <img className="img-fluid avatar avatar-xl" src="images/client/female-3.jpg" alt=""/>
                                        </div>
                                        <div className="col pl-lg-4 clt-section">
                                            <h5 className="clt-title mt-2 mb-2">Esther Howard</h5>
                                            <ul className="list-unstyled float-right mb-0">
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                                <li className="list-inline-item text-warning"><i className="mdi mdi-star"></i></li>
                                            </ul>
                                        </div>
                                        <p className="pera-title text-light-muted mb-0 mt-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*end container */}
        </section>
        {/*end section */}

        {/* Blog Start */}
        <section className="section bg-light" id="news">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">Latest news & blog</h2>
                                <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                <span></span>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
                
                <div className="row">    
                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post rounded customer-testi m-1">
                            <div className="position-relative">
                                <img src="images/blog/1.jpg" className="img-fluid rounded-top" alt=""/>
                            </div>
                            <div className="content pt-4 pb-4 p-3">
                                <h5><a href="page-blog-detail.html" className="title text-dark">Design your apps in your own way</a></h5>
                                <p className="text-light-muted mb-3">This is required when, for example, the final text is not yet available.</p>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-between">
                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-light-muted date"><i className="mdi mdi-calendar-edit me-1"></i>Dec 19</a></li>
                                    </ul>
                                    <a href="#" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>{/*end content*/}
                        </div>{/*end blog post*/}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post rounded customer-testi m-1">
                            <div className="position-relative">
                                <img src="images/blog/2.jpg" className="img-fluid rounded-top" alt=""/>
                            </div>
                            <div className="content pt-4 pb-4 p-3">
                                <h5><a href="page-blog-detail.html" className="title text-dark">How apps is changing the it world</a></h5>
                                <p className="text-light-muted mb-3">This is required when, for example, the final text is not yet available.</p>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-between">
                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-light-muted date"><i className="mdi mdi-calendar-edit me-1"></i>Feb 12</a></li>
                                    </ul>
                                    <a href="#" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>{/*end content*/}
                        </div>{/*end blog post*/}
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="blog-post rounded customer-testi m-1">
                            <div className="position-relative">
                                <img src="images/blog/3.jpg" className="img-fluid rounded-top" alt=""/>
                            </div>
                            <div className="content pt-4 pb-4 p-3">
                                <h5><a href="page-blog-detail.html" className="title text-dark">Smartest applications for business</a></h5>
                                <p className="text-light-muted mb-3">This is required when, for example, the final text is not yet available.</p>
                                <div className="post-meta d-flex justify-content-between mt-3">
                                    <ul className="list-unstyled mb-0 d-flex justify-content-between">
                                        <li className="list-inline-item me-2 mb-0"><a href="#" className="text-light-muted date"><i className="mdi mdi-calendar me-1"></i>June 27</a></li>
                                    </ul>
                                    <a href="#" className="text-muted readmore">Read More <i className="mdi mdi-chevron-right"></i></a>
                                </div>
                            </div>{/*end content*/}
                        </div>{/*end blog post*/}
                    </div>                        
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>
        {/*end section */}


        {/* Contact Start */}
        <section className="section pb-0" id="contact">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="container-title text-center mb-4 pb-2">
                            <div className="titles">
                                <h2 className="title text-capitalize mb-4">Contact Me</h2>
                                <p className="pera-title para-desc-600 text-light-muted mb-0 mx-auto">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                                <span></span>
                            </div>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}

                <div className="row">
                    <div className="col-md-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <i data-feather="phone" className="fea icon-md"></i>
                            </div>
                            <div className="content mt-4">
                                <h5 className="title">Phone</h5>
                                <p className="text-light-muted">Promising development turmoil inclusive education transformative community</p>
                                <a href="tel:+152534-468-854" className="text-primary">+152 534-468-854</a>
                            </div>  
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-md-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <i data-feather="mail" className="fea icon-md"></i>
                            </div>
                            <div className="content mt-4">
                                <h5 className="title">Email</h5>
                                <p className="text-light-muted">Promising development turmoil inclusive education transformative community</p>
                                <a href="mailto:contact@example.com" className="text-primary">contact@example.com</a>
                            </div>  
                        </div>
                    </div>{/*end col*/}
                    
                    <div className="col-md-4 mt-4 pt-2">
                        <div className="contact-detail text-center">
                            <div className="icon">
                                <i data-feather="map-pin" className="fea icon-md"></i>
                            </div>
                            <div className="content mt-4">
                                <h5 className="title">Location</h5>
                                <p className="text-light-muted">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                                <a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" className="map-popup-view text-primary">View on Google map</a>
                            </div>  
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>{/*end section*/}

        <section className="section pt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="custom-form mb-sm-30">
                            <form method="post" action="php/contact.php" name="myForm">
                                <p id="error-msg"></p>
                                <div id="simple-msg"></div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input name="name" id="name" type="text" className="form-control border rounded" placeholder="First Name :"/>
                                                </div>
                                            </div>{/*end col*/}
                                            <div className="col-lg-12 col-md-6">
                                                <div className="form-group">
                                                    <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Your email :"/>
                                                </div> 
                                            </div>{/*end col*/}
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <input name="subject" id="subject" className="form-control border rounded" placeholder="Your subject :"/>
                                                </div>                                                                               
                                            </div>{/*end col*/}
                                        </div>{/*end row*/}
                                    </div>{/*end col*/}

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <textarea name="comments" id="comments" rows={4} className="form-control border rounded" placeholder="Your Message :"></textarea>
                                        </div>
                                    </div>{/*end col*/}
                                </div>{/*end row*/}
                                <div className="row">
                                    <div className="col-sm-12 text-end">
                                        <input type="submit" id="submit" name="send" className="submitBnt btn btn btn-primary rounded" value="Send Message"/> 
                                    </div>{/*end col*/}
                                </div>{/*end row*/}
                            </form>{/*end form*/}
                        </div>{/*end custom-form*/}
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </section>{/*end section*/}
        {/* Contact End */}

        {/* Footer Start */}
        <footer className="footer bg-light">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <a href="#" className="footer-logo text-black">Queue</a>
                        <p className="para-desc mx-auto mt-5 text-black">Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                        <ul className="list-unstyled mb-0 mt-4 social-icon">
                            <li className="list-inline-item me-1"><a href="#" className="rounded-circle"><i className="mdi mdi-facebook"></i></a></li>
                            <li className="list-inline-item me-1"><a href="#" className="rounded-circle"><i className="mdi mdi-twitter"></i></a></li>
                            <li className="list-inline-item me-1"><a href="#" className="rounded-circle"><i className="mdi mdi-instagram"></i></a></li>
                            <li className="list-inline-item me-1"><a href="#" className="rounded-circle"><i className="mdi mdi-vimeo"></i></a></li>
                            <li className="list-inline-item me-1"><a href="#" className="rounded-circle"><i className="mdi mdi-google-plus"></i></a></li>
                            <li className="list-inline-item me-1"><a href="#" className="rounded-circle"><i className="mdi mdi-linkedin"></i></a></li>
                        </ul>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end container*/}
        </footer>{/*end footer*/}
        <footer className="footer footer-bar bg-black">
            <div className="container text-foot text-center">
                <p className="mb-0 text-white-50">© <script>document.write(new Date().getFullYear())</script> Queue. Design by <a href="#" className="text-white-50">Zoyothemes</a></p>
            </div>{/*end container*/}
        </footer>{/*end footer*/}
        {/* Footer End */}

        <a href="javascript: void(0);" className="back-to-top btn btn-icon btn-soft-primary" id="back-to-top">
            <i data-feather="arrow-up" className="icons"></i>
        </a>
        {/* Back to top */}

    </>
  );
}
