import React from "react";

const SignupPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        className="login-container"
        style={{
          textAlign: "center",
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Create your account</h2>
        <form onSubmit={handleSubmit}>
          <div
            className="input-container"
            style={{ position: "relative", margin: "10px 0" }}
          >
            <span
              className="input-label"
              style={{
                position: "absolute",
                top: "6px",
                left: "10px",
                color: "#10a37f",
                backgroundColor: "#ffffff",
                padding: "0 5px",
              }}
            >
              Email address
            </span>
            <input
              type="email"
              id="email"
              placeholder=" "
              required
              style={{
                width: "300px",
                padding: "10px",
                boxSizing: "border-box",
                border: "1px solid #10a37f",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>

          <div
            className="input-container"
            style={{ position: "relative", margin: "10px 0" }}
          >
            <span
              className="input-label"
              style={{
                position: "absolute",
                top: "6px",
                left: "10px",
                color: "#10a37f",
                backgroundColor: "#ffffff",
                padding: "0 5px",
              }}
            >
              Password
            </span>
            <input
              type="password"
              id="password"
              placeholder=" "
              required
              style={{
                width: "300px",
                padding: "10px",
                boxSizing: "border-box",
                border: "1px solid #10a37f",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>

          <div
            className="input-container"
            style={{ position: "relative", margin: "10px 0" }}
          >
            <span
              className="input-label"
              style={{
                position: "absolute",
                top: "6px",
                left: "10px",
                color: "#10a37f",
                backgroundColor: "#ffffff",
                padding: "0 5px",
              }}
            >
              Re-enter Password
            </span>
            <input
              type="password"
              id="repassword"
              placeholder=" "
              required
              style={{
                width: "300px",
                padding: "10px",
                boxSizing: "border-box",
                border: "1px solid #10a37f",
                borderRadius: "10px",
                marginTop: "20px",
              }}
            />
          </div>

          <button
            type="submit"
            id="continue-button"
            style={{
              width: "300px",
              backgroundColor: "#10a37f",
              color: "#ffffff",
              padding: "12px",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Continue
          </button>
        </form>
        <p
          id="signup-link"
          style={{
            color: "#333",
            textDecoration: "none",
            marginTop: "10px",
            display: "block",
          }}
        >
          Already have an account?{" "}
          <button style={{ color: "#10a37f" }}
            onClick={event =>  window.location.href='/login'}
          >Login</button>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
