(function () {
  'use strict';
  // Пример Сколько осталось дней до Нового года. Флэнаган стр. 792
  function getDaysForNewYear() {
    let today = new Date(), // Запомнить сегодняшнюю дату
      newYear = new Date(),
      difference;

    newYear.setMonth(11); // Установить месяц Декабрь
    newYear.setDate(31); // Установить число
    //console.log(newYear.getTime());
    //console.log(today.getTime());

    if (newYear.getTime() === today.getTime()) return null;

    if (today.getTime() < newYear.getTime()) {
      difference = newYear.getTime() - today.getTime(); // результат в миллисекундах
      difference = Math.floor(difference / (1000 * 60 * 60 * 24));
      return difference;
    }
  };

  function num2str(n) {
    let n1, text_forms;
    n = Math.abs(n) % 100;
    n1 = n % 10;
    text_forms = ['день', 'дня', 'дней'];

    if (n > 10 && n < 20) {
      return text_forms[2];
    }

    if (n1 > 1 && n1 < 5) {
      return text_forms[1];
    }

    if (n1 == 1) {
      return text_forms[0];
    }

    return text_forms[2];
  }

  function showDaysForNewYear() {
    let days = getDaysForNewYear();
    let textDomElement = document.querySelector('.info h1');

    if (!days) {
      textDomElement.innerHTML = '<span class="days">С новым годом!</span>';
    } else {
      textDomElement.innerHTML = `До&nbsp;нового года<span class="days"> ${days}</span>&nbsp;${num2str(days)}`;
    }
  }

  function startBgAnimation() {
    document.querySelector('.wrapper').className = 'wrapper animationWrapper';
  }

  document.addEventListener("DOMContentLoaded", showDaysForNewYear);
  window.onload = startBgAnimation;
})();