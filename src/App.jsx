import Daymenu from "./components/daymenu";
import AirtableComponent from "./components/airtableAPI";
import Layout from "./components/layout";
import Weekmenu from "./components/weekmenu";
import Banner from "./components/banner";
import "./background.css";
import Bubbles from "./components/bubbles";

const App = () => {
  return (
    <Layout>
      <AirtableComponent />
      <div className="flex flex-col justify-center items-center gap-4">
        <Daymenu />
        <Banner text="Opening hours: 11:00 - 13:00" />
      </div>
      <Weekmenu />
      <Bubbles />
    </Layout>
  );
};

export default App;
