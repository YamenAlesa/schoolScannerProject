import Daymenu from "./components/daymenu";
import AirtableComponent from "./components/airtableAPI";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
      <Daymenu />
      {/* <AirtableComponent /> */}
    </Layout>
  );
};

export default App;
