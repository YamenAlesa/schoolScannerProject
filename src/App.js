import "./App.css";
import Layout from "./components/layout";
import Clock from "./components/clock";
import Daymenu from "./components/daymenu";
function App() {
  return (
    <Layout>
      <h1>Välkomna! This is the food app for NTI</h1>
      <hr />
      <Daymenu />
      <Clock />
    </Layout>
  );
}

export default App;
