import React from "react";
import { Fragment } from "react";

const LoadingSpinner = () => {
  return (
    <Fragment>
      <div className="flex justify-center items-center pb-10">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    </Fragment>
  );
};

export default LoadingSpinner;
