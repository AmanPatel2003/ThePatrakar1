import "./App.css";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Footer } from "./component/Footer";
import { Rajniti } from "./component/Rajniti";
import { News_Page } from "./component/News_Page";
import { Contect } from "./component/Contect";
import { Login } from "./component/Login";
import { Dashbord } from "./component/Dashbord";
import { BrowserRouter as Router,Routes , Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="xs:w-full sm:w-full md:w--[100%]">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/rajniti" element={<Rajniti />}></Route>
          <Route exact path="/news" element={<News_Page />}></Route>
          <Route exact path="/contect" element={<Contect />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashbord" element={<Dashbord />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
