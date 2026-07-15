import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {

    const [token, setToken] = useState(sessionStorage.getItem("token"));

    const [input, setInput] = useState({
        message: "",
        userId: sessionStorage.getItem("userId")
    });


    const inputHandler = (event) => {

        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

    };


    const readValue = () => {

        console.log(input);
        console.log(token);


        axios.post(
            "http://localhost:3001/create-post",
            input,
            {
                headers: {
                    "token": sessionStorage.getItem("token"),
                    "Content-Type": "application/json"
                }
            }
        )

        .then((response) => {

            console.log(response.data);

            if (response.data.status === "success") {

                alert("Post created successfully!");

                setInput({
                    message: "",
                    userId: sessionStorage.getItem("userId")
                });

            } 
            else {

                alert("Something went wrong!");

            }

        })

        .catch((error) => {

            console.log(error);

            alert("Failed to create post");

        });

    };


    return (

        <div className="create-post-page">

            <div className="post-shape post-shape-one"></div>
            <div className="post-shape post-shape-two"></div>
            <div className="post-shape post-shape-three"></div>


            <div className="post-floating-word word-one">
                CREATE
            </div>

            <div className="post-floating-word word-two">
                WRITE
            </div>

            <div className="post-floating-word word-three">
                INSPIRE
            </div>


            <div className="container">

                <div className="row min-vh-100 align-items-center justify-content-center">

                    <div className="col-lg-8">

                        <div className="create-post-card">


                            <div className="post-brand">

                                <span>
                                    ✦
                                </span>

                                INKORA

                            </div>


                            <div className="post-heading">

                                <div className="post-icon">
                                    ✎
                                </div>


                                <h1>
                                    Create your story
                                </h1>


                                <p>
                                    Share your thoughts with the world.
                                    Every idea deserves a place.
                                </p>

                            </div>



                            <div className="post-input-area">

                                <label>
                                    What's on your mind?
                                </label>


                                <textarea
                                    name="message"
                                    value={input.message}
                                    onChange={inputHandler}
                                    placeholder="Write your story here..."
                                />

                            </div>



                            <button
                                className="publish-btn"
                                onClick={readValue}
                            >

                                <span>
                                    PUBLISH STORY
                                </span>


                                <span>
                                    →
                                </span>

                            </button>



                            <div className="post-footer">

                                WORDS • IDEAS • STORIES

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};


export default CreatePost;