import React from "react";

function Signup(props) {
    console.log("props", props);

    const handleFormSubmit = (e) => {
        e.preventDefault(); // prevent the default form submission
        props.handleSignup();
    };

    return (
        <div>
            <h3>Sign up</h3>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <p>Username</p>
                    <input className="form-control w-100" type="text" placeholder="ชื่อผู้ใช้@gmail.com" value={props.email} autoFocus required onChange={(e) => props.handleEmail(e)} />
                </div>
                <div>
                    <p>Password</p>
                    <input className="form-control w-100" type="password" placeholder="รหัสผ่าน" value={props.password} required onChange={(e) => props.handlePassword(e)} />
                </div>
                <div>
                    <button className="btn btn-primary mt-2 w-100" onClick={() => { props.handleSignup() }}>
                        Sign up
                    </button>

                    <div className="d-flex align-item-center- justify-content-center">
                        <p className="text-center mt-3 mr-1">Have an account?</p>
                        <button className="btn btn-link px-0 " onClick={() => props.setHasAccount(!props.hasAccount)}
                        >
                            Sign in
                        </button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default Signup;