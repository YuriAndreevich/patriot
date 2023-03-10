import { Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy } from "react";

function loader() {
  const App = lazy(() => import("./Genocide"));

  return (
    <Suspense fallback={<Spinner />}>
      <App />
    </Suspense>
  );
}

export default loader;
