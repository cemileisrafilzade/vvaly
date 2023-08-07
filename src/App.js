import "./App.css";
import Layout from "./components/Layout/Layout";
import Slogan from "./components/Slogan/Slogan";
import Greentext from "./components/GreenText/GreenText";
import WhoWeAre from "./components/WhoWeAre/WhoWeAre";
import Features from "./components/Features/Features";
import Team from "./components/Team/Team";
import Faq from "./components/Faq/Faq";
function App() {
  return (
    <Layout>
      <Slogan />
      <WhoWeAre />
      <Features />
      <Team />
      <Faq />
      <Greentext />
    </Layout>
  );
}

export default App;
