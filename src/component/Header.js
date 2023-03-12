import logo from '../assets/BB1.jpg';
import React, { useState } from "react";

function Header({ toggleLanguage }) {
    const [language, setLanguage] = useState("EN");

    const handleToggleLanguage = () => {
        setLanguage(language === "EN" ? "TH" : "EN");
        toggleLanguage();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} alt="logo" width="5%" />
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNav"
                    >
                        <div className="navbar-nav">
                            <a className="nav-link active" href="/">
                                {language === "EN" ? "Home" : "หน้าแรก"}
                            </a>
                            <a className="nav-link active" href="/sign-up">
                                {language === "EN" ? "Sign up" : "ลงทะเบียน"}
                            </a>
                            <button onClick={handleToggleLanguage}>{language}</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
