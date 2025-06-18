document.addEventListener('DOMContentLoaded', function() {
      const revealOnScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      for (const el of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    const navMenu = [
      {href : "#thesis", name: "Теза"},
      {href : "#arguments", name: "Аргументи"},
      {href : "#example", name : "Приклад"},
      {href : "#conclusion", name : "Висновок"},
      {href : "#call", name : "Заклик"},
    ];

    const thoughts = [
      "Любов вимагає жертви. Кожна щира любов — батьківська, подружня, братерська — включає в себе моменти, коли ти добровільно обираєш слабкість. Мама, яка не їсть, щоб нагодувати дитину, чи хлопець, який відмовляється від кар’єрного шансу, щоб залишитися біля хворої мами — це сила, прихована в доброті й вірності.",
      "Ісус Христос — зразок справжньої сили. Його шлях на хрест був добровільним. Він мав силу творити чудеса, зцілювати, командувати природою. Але найбільше диво — це Його мовчазна згода прийняти біль, приниження й смерть, щоб дати життя нам. Слабкість на хресті — це вершина сили любові.",
      "Вміння жити для інших — вияв зрілості. У сучасному світі часто під силу розуміють егоїзм. Але найсильніші — це ті, хто служить. Медсестра, що рятує життя, учитель, який ночами перевіряє зошити, військовий, що став на захист — усі вони сильні, бо відмовилися від комфорту заради інших."
    ];

    const container = document.getElementById("texts-container");
    thoughts.forEach(text => {
      const div = document.createElement("div");
      div.className = "reveal bg-white p-10 rounded-xl shadow-sm mx-8 sm:mx-96 my-20 text-2xl sm:text-3xl text-gray-800";
      div.textContent = text;
      container.appendChild(div);
    });

    const listItem = document.getElementById("listItem");
    listItem.innerHTML = ""; // очищення перед додаванням
    navMenu.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "m-[9px] sm:m-[40px] text-2xl sm:text-4xl my-[10px] sm:my-[40px] font-semibold cursor-pointer";
      a.href = `${item.href}`;
      a.textContent = item.name;
      li.appendChild(a);
      listItem.appendChild(li);
    });

    const listItemMobile = document.getElementById("listItemMobile");
    listItemMobile.innerHTML = ""; // очищення перед додаванням
    navMenu.forEach(item => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "text-4xl font-semibold cursor-pointer";
      a.href = `${item.href}`;
      a.textContent = item.name;
      li.appendChild(a);
      listItemMobile.appendChild(li);
    });

    const translations = {
      ua: {
        navThesis: "Теза",
        navArguments: "Аргументи",
        navExample: "Приклад",
        navConclusion: "Висновок",
        navCall: "Заклик",
        thesis: "Справжня сила — це добровільна слабкість заради іншого.",
        argumentsTitle: "Аргументи",
        argumentsTexts: [
          "Любов вимагає жертви. Кожна щира любов — батьківська, подружня, братерська — включає в себе моменти, коли ти добровільно обираєш слабкість. Мама, яка не їсть, щоб нагодувати дитину, чи хлопець, який відмовляється від кар’єрного шансу, щоб залишитися біля хворої мами — це сила, прихована в доброті й вірності.",
          "Ісус Христос — зразок справжньої сили. Його шлях на хрест був добровільним. Він мав силу творити чудеса, зцілювати, командувати природою. Але найбільше диво — це Його мовчазна згода прийняти біль, приниження й смерть, щоб дати життя нам. Слабкість на хресті — це вершина сили любові.",
          "Вміння жити для інших — вияв зрілості. У сучасному світі часто під силу розуміють егоїзм. Але найсильніші — це ті, хто служить. Медсестра, що рятує життя, учитель, який ночами перевіряє зошити, військовий, що став на захист — усі вони сильні, бо відмовилися від комфорту заради інших."
        ],
        exampleTitle: "Приклад",
        exampleText: "У багатодітній сім’ї батько працює на двох роботах, повертається вночі, не дозволяє собі відпочинку, щоб його діти мали їжу, одяг і навчання. Хтось скаже — він втомлений і виснажений. Але в Божих очах він — герой, тому що його добровільна жертва — це сила любові в дії.",
        conclusionTitle: "Висновок",
        conclusionText: "Справжня сила — це не вміння перемагати інших, а вміння перемагати себе. Це сила змовчати, коли хочеш вигукнути. Сила пробачити, коли серце палає від образи. Сила віддати останнє, коли й самому важко. Такої сили не побачиш на перших шпальтах, але саме вона тримає сім’ї, народи й цілий світ.",
        callTitle: "Заклик",
        callText: "Будь сильним не у владі, а в любові. Вчися поступатися, підтримувати, бути поруч, навіть коли це важко. Обирай не легкий шлях, а правильний. І проси в Бога сили — не для того, щоб ставити себе вище, а щоб ставити інших перед собою."
      },
      en: {
        navThesis: "Thesis",
        navArguments: "Arguments",
        navExample: "Example",
        navConclusion: "Conclusion",
        navCall: "Call to action",
        thesis: "True strength is voluntary weakness for the sake of others.",
        argumentsTitle: "Arguments",
        argumentsTexts: [
          "Love requires sacrifice. Every sincere love — parental, spousal, brotherly — includes moments when you voluntarily choose weakness. A mother who does not eat to feed her child, or a young man who refuses a career opportunity to stay with a sick mother — that is strength hidden in kindness and loyalty.",
          "Jesus Christ is the example of true strength. His path to the cross was voluntary. He had the power to perform miracles, heal, command nature. But the greatest miracle was His silent consent to accept pain, humiliation, and death to give us life. Weakness on the cross is the pinnacle of the power of love.",
          "The ability to live for others is a sign of maturity. In today's world, strength is often understood as selfishness. But the strongest are those who serve. A nurse who saves lives, a teacher who checks notebooks at night, a soldier who defends — all are strong because they gave up comfort for the sake of others."
        ],
        exampleTitle: "Example",
        exampleText: "In a large family, the father works two jobs, comes home at night, denies himself rest so that his children have food, clothing, and education. Someone might say — he is tired and exhausted. But in God's eyes, he is a hero because his voluntary sacrifice is the power of love in action.",
        conclusionTitle: "Conclusion",
        conclusionText: "True strength is not the ability to defeat others but the ability to conquer yourself. It is the strength to be silent when you want to shout. The strength to forgive when your heart burns with resentment. The strength to give the last when you yourself are struggling. Such strength is not seen on the front pages, but it is what holds families, nations, and the whole world.",
        callTitle: "Call to action",
        callText: "Be strong not in power but in love. Learn to yield, support, be near even when it is difficult. Choose not the easy path but the right one. And ask God for strength — not to put yourself above others, but to put others before yourself."
      }
    };

    function setLanguage(lang) {
      document.querySelector('a[href="#thesis"]').textContent = translations[lang].navThesis;
      document.querySelector('a[href="#arguments"]').textContent = translations[lang].navArguments;
      document.querySelector('a[href="#example"]').textContent = translations[lang].navExample;
      document.querySelector('a[href="#conclusion"]').textContent = translations[lang].navConclusion;
      document.querySelector('a[href="#call"]').textContent = translations[lang].navCall;

      document.getElementById('thesis').textContent = translations[lang].thesis;
      document.getElementById('arguments').textContent = translations[lang].argumentsTitle;

      const container = document.getElementById('texts-container');
      container.innerHTML = '';
      translations[lang].argumentsTexts.forEach(text => {
        const div = document.createElement('div');
        div.className = "reveal bg-white p-5 sm:p-10 rounded-xl shadow-sm mx-8 sm:mx-96 my-10 text-2xl sm:text-3xl text-gray-800";
        div.textContent = text;
        container.appendChild(div);
      });

      document.getElementById('example').textContent = translations[lang].exampleTitle;
      document.querySelector('#example + div').textContent = translations[lang].exampleText;

      document.getElementById('conclusion').textContent = translations[lang].conclusionTitle;
      document.querySelector('#conclusion + div').textContent = translations[lang].conclusionText;

      document.getElementById('call').textContent = translations[lang].callTitle;
      document.querySelector('#call + div').textContent = translations[lang].callText;

      updateBurgerMenuLanguage(lang);

      // Після оновлення меню, потрібно перевісити обробники для мобільного меню
      const mobileMenu = document.getElementById('mobileMenu');
      mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      header.classList.remove('header--hidden'); // показуємо хедер
      document.body.style.overflow = '';
    });
  });
    }

    function updateBurgerMenuLanguage(lang) {
      const listItemMobile = document.getElementById("listItemMobile");
      listItemMobile.innerHTML = ""; // очищення перед додаванням
      const navMenuTranslations = [
        { href: "#thesis", name: translations[lang].navThesis },
        { href: "#arguments", name: translations[lang].navArguments },
        { href: "#example", name: translations[lang].navExample },
        { href: "#conclusion", name: translations[lang].navConclusion },
        { href: "#call", name: translations[lang].navCall },
      ];

      navMenuTranslations.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.className = "text-4xl font-semibold cursor-pointer";
        a.href = `${item.href}`;
        a.textContent = item.name;
        li.appendChild(a);
        listItemMobile.appendChild(li);
      });
    }

    document.querySelectorAll('button[data-lang]').forEach(button => {
      button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage('ua');
updateBurgerMenuLanguage('ua');

// === Header hide/show on scroll ===
let lastScrollY = window.scrollY;
const header = document.querySelector('header');
let ticking = false;

function handleHeaderOnScroll() {
  if (!header) return; // захист від помилок
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        header.classList.add('header--hidden');
      } else {
        header.classList.remove('header--hidden');
      }
      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
}
window.addEventListener('scroll', handleHeaderOnScroll);

// === Burger menu logic ===
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');

if (menuBtn && mobileMenu && header) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    header.classList.add('header--hidden'); // ховаємо хедер
    document.body.style.overflow = 'hidden';
  });
}
if (closeBtn && mobileMenu && header) {
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    header.classList.remove('header--hidden'); // показуємо хедер
    document.body.style.overflow = '';
  });
}
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    header.classList.remove('header--hidden'); // показуємо хедер
    document.body.style.overflow = '';
  });
});
    });