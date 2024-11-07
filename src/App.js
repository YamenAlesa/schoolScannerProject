import "./App.css";
import Layout from "./components/layout";
import Clock from "./components/clock";
function App() {
  const apikey = process.env.REACT_APP_AIRTABLE_API_KEY;
  console.log(apikey);

  return (
    <Layout>
      <h1>Välkomna! This is the food app for NTI - for the pull request</h1>
      <hr />
      <Clock />
    </Layout>
  );
}

export default App;
