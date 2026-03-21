import React, { useState } from "react";

export const Friends = (props) => {
    const [friends, setFriends] = useState(["Lucy", "Nancy", "Yuan"]);
    const [userInput, setUserInput] = useState("");
    function addFriend() {
        const updatedFriends = [...friends, userInput];
        // and update with setFriends()
        setFriends(updatedFriends);
        setUserInput("");
    };
    function removeFriend(friend, index) {
        // remove the clicked on friend
        // from the friends array
        const filteredFriendsList = [];
        for (const friendName of friends) {
            if (friendName == friend) {
                // don't do anything
            } else {
                filteredFriendsList.push(friendName);
            }
        }
        // and update friends list
        setFriends(filteredFriendsList);
    };
    return (
        <div className="container">
            <div className="row">
                <ul>
                    {friends.map((friend, index) => {
                        return (
                            <li
                                onClick={(event) => removeFriend(friend, index)}
                                key={index}>{friend}</li>
                        );
                    })}
                </ul>
            </div>
            <div className="row">
                <div className="col-12">
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="friend's name"
                        onChange={(event) => setUserInput(event.target.value)}
                        onKeyDown={(event) => {
                            console.log(">>> 😀 this is the key that was pressed:", event.key);
                            if (event.key === "Enter") {
                                // we would add friend
                                addFriend();
                                event.stopPropagation();
                                event.preventDefault();
                            }
                        }}
                        value={userInput} />
                    <button
                        onClick={(event) => {
                            // add the new friend
                            // create a new array with all the items
                            // in friends, plus the userInput (new friend)
                            addFriend();
                        }}
                        className="btn btn-primary">
                        add friend
                    </button>
                    <p className="m-4">you have {friends.length} friends!!</p>
                </div>
            </div>
        </div>
    );
};
