// массивы слов
let randomGreetings = ["Дима, поздравляю тебя с Днём рождения", "Дима, надень штаны, я тебя тут поздравляю вообще-то", "Да просто с др", "Я хз какое ещё начало поздравления придумать"];
let randomWishes = ["желаю мноооогоооо всегоооо", "пусть в жизни всегда будет место для самого"];
let randomAdjectives = ["хуёвого(если не женишься на Дане)", "счастливого", "програмнообеспеченного", "незабываемого", "пиздатого(это будет только если женишься на Дане)"];
let randomAdditions = ["это тот самый день, в который я напоминаю тебе о самом главном подарке твоей жизни - о Дане", "ладно, это не только тот самый день, когда я напоминаю тебе о Дане, но ещё напоминаю её не обижать!"];

// выбираем случайное слово из массива
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// собираем поздравление
function generateGreetingText() {
  let greeting = getRandom(randomGreetings) + "! " +
                 getRandom(randomWishes) + " " +
                 getRandom(randomAdjectives) + ", " +
                 "а ещё " + getRandom(randomAdditions) + "!";
  return greeting;
}

// элементы
const startBtn = document.querySelector(".js-start");
const againBtn = document.querySelector(".js-again");
const greetingEl = document.querySelector(".js-greeting");

// эффект печати
function typeText(text, element, callback) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(type, 50);
    } else if (callback) {
      callback();
    }
  }
  type();
}

function showGreeting() {
  const text = generateGreetingText();

  // показываем элемент, если он скрыт
  greetingEl.style.display = "block";
  setTimeout(() => greetingEl.classList.add("show"), 10);

  typeText(text, greetingEl, () => {
    againBtn.hidden = false;
  });
}

// события
startBtn.addEventListener("click", () => {
  startBtn.style.opacity = "0";
  startBtn.style.transform = "scale(0.9)";
  setTimeout(() => {
    startBtn.hidden = true;
    showGreeting();
  }, 300);
});

againBtn.addEventListener("click", () => {
  againBtn.hidden = true;
  showGreeting();
});
