import "./style.scss";

const Main = () => {
  return (
    <main className="main__wrapper">
      <section className="main__title">
        <h2>Купи енота,</h2>
        <h2>Свинота!</h2>
      </section>
      <section className="main__content">
        <div className="main__content_left">
          <p>
            Приветствую вас, мои друзья! Я — ваш верный енот, и я рад
            приветствовать вас в моем уютном мире. Здесь каждый день наполнен
            удивительными открытиями и веселыми приключениями. Пусть наш дом
            станет для вас местом тепла и радости, где вы сможете наслаждаться
            нашей дружбой и совместными моментами.
          </p>
          <p>
            Добро пожаловать в мир енотов, где каждый найдет свое место под
            солнцем и звездами!
          </p>
          <div className="main__content_left-line"></div>
          <button className="main__content_left-button">
            Добро пожаловать!
          </button>
        </div>
        <div className="main__content_right"></div>
      </section>
    </main>
  );
};

export default Main;
