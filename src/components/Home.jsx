import React from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function Home() {
  return (
    <div>
      <Link to={'/Profile'}>
        <button
          style={{ padding: "30px", background: "black", color: "white" }}
        >
          {" "}
          Profile
        </button>
      </Link>

      <h1>Homepage</h1>
    </div>
  );
}
