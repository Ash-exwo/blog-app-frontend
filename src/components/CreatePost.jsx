import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
    const [token] = useState(sessionStorage.getItem("token"));

    const [input, setInput] = useState({
        title: "",
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
        if (!input.title.trim() || !input.message.trim()) {
            alert("Please enter both title and message");
            return;
        }

        console.log(input);
        console.log(token);

        axios
            .post("http://localhost:3001/create-post", input, {
                headers: {
                    token: sessionStorage.getItem("token"),
                    "Content-Type": "application/json"
                }
            })
            .then((response) => {
                console.log(response.data);

                if (response.data.status === "success") {
                    alert("Post created successfully!");

                    setInput({
                        title: "",
                        message: "",
                        userId: sessionStorage.getItem("userId")
                    });
                } else {
                    alert(response.data.status || "Something went wrong!");
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

            <div className="post-floating-word word-one">CREATE</div>
            <div className="post-floating-word word-two">WRITE</div>
            <div className="post-floating-word word-three">INSPIRE</div>

            <div className="container">
                <div className="row min-vh-100 align-items-center justify-content-center py-5">
                    <div className="col-lg-8">
                        <div className="create-post-card">
                            <div className="post-brand">
                                <span>✦</span>
                                INKORA
                            </div>

                            <div className="post-heading">
                                <div className="post-icon">✎</div>

                                <h1>Create your story</h1>

                                <p>
                                    Give your story a title and share your thoughts
                                    with the world.
                                </p>
                            </div>

                            <div className="post-input-area">
                                <div className="post-field">
                                    <label>Story title</label>

                                    <div className="post-title-box">
                                        <span className="post-title-icon">✦</span>

                                        <input
                                            type="text"
                                            name="title"
                                            value={input.title}
                                            onChange={inputHandler}
                                            placeholder="Enter a title for your story"
                                        />
                                    </div>
                                </div>

                                <div className="post-field">
                                    <label>What's on your mind?</label>

                                    <textarea
                                        name="message"
                                        value={input.message}
                                        onChange={inputHandler}
                                        placeholder="Write your story here..."
                                    />
                                </div>
                            </div>

                            <button
                                type="button"
                                className="publish-btn"
                                onClick={readValue}
                            >
                                <span>PUBLISH STORY</span>
                                <span>→</span>
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