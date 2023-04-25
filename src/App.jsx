import { HomeScreen, LoginScreen } from "@app/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "@app/utils";

function App() {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />

        <Route
          exact
          path="/"
          element={<ProtectedRoute isAuthenticated={isAuthenticated} />}
        >
          <Route exact path="/" element={<HomeScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
