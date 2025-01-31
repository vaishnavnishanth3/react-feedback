import React from "react";
import { useState } from "react";

import Review from "./Review";

function App() {
    const [feedback, setFeedback] = useState(null);
    const [name, setName] = useState(null);
    return (
        <>
            <section id="feedback">
                <h2>Please share some feedback</h2>
                <p>
                    <label>Your Feedback</label>
                    <textarea
                        onChange={(event) => {
                            setFeedback(event.target.value);
                        }}
                    />
                </p>
                <p>
                    <label>Your Name</label>
                    <input
                        type="text"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                    />
                </p>
            </section>
            <section id="draft">
                <h2>Your feedback</h2>

                <Review feedback={feedback} student={name} />

                <p>
                    <button>Save</button>
                </p>
            </section>
        </>
    );
}

export default App;
