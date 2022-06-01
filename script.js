/* Menu toggle */

const closeBtn = document.querySelector(".fa-xmark")
const showBtn = document.querySelector(".fa-bars")
const navArea = document.querySelector(".nav-links")

closeBtn.addEventListener("click",() => {
    navArea.style.right = "-50%"
    showBtn.style.color = "#231f20"
})

showBtn.addEventListener("click",() => {
    navArea.style.right = "0"
    showBtn.style.color = "rgb(148, 81, 126, 0.6 )"
})

/* characters area */

const charIcon = document.querySelector(".char-icon")
const charName = document.querySelector(".char-name")
const charQuote = document.getElementById("char-quote")
const charSite = document.querySelector(".char-site")
const charLore = document.querySelector(".char-brief-lore")
const charSection = document.querySelector(".characters")

/* object of characters */ 

const characters = [
    {
        charImage : "./images/LOL-character-images/yasuo/yasuo-char-icon.jpg",
        charName : "The Unforgiven",
        charQuote : "The road to ruin is shorter than you think.",
        charCite : "~ Yasuo",
        charLore : "An Ionian of deep resolve, Yasuo is an agile swordsman who wields the air itself against his enemies. As a proud young man, he was falsely accused of murdering his master—unable to prove his innocence, he was forced to slay his own brother in self defense. Even after his master's true killer was revealed, Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
        charBackgroundImage : "url(./images/LOL-character-images/yasuo/yasuo-banner.png)"
    },
    {
        charImage : "./images/LOL-character-images/akali/akali-char-icon.jpg",
        charName : "The Rogue Assassin",
        charQuote : "The only rule that matters is that your enemies don't walk away.",
        charCite : "~ Akali",
        charLore : "Abandoning the Kinkou Order and her title of the Fist of Shadow, Akali now strikes alone, ready to be the deadly weapon her people need. Though she holds onto all she learned from her master Shen, she has pledged to defend Ionia from its enemies, one kill at a time. Akali may strike in silence, but her message will be heard loud and clear: fear the assassin with no master.",
        charBackgroundImage : "url(images/LOL-character-images/akali/akali-banner.png)"
    },
    {
        charImage : "images/LOL-character-images/kayn/kayn-char-icon.jpg",
        charName : "The Shadow Reaper",
        charQuote : "I learned from a young age to embrace the shadows.",
        charCite : "~ Kayn",
        charLore : "A peerless practitioner of lethal shadow magic, Shieda Kayn battles to achieve his true destiny—to one day lead the Order of the Shadow into a new era of Ionian supremacy. He audaciously wields the sentient darkin weapon Rhaast, undeterred by its creeping corruption of his body and mind. There are only two possible outcomes: either Kayn bends the weapon to his will... or the malevolent scythe consumes him completely, paving the way for the destruction of all Runeterra.",
        charBackgroundImage : "url(./images/LOL-character-images/kayn/kayn-banner.png)"
    },
]

function createCharProfile(){
    characters.forEach(character => {
        const charContainer = document.createElement("div")
        charContainer.classList.add("character-profile")
        charContainer.style.background = `${character.charBackgroundImage} no-repeat center / cover`;
        const charImage = document.createElement("img")
        charImage.classList.add("char-icon") 
        charImage.src = character.charImage
        const charName = document.createElement("h3")
        charName.classList.add("char-name")
        charName.textContent = character.charName
        const blockQuote = document.createElement("blockquote")
        const charPara = document.createElement("p")
        charPara.setAttribute("id", "char-quote")
        charPara.textContent = character.charQuote
        const charCite = document.createElement("cite")
        charCite.classList.add("char-site")
        charCite.textContent = character.charCite
        blockQuote.append(charPara, charCite)
        const charLore = document.createElement("p")
        charLore.classList.add("char-brief-lore")
        charLore.textContent = character.charLore 

        charContainer.append(charImage, charName, blockQuote, charLore)
        charSection.appendChild(charContainer)
    })
}

document.body.addEventListener("DOMContentLoaded", createCharProfile())