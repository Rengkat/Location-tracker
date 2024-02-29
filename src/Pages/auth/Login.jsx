import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 


import "./Login.css";

const LogIn = () => {
  const [formInput, setFormInput] = useState({
    email: "",
    password: "",
    showPassword: false, 
  });

  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (name, value) => {
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setFormInput({
      ...formInput,
      showPassword: !formInput.showPassword,
    });
  };

  const validateFormInput = (event) => {
    event.preventDefault();

    let inputError = {
      email: "",
      password: "",
    };

    if (!formInput.email) {
      inputError.email = "Enter valid email address";
    }

    if (!formInput.password) {
      inputError.password = "Password should not be empty";
    }

    setFormError(inputError);
  };

  

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-header">
          <span className="title">Login</span>
        </div>
          <span className="wel">Welcome Back!!!</span>
        <div className="card-body">
          <form onSubmit={validateFormInput}>
            {/* Email */}
            <p className="login-label">Email</p>
            <input
              value={formInput.email}
              onChange={({ target }) => {
                handleUserInput(target.name, target.value);
              }}
              name="email"
              type="email"
              className="login-input"
              placeholder="Enter Email"
              required  
            />
            <p className="error-message">{formError.email}</p>

            {/* Password */}
            <p className="login-label">Password</p>
            <div className="password-input-container">
              <input
                value={formInput.password}
                onChange={({ target }) => {
                  handleUserInput(target.name, target.value);
                }}
                name="password"
                type={formInput.showPassword ? "text" : "password"}
                className="login-input"
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={togglePasswordVisibility}
              >
                {formInput.showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <p className="error-message">{formError.password}</p>
            <span className="pwd">forgot password ?</span>

            {/* submit */}
            <input type="submit" className="login_btn" value="Log In" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

