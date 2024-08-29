import React from "react";

const ErrorBox = ({error}) => {
  const errorMessage = error.response?.data?.error?.message;
  return (
    <div className="bg-red-500 text-white p-4">
      <h2 className="text-xl font-bold">Error</h2>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorBox;
