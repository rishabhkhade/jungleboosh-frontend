import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import "./App.scss";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((item, index) =>
              item.component ? (
                <Route
                  key={index}
                  path={item.path}
                  exact={item.exact}
                  name={item.name}
                  element={<item.component/>}
                />
              ) : null
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
