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

function showDaysForNewYear() {
  let today = new Date(),
    date = today.getDate(),
    month = today.getMonth(),
    textDomElement = document.querySelector('.info h1');

  if (date === 31 && month === 11) {
    textDomElement.innerHTML = '<span class="days">С новым годом!</span>';  
  } else {
    textDomElement.innerText = getDaysForNewYear();    
  }
}

function startBgAnimation() {
  document.querySelector('.wrapper').className = 'wrapper opacity';
}
document.addEventListener("DOMContentLoaded", showDaysForNewYear);
window.onload = startBgAnimation;