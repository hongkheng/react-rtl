import React, { Suspense } from "react";

// lazy load Home component
const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <div>
      <h1>Hello, test</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
