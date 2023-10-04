import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SomethingBig() {
  const [data, setdata] = useState([]);
  const [formData, setFormData] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setdata(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    axios.post("https://jsonplaceholder.typicode.com/users",formData);
    e.preventDefault();
  };

  const handleChange = (e) => {
    let data = e.target.value;
    setFormData({name: data});
  };

  return (
    <div>
      SomethingBig
      <div>
        {data?.map((item, index) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
      <form >
        <input type="text" onChange={handleChange} />
        <input type="submit" onClick={handleSubmit} value="submit" />
      </form>
    </div>
  );
}
