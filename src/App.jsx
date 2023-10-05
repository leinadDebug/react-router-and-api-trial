import Home from "./components/Home";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile";
import About from "./components/About";
import { useEffect, useState } from "react";
import axios from "axios";
import SomethingBig from "./components/SomethingBig";
import CountryApi from "./components/CountryApi" 

function App() {
  const [data, setdata] = useState();
  useEffect(() => {
    // const fetchdata = () =>
    //   fetch("https://hn.algolia.com/api/v1/search?query=redux")
    //     .then((Response) => console.log(Response))
    //     .then((Response) => setdata(Response));
    // fetchdata();
    // ----------------------------------------------using the fetch method
    const fetchdata = () => {
      axios
        .get("https://hn.algolia.com/api/v1/search?query=redux")
        .then((Response) => {
          setdata(Response.data.hits);
        });
    };
    fetchdata();
  }, []);

  const handleChange=()=>{
    (e)=>
    console.log(e.target.name)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />}>
          <Route path=":id" element={<About />} />
        </Route>
        <Route path="/Something" element={<SomethingBig/>}/>
        <Route path="/country" element={<CountryApi/>}/>
        <Route path="*" element={<p>Not found</p>}/>
      </Routes>


      
      {/* <div style={{ background: "black", color: "white" }}>
        {data?.map((item) => (
          <div key={item.title}> {item.title} </div>
        ))}
      </div>
      <form>
        <input type='text' name="l3inad" placeholder='enter' onChange={handleChange}/>
        <button type="submit">submit</button>
      </form> */}
    </>
  );
}

export default App;
