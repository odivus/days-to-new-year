// Пример Сколько осталось дней до Нового года. Флэнаган стр. 792
function getDaysForNewYear() {
  let today = new Date(), // Запомнить сегодняшнюю дату
    newYear = new Date(),
    difference;

  newYear.setMonth(11); // Установить месяц Декабрь
  newYear.setDate(31); // Установить число

  if (today.getTime() < newYear.getTime()) {
    difference = newYear.getTime() - today.getTime(); // результат в миллисекундах
    difference = Math.floor(difference / (1000 * 60 * 60 * 24));
  }
  return difference;
};

document.querySelector('.days').innerText = getDaysForNewYear();    