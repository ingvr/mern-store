import React from 'react';

import './index.scss';

const ErrorIndicator = () => {
	return (
		<div className="error-indicator">
			<h2>Ошибка загрузки данных</h2>
			<img src="https://media.giphy.com/media/mq5y2jHRCAqMo/giphy.gif" alt="Ошибка!"
						className="error-indicator__image" />
		</div>
	);
};

export default ErrorIndicator;