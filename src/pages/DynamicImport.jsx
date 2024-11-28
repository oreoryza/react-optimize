import React, { useState, lazy, Suspense } from "react";
// import { HeavyComponent } from "../components/HeavyComponent";

const LazyComponent = lazy(() => import("../components/HeavyComponent"));

export default function DynamicImport() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>Dynamic Import</h1>
      <button onClick={() => setShow(!show)}>Click</button>
      {show &&
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      }
    </div>
  );
}
