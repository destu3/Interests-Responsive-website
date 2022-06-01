/* Menu toggle */

const closeBtn = document.querySelector(".fa-xmark")
const showBtn = document.querySelector(".fa-bars")
const navArea = document.querySelector(".nav-links")
const nextBtn = document.querySelector(".next-btn")
const prevBtn = document.querySelector(".prev-btn")

closeBtn.addEventListener("click",() => {
    navArea.style.right = "-50%"
    showBtn.style.color = "#231f20"
})

showBtn.addEventListener("click",() => {
    navArea.style.right = "0"
    showBtn.style.color = "rgb(148, 81, 126, 0.6 )"
})

/* character view */

/* next and prev button functionality */ 

const charIcon = document.querySelector(".char-icon")
const charName = document.querySelector(".char-name")
const charQuote = document.getElementById("char-quote")
const charSite = document.querySelector(".char-site")
const charLore = document.querySelector(".char-brief-lore")
const charBackgroundImage = document.querySelector(".character-profile")

/* object of characters */ 

const characters = [
    {
        charImage : "./images/LOL-character-images/yone-char-image.jpg",
        charName : "Yone - The Unforgotten",
        charQuote : "One blade carries the weight of my past. The other, holds the key to my future...",
        charSite : "~ Yone",
        charLore : "In life, he was Yone—half-brother of Yasuo, and renowned student of his village's sword school. But upon his death at the hands of his brother, he found himself hunted by a malevolent entity of the spirit realm, and was forced to slay it with its own sword. Now, cursed to wear its demonic mask upon his face, Yone tirelessly hunts all such creatures in order to understand what he has become.",
        charBackgroundImage : "url(./images/LOL-character-images/yone-banner.png)"
    },
    
    {
        charImage : "./images/LOL-character-images/yasuo/yasuo-char-icon.jpg",
        charName : "Yasuo - The Unforgiven",
        charQuote : "The road to ruin is shorter than you think.",
        charSite : "~ Yasuo",
        charLore : "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
        charBackgroundImage : "url(./images/LOL-character-images/yasuo/yasuo-banner.png"
    },
]