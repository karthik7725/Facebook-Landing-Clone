//THIS PROJECT WAS A SUCCESS

import React from "react";
function App() {
  return (
    <>
      <div className="min-h-screen border  border-red-500">
        <div className="flex justify-center items-start mt-48  ">
          <div className="left w-1/3 mx-14 my-14 ">
            <img
              className="w-[400px] h-[150px] "
              src="../public/facebooklogo.svg"
              alt="placeholder"
            />
            <p className="text-3xl mx-9">
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>
          <div className="right flex flex-col w-1/4">
            <div className="right flex flex-col border border-white p-8 bg-white rounded-lg shadow-xl">
              <input
                className=" px-4 h-14 my-2"
                type="text"
                placeholder="Email address or phone number"
              />
              <input
                type="password"
                className=" px-4 h-14 my-2"
                placeholder="Password"
              />
              <button className="bg-facebook-blue hover:bg-blue-500 text-white my-2 py-3 font-bold text-xl rounded-md">
                Log In
              </button>
              <span className="text-center text-facebook-blue my-2 cursor-pointer hover:underline">
                {" "}
                Forgotten Password ?{" "}
              </span>
              <hr className="my-2" />
              <button className="bg-facebook-green mx-auto text-white my-2 py-3 font-bold text-xl rounded-md w-fit">
                Create New Account
              </button>
            </div>
            <span className="my-5 text-lg text-center">
              <b className="cursor-pointer hover:underline">Create a Page</b>{" "}
              for a celebrity, band or business.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
