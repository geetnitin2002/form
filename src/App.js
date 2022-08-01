import "./App.css";
import Map from "./components/Map";
import AddressForm from "./components/AddressForm";
import { createContext, useState } from "react";

export const ApplicationContext = createContext();

function App() {
  const [data, setData] = useState({
    addressline1: "",
    addressline2: "",
    area: "",
    city: "",
    postalcode: "",
    latitude: "",
    longitude: "",
  });

  return (
    <ApplicationContext.Provider value={{ data, setData }}>
      <div className="App">
        <AddressForm />
        <h4>Please give location permission</h4>
        <Map />
      </div>
    </ApplicationContext.Provider>
  );
}

export default App;