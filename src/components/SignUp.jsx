import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {

    const navigate = useNavigate();

    const [input, changeInput] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: ""
    });


    const inputHandler = (event) => {

        changeInput({
            ...input,
            [event.target.name]: event.target.value
        });

    };



    const readValue = () => {

        if (
            !input.name ||
            !input.phone ||
            !input.email ||
            !input.password ||
            !input.confirmPassword
        ) {

            alert("Please fill in all fields");
            return;

        }



        if (input.password !== input.confirmPassword) {

            alert("Passwords do not match");
            return;

        }



        console.log(input);



        axios.post("http://localhost:3001/sign-up", input)

            .then((response) => {


                console.log(response.data);



                if (response.data.status === "success") {


                    alert("Account created successfully!");


                    navigate("/");


                } 
                else {


                    alert(response.data.status);


                }



            })

            .catch((error) => {


                console.log(error);

                alert("Failed to sign up");


            });



    };



    return (

        <div className="signup-page">


            <div className="floating-shape shape-one"></div>
            <div className="floating-shape shape-two"></div>
            <div className="floating-shape shape-three"></div>


            <div className="floating-word word-one">
                WRITE
            </div>


            <div className="floating-word word-two">
                CREATE
            </div>


            <div className="floating-word word-three">
                SHARE
            </div>




            <div className="container">


                <div className="row min-vh-100 align-items-center justify-content-center py-5">


                    <div className="col-xl-10 col-lg-11">


                        <div className="signup-container">



                            <div className="signup-info">


                                <div className="brand-logo">

                                    <span className="brand-icon">
                                        ✦
                                    </span>

                                    <span>
                                        INKORA
                                    </span>

                                </div>




                                <div className="signup-info-content">


                                    <div className="mini-badge">

                                        ✦ YOUR STORIES MATTER

                                    </div>



                                    <h1>

                                        Turn your <span>thoughts</span>

                                        <br />

                                        into stories.

                                    </h1>




                                    <p>

                                        Join a community of writers, thinkers, and creators.
                                        Write freely, share your perspective, and inspire
                                        readers around the world.

                                    </p>




                                    <div className="feature-list">


                                        <div className="feature-item">

                                            <span>
                                                ✎
                                            </span>


                                            <div>

                                                <h6>
                                                    Write your way
                                                </h6>


                                                <p>
                                                    Create and publish beautiful stories.
                                                </p>

                                            </div>

                                        </div>




                                        <div className="feature-item">


                                            <span>
                                                ◉
                                            </span>


                                            <div>

                                                <h6>
                                                    Find your audience
                                                </h6>


                                                <p>
                                                    Connect with readers who love your ideas.
                                                </p>


                                            </div>


                                        </div>





                                        <div className="feature-item">


                                            <span>
                                                ✦
                                            </span>


                                            <div>

                                                <h6>
                                                    Build your space
                                                </h6>


                                                <p>
                                                    Make your voice and creativity stand out.
                                                </p>


                                            </div>


                                        </div>



                                    </div>


                                </div>




                                <div className="decorative-text">

                                    STORIES • IDEAS • PEOPLE

                                </div>



                            </div>






                            <div className="signup-form-section">


                                <div className="signup-form-wrapper">



                                    <div className="form-heading">


                                        <div className="heading-icon">
                                            ✎
                                        </div>


                                        <h2>
                                            Create your account
                                        </h2>


                                        <p>
                                            Start your writing journey today. It only takes
                                            a minute.
                                        </p>


                                    </div>







                                    <div className="signup-form">



                                        <div className="input-group-custom">

                                            <label>
                                                Full Name
                                            </label>


                                            <div className="input-box">


                                                <span className="input-icon">
                                                    ♙
                                                </span>


                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={input.name}
                                                    onChange={inputHandler}
                                                    placeholder="Enter your full name"
                                                />


                                            </div>


                                        </div>






                                        <div className="input-group-custom">


                                            <label>
                                                Phone Number
                                            </label>


                                            <div className="input-box">


                                                <span className="input-icon">
                                                    ✆
                                                </span>


                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={input.phone}
                                                    onChange={inputHandler}
                                                    placeholder="Enter your phone number"
                                                />


                                            </div>


                                        </div>







                                        <div className="input-group-custom">


                                            <label>
                                                Email Address
                                            </label>


                                            <div className="input-box">


                                                <span className="input-icon">
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







                                        <div className="row g-3">


                                            <div className="col-md-6">


                                                <div className="input-group-custom">


                                                    <label>
                                                        Password
                                                    </label>


                                                    <div className="input-box">


                                                        <span className="input-icon">
                                                            ⌾
                                                        </span>


                                                        <input
                                                            type="password"
                                                            name="password"
                                                            value={input.password}
                                                            onChange={inputHandler}
                                                            placeholder="Create password"
                                                        />


                                                    </div>


                                                </div>


                                            </div>






                                            <div className="col-md-6">


                                                <div className="input-group-custom">


                                                    <label>
                                                        Confirm Password
                                                    </label>


                                                    <div className="input-box">


                                                        <span className="input-icon">
                                                            ⌾
                                                        </span>


                                                        <input
                                                            type="password"
                                                            name="confirmPassword"
                                                            value={input.confirmPassword}
                                                            onChange={inputHandler}
                                                            placeholder="Confirm password"
                                                        />


                                                    </div>


                                                </div>


                                            </div>



                                        </div>







                                        <button
                                            className="register-btn"
                                            onClick={readValue}
                                        >

                                            <span>
                                                CREATE MY ACCOUNT
                                            </span>


                                            <span className="btn-arrow">
                                                →
                                            </span>


                                        </button>







                                        <div className="login-divider">

                                            <span>
                                                Already part of the community?
                                            </span>

                                        </div>







                                        <button
                                            className="login-btn"
                                            onClick={() => navigate("/")}
                                        >

                                            ← BACK TO LOGIN

                                        </button>





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


export default SignUp;