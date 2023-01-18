import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/hello"
          element={<h1>Hello</h1>}
        ></Route>
        <Route
          path="/movie/:id"
          element={<Detail />}
        ></Route>
        {/* 유저가 홈화면으로 갈때 */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
