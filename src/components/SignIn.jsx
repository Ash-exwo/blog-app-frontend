import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {

  const [count, changeCount] = useState(0)

  const [disabled, setDisabled] = useState(false);


  const [input, changeInput] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();


  const inputHandler = (event) => {

    changeInput({
      ...input,
      [event.target.name]: event.target.value
    });

  };


  const readValue = () => {

    console.log(input);

    axios.post("http://localhost:3001/sign-in", input)
      .then((response) => {
        // console.log(response)
        console.log(response.status);
  
  
        if (response.data.status === "Incorrect Password") {
  
  
          alert("Incorrect Password");
  
  
        } 
        else if (response.data.status === "Invalid Email Id") {
  
  
          alert("Invalid Email ID");
  
  
        }
        else {
  
  
          let token = response.data.token;
          let userId = response.data.userId;
  
  
          console.log(userId);
          console.log(token);
  
  
          sessionStorage.setItem("token", token);
          sessionStorage.setItem("userId", userId);
  
  
          alert("Sign in successful!");
  
  
          navigate("/create-post");
  
  
        }
  
  
      })
      .catch((error) => {

        console.log(count)
        changeCount(count+1)
        if (count>=2) {
          setDisabled(true)
        }
        console.log(error);
        alert(error.response.data.status);
  
  
      });
  
  };


  return (

    <div className="signin-page">


      <div className="signin-floating-shape signin-shape-one"></div>
      <div className="signin-floating-shape signin-shape-two"></div>
      <div className="signin-floating-shape signin-shape-three"></div>



      <div className="signin-floating-word signin-word-one">
        READ
      </div>


      <div className="signin-floating-word signin-word-two">
        WRITE
      </div>


      <div className="signin-floating-word signin-word-three">
        INSPIRE
      </div>




      <div className="container">


        <div className="row min-vh-100 align-items-center justify-content-center py-5">


          <div className="col-xl-9 col-lg-10">


            <div className="signin-container">




              <div className="signin-info">


                <div className="signin-brand-logo">


                  <span className="signin-brand-icon">
                    ✦
                  </span>


                  <span>
                    INKORA
                  </span>


                </div>




                <div className="signin-info-content">


                  <div className="signin-mini-badge">

                    ✦ WELCOME BACK, WRITER

                  </div>



                  <h1>

                    Your next <span>story</span>
                    <br />
                    is waiting.

                  </h1>




                  <p>

                    Sign in to continue writing, discovering ideas,
                    and connecting with a community that believes
                    every story deserves to be heard.

                  </p>




                  <div className="signin-quote-card">


                    <div className="signin-quote-icon">

                      “

                    </div>



                    <p>

                      There is no greater agony than bearing an
                      untold story inside you.

                    </p>



                    <span>

                      — Keep writing

                    </span>


                  </div>



                </div>




                <div className="signin-decorative-text">

                  WORDS • STORIES • IDEAS

                </div>



              </div>




              <div className="signin-form-section">



                <div className="signin-form-wrapper">



                  <div className="signin-form-heading">


                    <div className="signin-heading-icon">

                      ✎

                    </div>



                    <h2>

                      Welcome back

                    </h2>




                    <p>

                      Enter your details to continue your journey.

                    </p>



                  </div>







                  <div className="signin-form">






                    <div className="signin-input-group">


                      <label>
                        Email Address
                      </label>



                      <div className="signin-input-box">



                        <span className="signin-input-icon">

                          ✉

                        </span>



                        <input

                          type="email"

                          name="email"

                          value={input.email}

                          onChange={inputHandler}

                          placeholder="you@example.com"

                        />



                      </div>



                    </div>








                    <div className="signin-input-group">



                      <label>

                        Password

                      </label>




                      <div className="signin-input-box">



                        <span className="signin-input-icon">

                          ⌾

                        </span>




                        <input


                          type="password"


                          name="password"


                          value={input.password}


                          onChange={inputHandler}


                          placeholder="Enter your password"


                        />



                      </div>



                    </div>








                    <button

                      className="signin-submit-btn"

                      onClick={readValue}

                      disabled={disabled}

                    >


                      <span>

                        SIGN IN

                      </span>


                      <span className="signin-btn-arrow">

                        →

                      </span>



                    </button>



                    <div className="signin-divider">


                      <span>

                        New to Inkora?

                      </span>


                    </div>



                    <Link

                      to="/sign-up"

                      className="signin-signup-btn"

                    >

                      ✦ NEW USERS CLICK HERE

                    </Link>





                  </div>



                </div>



              </div>






            </div>


          </div>


        </div>


      </div>


    </div>

  );

};


export default SignIn;