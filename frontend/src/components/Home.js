import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <div className="desk" id="main_container">
        <div style={{ padding: 20, height: "85vh" }}>
          <div style={{ display: "table", width: "100%" }}>


            <div style={{ display: "table-cell", verticalAlign: "middle" }} />
            <div
              id="sign_up_button_front_page"
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                width: 190,
                textAlign: "right"
              }}
            >
              <div
                className="landing_white_button"
                style={{
                  display: "inline-block",
                  backgroundColor: "rgb(36,116,204)",
                  borderColor: "rgb(36,116,204)",
                  color: "white",
                  width: 150
                }}
                
              >
                <Link to='/signup' style={{textDecoration:'none',color:'inherit', padding:'10px 40px'}}>Sign up</Link>
              </div>
            </div>
            <div
              id="log_in_button_front_page"
              style={{
                display: "table-cell",
                verticalAlign: "middle",
                width: 180,
                textAlign: "right",
                paddingRight: 20
              }}
            >
               
              <div
                className="landing_white_button"
                style={{
                  display: "inline-block",
                  backgroundColor: "white",
                  border: "1px solid rgb(36,116,204)",
                  color: "rgb(36,116,204)",
                  width: 150
                }}
                
              >
                 <Link to='/login' style={{textDecoration:'none', color:'inherit', padding:'10px 40px'}}>Log in</Link> 
              </div>
             
            </div>
          </div>
          <div
            style={{
              display: "table",
              width: "100%",
              paddingLeft: 20,
              paddingRight: 20,
              height: "100%"
            }}
          >
            <div
              style={{
                display: "table",
                width: "40%",
                marginLeft: "30%",
                textAlign: "center",
                verticalAlign: "middle",
                paddingTop: "8%"
              }}
            >
              <input
                style={{ display: "none" }}
                type="text"
                name="fakeusernameremembered"
              />
              <input
                style={{ display: "none" }}
                type="password"
                name="fakepasswordremembered"
              />
              <img
                style={{ width: "15vw", marginTop: 5, cursor: "pointer" }}
                src="/assests/img/arxena-logo.png"
              />
              <input
                id="search_bar_front_page"
                defaultValue=""
                className="search-bar-front"
                autoComplete="new-company-entered-by-user"
                placeholder="🔍 Search any company's org chart"
                style={{
                  display: "table",
                  width: "100%",
                  borderColor: "rgb(232,232,232)",
                  placeholderColor: "rgb(232,232,232)",
                  height: "3rem",
                  marginTop: "8%"
                }}

              />
              <input
                id="search_bar_front_page_raw_text"
                defaultValue=""
                className="search-bar-front"
                autoComplete="new-raw_text-entered-by-user"
                placeholder="🔍 Which people are you looking for?"
                style={{
                  display: "none",
                  width: "100%",
                  borderColor: "rgb(232,232,232)",
                  placeholderColor: "rgb(232,232,232)",
                  height: "3rem",
                  marginTop: "8%"
                }}
              />
              <p
                id="error_home_page"
                style={{
                  fontSize: 12,
                  float: "left",
                  marginLeft: 20,
                  display: "none"
                }}
              />
              <div
                id="front_page_search_bar_loader"
                style={{
                  textAlign: "right",
                  marginTop: "-6.5%",
                  marginLeft: "85%",
                  marginBottom: "2%",
                  width: "10%"
                }}
              >
                <div
                  id="button_dropdown_search_jd"
                  style={{
                    cursor: "pointer",
                    textAlign: "right",
                    marginTop: "-6.25%"
                  }}
                >
                  <img style={{ width: 25 }} src="/assests/img/new_upload.png" />
                </div>
              </div>

              <div
                id="home_page_dropdown_elements"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <div id="home_page_jd_dropdown_element" />
            </div>
            <div style={{ marginTop: "5%" }}>
              <center>
                <img
                  src="/assests/img/powered_by_gpt4.png"
                  alt="Open AI Logo"
                  width={200}
                />
              </center>
            </div>
          </div>
        </div>
        <div style={{ width: "100%", bottom: "0%", textAlign: "center" }}>
          <div style={{ display: "table", width: "100%" }}>
            <div
              style={{
                display: "table-cell",
                width: "100%",
                paddingLeft: 20,
                paddingTop: "2%",
                textAlign: "left"
              }}
            >
              <div style={{ paddingLeft: 25, display: "inline-block" }}>
                OrgGPT - Talent Identification Software for Ambitious Companies
                <br />
                <Link style={{ fontSize: "10pt", color:'#007bff' }} to="/pricing">
                  Pricing
                </Link>{" "}
                |{" "}
                <Link style={{ fontSize: "10pt", color:'#007bff' }} to="/eula">
                  Terms of Service
                </Link>{" "}
                |{" "}
                <Link style={{ fontSize: "10pt", color:'#007bff' }} to="/privacy">
                  Privacy Policy
                </Link>{" "}
                |{" "}
                <Link
                  style={{ fontSize: "10pt", color:'#007bff' }}
                  to=""
                >
                  How to Use
                </Link>{" "}
                |{" "}
                <Link
                  style={{ fontSize: "10pt", color:'#007bff' }}
                  to="/download_chrome_extension"
                >
                  Download Extension
                </Link>
                <br />
                <br />
              </div>
              <div
                style={{
                  display: "table-cell",
                  paddingLeft: 25,
                  float: "right",
                  marginRight: "5%"
                }}
              >
                <div style={{ display: "table-cell", width: 70 }}>
                  <Link to="https://www.linkedin.com/company/arxena">
                    <img
                      style={{ width: 35, cursor: "pointer" }}
                      src="/assests/img/linkedin-icon-png-circle-2.png"
                    />
                  </Link>
                </div>
                <div style={{ display: "table-cell", width: 70 }}>
                  <Link to="https://twitter.com/arxenainc">
                    <img
                      style={{ width: 43, cursor: "pointer" }}
                      src="/assests/img/tw.png"
                    />
                  </Link>
                </div>
                <div style={{ display: "table-cell", width: 70 }}>
                  <Link to="https://facebook.com/arxenainc">
                    <img
                      style={{ width: 35, cursor: "pointer" }}
                      src="/assests/img/facebook.png"
                    />
                  </Link>
                </div>
                <div style={{ display: "table-cell", width: 70 }}>
                  <Link
                    to="https://www.youtube.com/channel/UCpaPM7iFg9D309FUaIVeRpA"
                   
                  >
                    <img
                      style={{ width: 35, cursor: "pointer" }}
                      src="/assests/img/youtube.png"
                    />
                  </Link>
                </div>
                <div style={{ display: "table-cell" }} />
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
       
    </div>
  )
}

export default Home;