import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
                left: "0, right:0"
              }}
            >
              <div id="signup_form_content">
                <span style={{ fontSize: "16pt", fontWeight: 300 }}>
                  Get started with 10 free org-chart credits.
                  <br />
                  No credit card is needed.
                </span>
                <br />
                <br />
                <div style={{ width: "90%", left: "5%", position: "relative" }}>
                  <div className="row">
                    <div className="col-sm-12">
                      <input
                        id="full_name"
                        type="text"
                        className="form-control-custom"
                        placeholder="Full Name"
                      />
                      <br />
                    </div>
                    <div className="col-sm-12 phone_number_input">
                      <input
                        id="phone"
                        type="text"
                        className="form-control-custom enter_click phone_number"
                        placeholder="Mobile Number"
                      />
                      <br />
                    </div>
                    <div className="col-sm-12">
                      <input
                        id="email"
                        type="text"
                        className="form-control-custom enter_click"
                        placeholder="Business Email"
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
                    <div className="col-sm-12 dropdown" onClick={()=>setOpen(!open)}>
                      <button
                        id="new_account_use_case"
                        className="btn dropdown-toggle"
                        type="button"
                        style={{
                          width: "100%",
                          fontSize: "10pt",
                          backgroundColor: "white",
                          border: "1px solid rgb(210,210,210)",
                          color: "#495057"
                        }}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        I work for a
                      </button>
                      <div
                        className={`dropdown-menu ${open ? 'show' : ''}`}
                        aria-labelledby="dropdownMenuButton"
                        style={{
                          width: "100%",
                          fontSize: "10pt",
                          position: "absolute",
                          willChange: "transform",
                          top: 0,
                          left: 0,
                          transform: "translate3d(0px, 34px, 0px)",
                        }}
                        x-placement="bottom-start"
                      >
                        <a
                          className="dropdown-item"
                          use_case="agency"
                          label="Recruitment Agency"
                        >
                          Recruitment Agency
                        </a>{" "}
                        <a
                          className="dropdown-item"
                          use_case="corporate"
                          label="Corporate"
                        >
                          Corporate
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      position: "relative",
                      padding: 20,
                      marginTop: 20
                    }}
                  >
                    <div
                      id="signup_button_desktop"
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
                     <Link to='/signup'>Create account</Link> 
                    </div>
                  </div>
                </div>
                <div id="signup_error" style={{ marginTop: 20 }} />
                <div
                  style={{ color: "rgb(197,197,205)", cursor: "pointer" }}
                >
                  Already registered?{" "}
                  <u style={{ borderBottom: "1px dashed", textDecoration: "none" }}>
                    <Link to='/login'>Log in instead</Link>
                  </u>
                </div>
                <br />
                <div style={{ color: "rgb(197,197,205)" }}>
                  <u style={{ borderBottom: "1px dashed", textDecoration: "none" }}>
                    Account lock:{" "}
                  </u>
                  We discourage licence sharing. Your account will be accessible from
                  this device only
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
              textAlign: "left"
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

    </div>
  )
}

export default Signup;