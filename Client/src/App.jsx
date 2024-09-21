import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/Home";
import Quiz from "./Pages/Quiz";

function App() {
  const basename =
    import.meta.env.MODE === "production" ? "/Client" : "/Client";

  console.log(basename);
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
