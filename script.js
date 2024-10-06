/* Генерация предсказания должна происходить при клике на кнопку «предсказать судьбу» */

/* Заранее заготовь 3-5 предсказаний и в зависимости от того, как лягут карты судьбы (или что скажет Math.random) показывай их пользователю */

/* Подставляй текст нового предсказания в .current-forecast h1 */

/* Показывай процент вероятности, с которым предсказание сбудется — в верстке это .current-forecast p */

/* Данный процент также нужно генерировать автоматически, он может принимать значения от 0 до 100% */

/* Совет: заведи функцию-хелпер, которая будет заниматься только генерацией данных в диапазоне от min до max и используй ее где нужно */

/* При генерации нового предсказания старое предсказание должно добавляться в начало списка «Мои предсказания» — .forecasts  */

/* Для добавления предсказания в список воспользуйся шаблоном forecast-item */

const forecastsList = document.querySelector('.forecasts');
const currentForecast = document.querySelector('.current-forecast');
const forecastButton = document.querySelector('.forecast-btn');
const forecastTemplate = document.querySelector('#forecast-item');
const newForecast = document.querySelector('.current-forecast h1');
const probability = document.querySelector('.current-forecast p');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function makeForecastItemByTemplate(PreviousForecast, PreviousProbability) {
    const forecastItem = forecastTemplate.content.cloneNode(true);
    forecastItem.querySelector('h3').textContent = PreviousForecast;
    forecastItem.querySelector('p').textContent = PreviousProbability;
    return forecastItem;
}

function makeForecast() {
    if (newForecast.textContent !== "") {
        const forecast = makeForecastItemByTemplate(newForecast.textContent, probability.textContent);
        forecastsList.prepend(forecast);
        newForecast.textContent = "";
    }
    let predictionNumber = getRandomInteger(0, 5);
    let predictionText = "";
    switch (predictionNumber) {
        case 0:
            predictionText = "Твои мечты скоро начнут сбываться.";
            break;
        case 1:
            predictionText = "Сегодня вечером тебя ожидает приятный сюрприз!";
            break;
        case 2:
            predictionText = "Возможно, тебе предложат интересный проект.";
            break;
        case 3:
            predictionText = "Тебя ждет удача в ближайшем будущем.";
            break;
        case 4:
            predictionText = "Не упусти возможность, которая появится на горизонте.";
            break;
    }
    newForecast.textContent = predictionText;
    probability.textContent = `Вероятность: ${getRandomInteger(0, 100)}%`;
    currentForecast.append(newForecast);
    currentForecast.append(probability);
}

forecastButton.addEventListener("click", makeForecast);