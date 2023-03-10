import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles.js";
import Signin from "./components/Signin.js";
import Signup from "./components/Signup.js";
import RefreshProvider from "./Contexts/RefreshContext.js";
import Container from "./components/Container.js";

// Pages
import Timeline from "./pages/Timeline.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <RefreshProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Signin />} />
            <Route path="/timeline" element={<Container Component={Timeline} />}/>
          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}

export default App;
