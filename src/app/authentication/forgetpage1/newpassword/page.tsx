import Button from "antd/es/button";
import React from "react";

const page = () => {
  return (
    <div className="p-20 bg-blue-300">
      <div className="bg-white place-self-center p-10 m-4 lg:p-10 ">
        <h1 className="text-blue-500 text-4xl font-500 py-5 lg:text-5xl">
          LOGO
        </h1>
        <h2 className="text-green-500 text-3xl font-500 py-5">New password</h2>
        <p className="py-2">
          Set the new password for your account so that you can login and access
          all features
        </p>
        <label>New Password</label> <br />
        <input
          type="password"
          required
          placeholder="New password"
          className="border border-black-100 rounded text-xl p-2 w-80 lg:w-100"
        />
        <br />
        <label>Confirm Password</label> <br />
        <input
          type="password"
          required
          placeholder="New password"
          className="border border-black-100 rounded text-xl p-2 w-80 lg:w-100"
        />
        <br />
        <Button>UPDATE PASSWORD</Button>
      </div>
    </div>
  );
};

export default page;
