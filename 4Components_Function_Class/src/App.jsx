import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  let user = "Karthik";

  return (
    <>
      <Header user={user} />
      <Content />
      <Footer user="Footer" />
    </>
  );
}

export default App;
