const quotes = [
    {
        quote: "Let off some steam, Bennett.",
        movie: "Commando (1985)"
    },
    {
        quote: "You're fired.",
        movie: "True Lies (1994)"
    },
    {
        quote: "Consider that a divorce.",
        movie: "Total Recall (1990)"
    },
    {
        quote: "Get to the chopper!",
        movie: "Predator (1987)"
    },
    {
        quote: "Hasta la vista, baby.",
        movie: "Terminator 2 : Judgement Day (1991)"
    },
    {
        quote: "I'll be back.",
        movie: "Terminator (1984)"
    },
    {
        quote: "Come with me if you want to live.",
        movie: "Terminator 2 : Judgement Day (1991)"
    },
    {
        quote: "I need your clothes, your boots and your motorcycle.",
        movie: "Terminator 2 : Judgement Day (1991)"
    },
    {
        quote: "I know now why you cry.",
        movie: "Terminator 2 : Judgement Day (1991)"
    },
    {
        quote: "I need a vacation.",
        movie: "Terminator 2 : Judgement Day (1991)"
    }
]

const quote = document.querySelector("#quote span:first-child");
const movie = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
movie.innerText = todaysQuote.movie;

