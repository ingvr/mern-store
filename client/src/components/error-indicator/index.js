import React from "react";

import "./index.scss";

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img
        src="https://media.giphy.com/media/TqiwHbFBaZ4ti/giphy.gif"
        alt="Ошибка!"
        className="error-indicator__image"
      />
      <h2>Ошибка загрузки данных</h2>
      <p>Попробуйте зайти позже</p>
    </div>
  );
};

export default ErrorIndicator;
