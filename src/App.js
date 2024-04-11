import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const LazyMain = React.lazy(() => import("./Pages/Main"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleVideoEnd = () => {
      setIsLoading(false);
    };
    return () => {};
  }, []);

  return (
    <>
      <Header />
      <Suspense fallback={<Loading onVideoEnd={() => {}} />}>
        {isLoading ? (
          <Loading onVideoEnd={() => setIsLoading(false)} />
        ) : (
          <LazyMain />
        )}
      </Suspense>
      {/* <Footer /> */}
    </>
  );
}

export default App;
