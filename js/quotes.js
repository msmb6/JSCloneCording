const quotes = [
  {
    quote:
      "할 수 없다 라고 생각하는 동안은 하기 싫다 라고 다짐하는 것이다. 그러므로 그것은 실행되지 않는다.",
    author: "스피노자",
  },
  {
    quote: "성공은 친구를 만들고 역경은 친구를 시험한다.",
    author: "퍼블릴리어스 사이러스",
  },
  {
    quote: "서두르지 말되 멈추지 말라",
    author: "괴테",
  },
  {
    quote: "생각하고 살지 않으면 사는 대로 생각하게 된다.",
    author: "폴 발레리",
  },
  {
    quote: "과거에서 교훈을 얻을 수는 있어도 과거 속에서 살 수는 없다.",
    author: "린든 B. 존슨",
  },
  {
    quote: "내가 생각했던 불행은 그다지 일어나지 않았다.",
    author: "몽테뉴",
  },
  {
    quote: "삶의 의미는 발견하는 것이 아니라 만들어가는 것이다.",
    author: "생텍쥐페리",
  },
  {
    quote:
      "두 사람이 똑같이 창살을 통해서 밖을 내다본다. 한사람은 진흙을 보고 다른 사람은 별을 본다.",
    author: "프레드릭 랭브리지",
  },
  {
    quote: "자신의 뜻대로 할 수 있는 일과 할 수 없는 일을 구별하라.",
    author: "아리스토텔레스",
  },
  {
    quote: "친구란 무엇인가? 두개의 몸에 깃든 하나의 영혼이다.",
    author: "아리스토텔레스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
