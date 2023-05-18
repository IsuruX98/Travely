import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Swal from "sweetalert2";
import backgroundImage from "../assets/images/bg.jpg";
import Spinner from "../components/spinner/LoadingSpinner";

const Register = () => {
  const [loading2, setLoading2] = useState(false);

  const [file, setFile] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [type, setType] = useState("traveler");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await Swal.fire({
      title: "Do You want to signup with Travely?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    });

    if (password !== repeatPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Not Matched!",
      });
      return;
    }
    if (email === "" || password === "" || name === "" || mobile === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "missing required fields!",
      });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      Swal.fire("Please enter a valid email address", "", "error");
      return;
    }
    if (mobile.length !== 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "enter valid mobile number",
      });
      return;
    }
    if (password.length <= 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "password must at least have 6 charaters",
      });
      return;
    }

    setLoading2(true);

    try {
      const existingUser = await axios.get(`auth/check-email?email=${email}`);

      if (existingUser.data.message === "Email already exists") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User with this email already exists!",
        });
        setLoading2(false);
        return;
      }

      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");

      if (file) {
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dpgelkpd4/image/upload",
          data
        );

        const { url } = uploadRes.data;

        const response = await axios.post("auth/register", {
          name,
          email,
          mobile,
          country,
          type,
          password,
          img: url,
        });

        Swal.fire(
          "Congratulations! You Have Successfully Registered with Travely",
          "",
          "success"
        );
        navigate("/login");
      } else {
        const response = await axios.post("auth/register", {
          name,
          email,
          mobile,
          country,
          type,
          password,
        });

        Swal.fire(
          "Congratulations! You Have Successfully Registered with Travely",
          "",
          "success"
        );
        navigate("/login");
      }

      setLoading2(false);
    } catch (err) {
      if (err.message === "Request failed with status code 409") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User with this email already exists!",
        });
        setLoading2(false);
        return;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
      setLoading2(false);
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
      <div className="py-10 lg:py-20 px-16 lg:px-96 md:px-64 flex flex-col text-center">
        <div className="mb-8 text-center">
          <h2 className="text-5xl font-bold">SIGN UP</h2>
        </div>
        <div className="mb-6 flex sm:flex-row justify-center">
          <img
            className="rounded-full"
            src={
              file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="avatar"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6 flex flex-row justify-center items-center text-center">
              <label htmlFor="file">
                click here to add a profile picture :{" "}
                <DriveFolderUploadOutlinedIcon />
              </label>
              <input
                type="file"
                id="file"
                name="file"
                style={{ display: "none" }}
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && !file.type.startsWith("image/")) {
                    Swal.fire("Please select an image file", "", "error");
                    return;
                  }
                  setFile(file);
                }}
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Email"
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                class="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Mobile"
                type="tel"
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:ring focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <input
                placeholder="Country"
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] focus:ring outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-6">
              <div className="relative">
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="block text-base bordder-[#E9EDF4] border appearance-none w-full py-3 px-5   bg-[#FCFDFE] rounded-3xl  border-slate-300 focus:outline-none focus:ring"
                >
                  <option value="traveler">Traveler</option>
                  <option value="hotelOwner">Hotel Owner</option>
                  <option value="vehicleOwner">Vehicle Owner</option>
                  <option value="resturentOwner">Resturent Owner</option>
                  <option value="tourGuide">Tour Guide</option>
                  <option value="eventOrganizer">Event Organizer</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M14.354 7.354a2 2 0 00-2.828 0L10 8.172 7.475 5.646a2 2 0 10-2.828 2.828l3.182 3.182a2 2 0 002.828 0l3.182-3.182a2 2 0 000-2.828z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <input
                placeholder="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bordder-[#E9EDF4] w-full rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-base text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-9">
              <input
                placeholder="Repeat Password"
                type="password"
                id="repeatPassword"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                className="bordder-[#E9EDF4] w-full text-base rounded-3xl border bg-[#FCFDFE] py-3 px-5 text-body-color focus:ring placeholder-[#ACB6BE] outline-none focus:border-[#41A4FF] focus-visible:shadow-none"
              />
            </div>
            <div className="mb-10">
              <button
                type="submit"
                className=" w-full font-bold text-center hover:bg-gray-600 cursor-pointer rounded-3xl bg-[#41A4FF] py-3 px-5 text-white transition hover:bg-opacity-90"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        {loading2 && <Spinner />}

        <div className="flex flex-col justify-center text-center pb-20">
          <p className="text-base text-[#adadad]">
            Already a member yet?
            <Link
              to="/login"
              className="text-primary hover:underline ms-2 font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
