import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import backgroundImage from "../assets/images/bg.jpg";
import Spinner from "../components/spinner/LoadingSpinner";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const [loading2, setLoading2] = useState(false);

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });

    if (!credentials.email || !credentials.password) {
      Swal.fire("Please enter your email and password", "", "error");
    }
    if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      Swal.fire("Please enter a valid email address", "", "error");
    }
    try {
      setLoading2(true);
      const res = await axios.post("auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      setLoading2(false);
      if (res.data.isAdmin === true) {
        navigate("/admin");
      } else if (res.data.details.type == "financeManager") {
        navigate("/finance");
      } else if (res.data.isAdmin === false) {
        navigate("/");
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
      setTimeout(() => {
        Swal.fire(err.response.data, "", "error");
      }, 2000);
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
      <div className="py-32 lg:py-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="relative mx-auto mt-[-5rem] max-w-[525px] overflow-hidden bg-transparent py-16 px-10 text-center sm:px-12 md:px-[60px]">
                <div className="mb-10 text-center md:mb-16">
                  <h2 className="text-5xl font-bold">LOGIN</h2>
                </div>
                <form>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      className="bordder-[#E9EDF4] w-full rounded-3xl focus:ring border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-9">
                    <input
                      type="password"
                      placeholder="Password"
                      id="password"
                      name="password"
                      onChange={handleChange}
                      className="bordder-[#E9EDF4] w-full rounded-3xl border focus:ring bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
                    />
                  </div>
                  <div className="mb-10">
                    <button
                      disabled={loading}
                      onClick={handleClick}
                      className="w-full cursor-pointer rounded-3xl font-bold bg-[#41A4FF] text-center hover:bg-gray-600 py-3 px-5 text-white transition hover:bg-opacity-90"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                {loading && <Spinner />}

                <Link
                  to="/reset-password"
                  className="mb-2 inline-block text-base text-red-500 font-semibold cursor-pointer hover:text-primary hover:underline"
                >
                  Forget Password?
                </Link>
                <p className="text-base text-[#adadad]">
                  Not a member yet?
                  <Link
                    to="/register"
                    className="text-primary cursor-pointer hover:underline ms-2 font-bold"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
