import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
    return (
        <RotatingLines
            strokeColor="black"
            strokeWidth="2"
            width={"18"}
            animationDuration="5.00"
            ariaLabel="rotating-lines-loading"
            visible={true}
        />
    );
};

export default Loader;
