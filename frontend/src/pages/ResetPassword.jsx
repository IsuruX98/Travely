import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import backgroundImage from "../assets/images/bg.jpg";
import Spinner from "../components/spinner/LoadingSpinner";
import { useLocation, useNavigate } from "react-router";

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token2 = searchParams.get("token");
  console.log(token2);

  const [loading2, setLoading2] = useState(false);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async (event) => {
    event.preventDefault();

    if (!email || !email.includes("@")) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please enter a valid email address",
      });
      return;
    }

    try {
      setLoading2(true);
      const response = await axios.post("auth/forgot-password", {
        email: email,
      });
      setToken(response.data.token);
      setLoading2(false);
      Swal.fire({
        icon: "success",
        title: "Done",
        text: "Password reset link sent to your email",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    if (!password || password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long",
      });
      return;
    }

    try {
      setLoading2(true);
      const response = await axios.post("auth/reset-password", {
        token: token2,
        password: password,
      });
      setLoading2(false);
      Swal.fire({
        icon: "success",
        title: "Done",
        text: response.data.message,
      });
      navigate("/login");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="xl:px-96 xl:pt-36 xl:pb-52 p-16">
        <h2 className="text-center text-3xl font-bold pb-10">Reset Password</h2>
        {loading2 && <Spinner />}
        <p className="text-center pb-8">
          Enter your email and click the Get the Reset Link button to recive the
          reset link via Email, then click on that reset link and it will
          redirect you to the reset password page with access.
        </p>
        {token2 ? (
          <form onSubmit={handleResetPassword} className="mb-6">
            <label htmlFor="password" className="block mb-2 font-bold">
              New Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full p-2 mb-4 border border-gray-400 rounded"
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Reset Password
            </button>
          </form>
        ) : (
          <form onSubmit={handleForgotPassword} className="mb-6">
            <label htmlFor="email" className="block mb-2 font-bold">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full p-2 mb-4 border border-gray-400 rounded"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Get the Reset Link
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
