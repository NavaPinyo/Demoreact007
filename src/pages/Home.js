import React, { useState, useEffect } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.png";

function Home() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasAccount, setHasAccount] = useState(false);
    const [language, setLanguage] = useState("EN");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const toggleLanguage = () => {
        setLanguage(language === "EN" ? "TH" : "EN");
    };

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // window.localStorage.clear();
            }
            else {
                // window.localStorage.clear();
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);

    const handleSignup = () => {
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((response) => {
                console.log("response", response);
                window.alert(language === "EN" ? "Sign up Successfully!" : "ลงทะเบียนเรียบร้อยแล้ว!");
                navigate("/profile");
                window.localStorage.setItem("user", response.user.email);
                setEmail(response.user.email);
                console.log("response", response);
            }).catch((err) => {
                console.log("err", err);
            });
    };

    const handleSignin = () => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then((response) => {
                console.log("response", response);
                window.alert(language === "EN" ? "Sign in Successfully!" : "เข้าสู่ระบบเรียบร้อยแล้ว!");
                navigate("/profile");
                window.localStorage.setItem("user", response.user.email);
                setEmail(response.user.email);
                console.log("response", response);
            }).catch((err) => {
                console.log("err", err);
                if (err.code === "auth/wrong-password") {
                    window.alert(language === "EN" ? "Password is incorrect!" : "รหัสผ่านไม่ถูกต้อง!");
                }
            });
    };

    return (
        <Container
            className="shadow p-4 mb-5 bg-white rounded"
            style={{ width: "500px" }}
        >
            <h1 className="text-center">
                {language === "EN" ? "Welcome to Home!" : "ยินดีต้อนรับสู่หน้าแรก!"}
            </h1>

            <div className="text-center mt-3">
                <img src={profileImg} alt="profileImg" width={200} />
            </div>

            {hasAccount ? (<Signup email={email} password={password} hasAccount={hasAccount} setHasAccount={setHasAccount} handleEmail={handleEmail} handlePassword={handlePassword} handleSignup={handleSignup} />) : (<Signin email={email} password={password} hasAccount={hasAccount} setHasAccount={setHasAccount} handleEmail={handleEmail} handlePassword={handlePassword} handleSignin={handleSignin} />)}


        </Container>
    )
}

export default Home;