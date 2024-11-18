import Daymenu from "./components/daymenu";
import AirtableComponent from "./components/airtableAPI";
import Layout from "./components/layout";
import Weekmenu from "./components/weekmenu";
import Banner from "./components/banner";
import Weatherapi from "./components/weatherapi";

const App = () => {
  return (
    <div>
      <Layout>
        <AirtableComponent />
        <div className="flex flex-col justify-center items-center gap-4">
          <Daymenu />
          <Banner text="Öppettider: 11:00 - 13:00" />
        </div>
        <div className="flex flex-col justify-evenly h-full">
          <Weekmenu />
        </div>
      </Layout>
    </div>
  );
};

export default App;
