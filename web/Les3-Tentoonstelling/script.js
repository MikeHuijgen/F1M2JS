const myimg = document.getElementById("myimg");
const mytitel = document.getElementById("mytitel");
const mydate = document.getElementById("mydate")
const mymus = document.getElementById("mymuseum")
const myplaats = document.getElementById("myplaats")

let paintings = [
"img/painting0.jpg",
"img/painting1.jpg",
"img/painting2.jpg",
"img/painting3.jpg",
"img/painting4.jpg",
"img/painting5.jpg"
]

function changeimg(index)
{
    mytitel.innerHTML = titels[index]
    mydate.innerHTML = mydates[index]
    mymus.innerHTML = mymuss[index]
    myplaats.innerHTML = myplaatss[index]
    myimg.src = paintings[index];
}

let titels = [
    "De schilderijen van van Gogh",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen", 
    "Boerderij in de Provence"
]

let mydates = [
    "Van gogh",
    "november 1888",
    "juni 1889",
    "september 1888",
    "januari 1889",
    "september 1888"
] 

let mymuss = [
    "Van gogh",
    "Pesjkinmuseum ",
    "Museum of Modern Art ",
    "Mus�e d'Orsay ",
    "Neue Pinakothek",
    "National Gallery of Art"
]

let myplaatss = [
    "Van gogh",
    "Moskouw",
    "New York",
    "Parijs",
    "Munchen",
    "Washington D.C."
]