import "./App.css";
import Layout from "./components/Layout/Layout";
import Routes from "./routes";

function App({ children }) {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default App;
