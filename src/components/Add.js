import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import axios from "axios";
export const Add = () => {
  const [cbtn, setCbtn] = useState(true);
  const handleBtn = () => {
    window.location.reload();
    setCbtn(!cbtn);
  };
  const [idea, setIdea] = useState({
    idea: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Destructure name and value

    setIdea((prevData) => ({
      ...prevData, // Spread the previous state
      [name]: value, // Update the specific field
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://anonthoughtsbackend.onrender.com/api/post", idea)
      .then((response) => {
        window.location.reload();
        console.log(response);
      })
      .then(() => {
        setIdea({ idea: "" });
        setCbtn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {cbtn && (
        <div className="fixed  inset-0 bg bg-opacity-25 backdrop-blur-sm flex flex-col gap-2 justify-center items-center">
          <button
            className="w-[400px] max:lg:w-[350px] max-lg:pr-8  flex justify-end  "
            onClick={handleBtn}
          >
            <HiMiniXMark className="text-3xl rounded-full bg-[rgba(226,226,226,0.64)] p-2 " />
          </button>
          <div className="w-[400px] h-[400px] max-lg:w-[350px] max-lg:h-[400px] bg-white rounded-[20px] border shadow-xl ">
            <div className="w-[full] flex justify-center items-center h-[60px] ">
              <h1 className="font-bold text-xl bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">
                Share your Thoughts
              </h1>
            </div>
            <div className="p-5">
              <textarea
                className="w-full  border-[2px] rounded-[10px] border-gray-300 p-3 "
                rows="10"
                placeholder="Speak your mind without revealing your identity.."
                onChange={handleChange}
                name="idea"
                value={idea.idea}
              ></textarea>
            </div>
            <div className="w-[full] h-[40px] flex justify-center">
              <button
                className="font-bold text-sm py-2 px-4 rounded-xl text-white bg-gradient-to-r from-blue-500 via-blue-700 to-indigo-600"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
