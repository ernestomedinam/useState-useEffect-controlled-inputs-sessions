import React from "react";

// export const Light = (props) => {
export const Light = ({ color, on, setCurrentActiveLight }) => {
    return (
        <div
            onClick={(event) => setCurrentActiveLight(color)}
            className={`${color} light ${(on == true) ? "active" : ""}`}>
        </div>
    );
};

/**
 * props = {
 *   color: "red" | "yellow" | "green",
 *   on: bool,
 *   setCurrentActiveLight: function() {},
 * 
 * }
 * 
 */