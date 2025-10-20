import React, { useState } from "react";
import "./Navbar.css";

function Navbar2() {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = async () => {
        if (!email) {
            setMessage("Please enter a valid email address.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3001/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ Email: email }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setEmail("");
            } else {
                setMessage(data.error || "Failed to subscribe. Try again.");
            }
        } catch (error) {
            setMessage("Server error. Please try later.");
        }
    };

    return (
        <>
            <nav>
                <div className="navbar-container" id="navbarid">

                    <div id="logo">
                        <h3>Sign up for Daily Insider Email</h3>
                    </div>

                    <div className="input">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button type="button" onClick={handleSubscribe}>
                            Subscribe
                        </button>
                    </div>

                    {message && <p>{message}</p>}

                </div>
            </nav>
        </>
    );
}

export default Navbar2;
