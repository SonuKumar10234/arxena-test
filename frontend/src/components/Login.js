import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <>
        {/* desktop version */}
        <div className="desk" style={{ height: "100%" }}>
          <div style={{ display: "table", width: "100%", height: "100%" }}>
            <div
              style={{
                display: "table-cell",
                width: "70%",
                backgroundColor: "white",
                padding: 20
              }}
            >
              <Link to='/'>
                <img
                  style={{ width: "10vw", marginTop: 5, cursor: "pointer" }}
                  src="/assests/img/arxena-logo.png"
                />
              </Link>

              <div
                className="shadow content_section"
                style={{
                  width: 450,
                  padding: 30,
                  backgroundColor: "rgba(255,255,255)",
                  borderRadius: 5,
                  textAlign: "center",
                  left: "0, right:0",
                  marginTop: 50
                }}
              >
                <div id="signup_form_content">
                  <span style={{ fontSize: "16pt", fontWeight: 300 }}>
                    Welcome back!
                  </span>
                  <br />
                  <br />
                  <div style={{ width: "90%", left: "5%", position: "relative" }}>
                    <div className="row">
                      <div className="col-sm-12">
                        <input
                          id="email"
                          type="text"
                          className="form-control-custom enter_click"
                          placeholder="Email"
                        />
                        <br />
                      </div>
                      <div className="col-sm-12">
                        <input
                          id="password"
                          type="password"
                          className="form-control-custom enter_click"
                          placeholder="Password"
                        />
                        <br />
                      </div>
                    </div>
                    <br />
                    <div
                      style={{
                        width: "100%",
                        textAlign: "center",
                        position: "relative",
                        padding: 20
                      }}
                    >
                      <div
                        id="login_button_desktop"
                        className="form_button enter_click"
                        style={{
                          margin: "auto",
                          position: "absolute",
                          left: 0,
                          right: 0,
                          top: 0,
                          bottom: 0
                        }}
                      >
                        Log in
                      </div>
                    </div>
                  </div>
                  <div id="login_error" style={{ marginTop: 20 }} />
                  <div
                    style={{ color: "rgb(197,197,205)", cursor: "pointer" }}
                  >
                    Forgot your password?{" "}
                    <u style={{ borderBottom: "1px dashed", textDecoration: "none" }}>
                      <Link to=''>Reset it here</Link>
                    </u>
                  </div>
                  <div
                    style={{ color: "rgb(197,197,205)", cursor: "pointer" }}
                  >
                    Need an account?{" "}
                    <u style={{ borderBottom: "1px dashed", textDecoration: "none" }}>
                      <Link to='/signup'>Sign up for free</Link>
                    </u>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="signup_lateral"
              style={{
                display: "table-cell",
                width: "30%",
                padding: 20,
                textAlign: "left",
              }}
            >
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
                <img
                  id="testimonial_photo"
                  src="/assests/img/mannan_pacha_dp.webp"
                  style={{ width: 150, borderRadius: "50%" }}
                />
              </div>
              <div style={{ textAlign: "left" }}>
                <img
                  src="/assests/img/quote.png"
                  style={{ width: 40, marginRight: 40, marginBottom: 20 }}
                />
              </div>
              <i id="testimonial_quote">
                Arxena helps me map with large F100 accounts saving me hours of manual
                work for resourcing projects.
              </i>
              <br />
              <span style={{ fontSize: "13pt" }}>
                <br />
                <br />
                <strong style={{ fontWeight: 500 }} id="testimonial_name">
                  Mannan Pacha
                </strong>{" "}
                |{" "}
              </span>
              <span id="testimonial_title" style={{ fontSize: "13pt" }}>
                Manager - Ernst &amp; Young
              </span>
              <br />
              <img
                id="testimonial_logo"
                src="/assests/img/EY_logo_2019.png"
                style={{ height: 20 }}
              />
              <br />
              <br />
              <Link to='https://www.linkedin.com/in/mannanpacha1988'>
                <img
                  id="linkedin_logo"
                  src="/assests/img/linkedin_logo.png"
                  style={{ height: 20, cursor: "pointer" }}
                />
              </Link>

              <div style={{ textAlign: "right" }}>
                <img
                  src="/assests/img/quote1.png"
                  style={{ width: 40, marginRight: 40 }}
                />
              </div>
            </div>
          </div>
        </div>
      </>

    </div>
  )
}

export default Login;