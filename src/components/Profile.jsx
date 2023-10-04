import React from "react";
import data from "./Peopledata";
import { Link, Outlet } from "react-router-dom";
export default function Profile() {
  return (
    <div style={{ display: "flex", gap: "2em" }}>
      {data.map((item, index) => {
        return (
          <div
            style={{
              padding: "10px",
              background: "mistyrose",
              borderRadius: "10px",
            }}
            key={index}
          >
            <Link to={`./${index}`}><a>{item.name}</a></Link>
            <hr />
            {item.age}
          </div>
        );
      })}
      <Outlet/>
    </div>
  );
}
