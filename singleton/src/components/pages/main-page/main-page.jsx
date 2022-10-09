import React, { useEffect } from "react";

import Singleton from "../../singleton/singleton";

const singletonObject = new Singleton();

function MainPage() {
  useEffect(() => {
    singletonObject.incSingleton("Главная");
  }, []);

  return (
    <>
      {singletonObject.getSingleton()["Главная"] > 5 && (
        <h2>Не нашли нужных продуктов? Позвоните нам - 88000000</h2>
      )}
      <p> The main page</p>
    </>
  );
}

export default MainPage;
