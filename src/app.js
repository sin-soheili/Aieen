function getLocalStorage() {
    let count = localStorage.getItem("count");
    if (count === null) {
      localStorage.setItem("count", "0");
      count = "0";
    }
  
    return Number(count);
  }
  
  function incrementCounter() {
    let count = getLocalStorage();
    count++;
    localStorage.setItem("count", count); 
    document.getElementById("counter").textContent = count;
  }
  
  function resetCounter() {
    localStorage.setItem("count", "0");
    let count = getLocalStorage();
    document.getElementById("counter").textContent = count;
  }
  

const surahs = [
  {
    text: "« فَإِنَّ مَعَ الْعُسْرِ یُسْرًا »",
    detail: "سوره الشرح، آیه ۶",
  },
  {
    text: "« وَإِذَا مَرِضْتُ فَهُوَ یَشْفِینِ »",
    detail: "سوره الشعراء، آیه ۸۰",
  },
  {
    text: "« إِنَّ اللَّهَ مَعَ الصَّابِرِینَ »",
    detail: "سوره البقره، آیه ۱۵۳",
  },
  {
    text: "« وَرَحْمَتِی وَسِعَتْ کُلَّ شَیْءٍ »",
    detail: "سوره الأعراف، آیه ۱۵۶",
  },
  {
    text: "« وَمَنْ یَتَّقِ اللَّهَ یَجْعَلْ لَهُ مَخْرَجًا »",
    detail: "سوره الطلاق، آیه ۲",
  },
  {
    text: "« رَبِّ اشْرَحْ لِی صَدْرِی »",
    detail: "سوره طه، آیه ۲۵",
  },
  {
    text: "« إِنَّ اللَّهَ لَا یُغَیِّرُ مَا بِقَوْمٍ حَتَّی یُغَیِّرُوا مَا بِأَنْفُسِهِمْ »",
    detail: "سوره الرعد، آیه ۱۱",
  },
  {
    text: "« لَا تَقْنَطُوا مِنْ رَحْمَةِ اللَّهِ »",
    detail: "سوره الزمر، آیه ۵۳",
  },
  {
    text: "« وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِیعًا وَلَا تَفَرَّقُوا »",
    detail: "سوره آل‌عمران، آیه ۱۰۳",
  },
  {
    text: "« إِنَّ مَعَ الْعُسْرِ یُسْرًا »",
    detail: "سوره الشرح، آیه ۵",
  },
  {
    text: "« وَهُوَ مَعَکُمْ أَیْنَ مَا کُنْتُمْ »",
    detail: "سوره الحدید، آیه ۴",
  },
  {
    text: "« یَا أَیُّهَا الَّذِینَ آمَنُوا اذْکُرُوا اللَّهَ ذِکْرًا کَثِیرًا »",
    detail: "سوره الأحزاب، آیه ۴۱",
  },
  {
    text: "« أَلَا بِذِکْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ »",
    detail: "سوره الرعد، آیه ۲۸",
  },
  {
    text: "« إِنَّ اللَّهَ یُحِبُّ الْمُتَوَکِّلِینَ »",
    detail: "سوره آل‌عمران، آیه ۱۵۹",
  },
];

function showRandomSurah() {
  const randomIndex = Math.floor(Math.random() * surahs.length);
  const surah = surahs[randomIndex];

  document.getElementById("text").textContent = surah.text;
  document.getElementById("detail").textContent = surah.detail;
}

function changeBackground() {
  let urls = [
    '../assets/images/1.jpg',
    '../assets/images/2.jpg',
    '../assets/images/3.jpg',
    '../assets/images/4.jpg',
  ]
  let randomIndex = Math.floor(Math.random() * urls.length);
  let image = urls[randomIndex]
  document.body.style.backgroundImage = `url('${image}')`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundRepeat = "no-repeat";
}