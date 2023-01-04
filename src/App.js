import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin.js";
// import Signup from "./components/Signup.js";
import RefreshProvider from "./Contexts/RefreshContext.js";
import { GlobalStyle } from "./globalStyles.js";

function App() {
  return (
    <>
      <GlobalStyle />
      <RefreshProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/signup" element={<Signup />} /> */}
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </BrowserRouter>
      </RefreshProvider>
    </>
  );
}

export default App;
