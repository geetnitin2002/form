import axios from "axios";
import { useContext, useState } from "react";
import { ApplicationContext } from "../App";

export default function AddressForm() {
  const {data,setData} = useContext(ApplicationContext)

  function submit(e) {
    e.preventDefault();
    let finalData = JSON.stringify(data);
    console.log(data);
    axios
      .post("/form", finalData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  return (
    <form onSubmit={(e) => submit(e)} id="form">
      <div className="addressform">
        <h1>Business Address</h1>
        <label>
          Address Line 1
          <input
            onChange={(e) => handle(e)}
            id="addressline1"
            value={data.addressline1}
            type="text"
            name="addressline1"
          />
        </label>
        <label>
          Address Line 2
          <input
            onChange={(e) => handle(e)}
            id="addressline2"
            value={data.addressline2}
            type="text"
            name="addressline2"
          />
        </label>
        <label>
          Area
          <input
            onChange={(e) => handle(e)}
            id="area"
            value={data.area}
            type="text"
            name="area"
          />
        </label>
        <label>
          City
          <input
            onChange={(e) => handle(e)}
            id="city"
            value={data.city}
            type="text"
            name="city"
          />
        </label>
        <label>
          Postal Code
          <input
            onChange={(e) => handle(e)}
            id="postalcode"
            value={data.postalcode}
            type="text"
            name="postalcode"
          />
        </label>
        <label>
          Latitude
          <input
            onChange={(e) => handle(e)}
            id="latitude"
            value={data.latitude}
            type="text"
            name="latitude"
          />
        </label>
        <label>
          Longitude
          <input
            onChange={(e) => handle(e)}
            id="longitude"
            value={data.longitude}
            type="text"
            name="longitude"
          />
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
}
