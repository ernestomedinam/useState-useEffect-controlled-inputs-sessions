import React, { useState } from "react";

export const Excuse = () => {
    const [excuse, setExcuse] = useState("this is a placeholder for an excuse... 😐");
    return (
        <div className="container">
            <div className="row justify-content-center pt-5 pb-5">
                <p className="w-auto display-1">{excuse}</p>
            </div>
            <div className="row justify-content-center">
                <button
                    onClick={(event) => {
                        // we want to get a random excuse
                        // from the excuse API... why???
                        // step 1: get the excuse from the API
                        fetch(
                            "https://shiny-guide-p75gw9wqr47crrqx-3000.app.github.dev/api/excuses", {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }
                        ).then((response) => {
                            return response.json();
                        }).then((body) => {
                            // because I'll use the excuse I get
                            // to update the excuse state... why??
                            // step 2: use the excuse you got, to update excuse state
                            console.log(">>> 💃🏽 this is the body we got!", body);
                            setExcuse(body.excuse);
                        })
                        // so that the user can see the new excuse
                        // step 3: React will update the component with the new state
                        console.log(">>> 🥳 I think we successfully sent the fetch request!");
                    }}
                    className="btn btn-primary w-auto">
                    get new excuse
                </button>
            </div>
        </div>
    );
};