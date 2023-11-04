const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Don't count the days; make the days count. - Muhammad Ali",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Life is really simple, but we insist on making it complicated. - Confucius",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    // Add more quotes here
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function displayRandomQuote() {
    const quoteElement = document.getElementById("quote");
    const dateElement = document.getElementById("date");
    const randomQuote = getRandomQuote();
    const shareMessageButton = document.getElementById("share-message");
    const shareTwitterButton = document.getElementById("share-twitter");
    const shareFacebookButton = document.getElementById("share-facebook");

    // Get the current date
    const currentDate = new Date();
    const formattedDate = currentDate.toDateString();

    quoteElement.textContent = randomQuote;
    dateElement.textContent = formattedDate;

    // Share via Message
    shareMessageButton.addEventListener("click", () => {
        const message = `Check out this inspiring quote: ${randomQuote}`;
        if (navigator.share) {
            navigator.share({ title: "Quote of the Day", text: message });
        } else {
            // Fallback for browsers that do not support Web Share API
            alert("To share this quote, use the share functionality in your messaging app.");
        }
    });

    // Share on Twitter
    shareTwitterButton.addEventListener("click", () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(randomQuote)}`;
        window.open(twitterUrl, "_blank");
    });

    // Share on Facebook
    shareFacebookButton.addEventListener("click", () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(facebookUrl, "_blank");
    });
}

const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", displayRandomQuote);

// Initial quote display
displayRandomQuote();
