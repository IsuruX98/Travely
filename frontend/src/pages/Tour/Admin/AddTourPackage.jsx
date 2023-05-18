import { TbPhotoPlus } from "react-icons/tb";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Ripple, initTE } from "tw-elements";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

const AddTourPackage = () => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);
  const navigate = useNavigate();

  //store database states
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [groupCount, setGroupCount] = useState(0);
  const [languages, setLanguages] = useState("");
  const [duration, setDuration] = useState("");
  const [cities, setCities] = useState("");
  const [description, setDesc] = useState("");
  const [introduction, setIntroduction] = useState("");
  const { user } = useContext(AuthContext);
  const currentUser = user.email;
  console.log(file);
  //send data to database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      file === "" ||
      name === "" ||
      category === "" ||
      price === 0 ||
      groupCount === 0 ||
      languages === "" ||
      duration === "" ||
      cities === "" ||
      description === "" ||
      introduction === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "missing required fields!",
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "Confirm to save details for review",
        showDenyButton: true,
        confirmButtonText: "confirm",
        denyButtonText: `cancel`,
      });

      if (result.isConfirmed) {
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "upload");
        const uploadRes = await axios.post(
          "https://api.cloudinary.com/v1_1/dpgelkpd4/image/upload",
          data
        );

        const { url } = uploadRes.data;

        const response = await axios.post("/tours", {
          currentUser,
          img: url,
          name,
          category,
          price,
          groupCount,
          languages,
          duration,
          cities,
          description,
          introduction,
        });
        Swal.fire(response.data.message, "", "success");
        navigate("/tours");
      } else {
        Swal.fire("Tour adding Cancelled!", "", "error");
      }
    } catch (err) {
      // using err instead of error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  //gather all form data

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
      <form>
        <div className="space-y-12">
          {/* basic details */}
          <div>
            <h2 className="text-3xl font-semibold leading-7 text-[#41A4FF] text-center">
              Add Tour Package
            </h2>
            <p className="mt-3 text-red-500 text-lg leading-6 text-center">
              This information will be displayed publicly so be careful what you
              share.
            </p>
            {/* photo add */}
            <div>
              <label
                htmlFor="photo"
                className="block text-lg font-medium leading-6 text-gray-900 mt-10"
              >
                Add a cover photo for the package
              </label>
              <div className="mt-10 flex flex-row">
                <div className="basis-1/3"></div>
                <div className="basis-2/3">
                  <img
                    className="w-[610px] h-[400px] rounded-3xl"
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt="avatar"
                  />
                </div>
                <div className="basis-1/3"></div>
              </div>
              <div className="mb-6 flex flex-row justify-center items-center text-center mt-12">
                <label htmlFor="file">
                  click below Icon to add a Cover Photo :{" "}
                  <TbPhotoPlus
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                />
              </div>
            </div>
            {/* name and category */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* add name */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add Name for Package
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Type Here"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* select category */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Select Tour Category
                </label>
                <div className="mt-2">
                  <select
                    id="category"
                    name="category"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option>--Select one--</option>
                    <option value={"sun and beach"}>Sun and Beach</option>
                    <option value={"hiking and trekking"}>
                      Hiking and Trekking
                    </option>
                    <option value={"wild safari"}>Wild Safari</option>
                    <option value={"special tours"}>Special Tour</option>
                    <option vlaue={"cultural"}>Cultural</option>
                    <option values={"festival"}>Festival</option>
                  </select>
                </div>
              </div>
              {/* price and group size*/}

              {/* add price*/}
              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add PerPerson Price for Package
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Type Here"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* select group size */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="maxsize"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add Maximum Group Size
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    id="maxsize"
                    name="maxsize"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setGroupCount(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* languages and duration */}

              {/* add languages */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="languages"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add Languages
                </label>
                <p className="text-sm">(English, French, German etc..)</p>
                <div className="mt-2">
                  <input
                    type="text"
                    name="languages"
                    id="languages"
                    placeholder="Type Here"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setLanguages(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* select duration */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="duration"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Select Tour Duration
                </label>
                <p className="text-sm">(In days)</p>
                <div className="mt-2">
                  <select
                    id="duration"
                    name="duration"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setDuration(e.target.value);
                    }}
                  >
                    <option>--Select One--</option>
                    <option value={1}>1 Day</option>
                    <option value={2}>2 Days</option>
                    <option value={3}>3 Days</option>
                    <option value={5}>5 Days</option>
                    <option value={7}>7 Days</option>
                    <option value={9}>9 Days</option>
                    <option value={12}>12 Days</option>
                    <option value={15}>15 Days</option>
                  </select>
                </div>
              </div>

              {/* add cities */}
              <div className="col-span-full">
                <label
                  htmlFor="places"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Cities That included in your package
                </label>
                <p className="text-sm">
                  (Type cities in visiting order (if you are starting in colombo
                  and then you wish to travel to galle type colombo, Galle))
                </p>
                <div className="mt-2">
                  <input
                    type="text"
                    name="places"
                    id="places"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Type Here"
                    onChange={(e) => {
                      setCities(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* add description */}
          <div className="col-span-full">
            <label
              htmlFor="description"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Add a brief description about your tour package
            </label>
            <p className="text-sm">
              (This part will show as overall description part of tourdetails)
            </p>
            <div className="mt-2">
              <textarea
                rows={10}
                type="text"
                name="description"
                id="description"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Type Your Description Here"
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
              />
            </div>
          </div>

          {/* add Introduction */}
          <div className="col-span-full">
            <label
              htmlFor="intro"
              className="block text-lg font-medium leading-6 text-gray-900"
            >
              Add a Introduction about your tour destinations and activites
            </label>
            <p className="text-sm">
              (This part will show as overall introduction part of tour)
            </p>
            <div className="mt-2">
              <textarea
                rows={10}
                type="text"
                name="intro"
                id="intro"
                className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="Type Your Introduction Here"
                onChange={(e) => {
                  setIntroduction(e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        {/* reset submit button */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="reset"
            className="text-lg font-semibold leading-6  text-red-700"
            value={"Reset"}
          >
            Reset
          </button>
          <button
            type="submit"
            className="rounded-md bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#41A4FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleSubmit}
          >
            Submit For Review
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddTourPackage;
