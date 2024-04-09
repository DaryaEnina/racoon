import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loading from "./Components/Loading";

const LazyMain = React.lazy(() => import("./Pages/Main"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Функция, которая будет вызвана после завершения воспроизведения видео
    const handleVideoEnd = () => {
      setIsLoading(false); // Убираем загрузочный экран
    };

    return () => {
      // Очистка эффекта, если компонент размонтируется
      // В данном случае нет необходимости, так как видео само удаляется, но можно добавить, если нужно
    };
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
      <Footer />
    </>
  );
}

export default App;
