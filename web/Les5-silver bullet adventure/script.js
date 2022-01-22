const myTitle = document.getElementById("myTitle");
const myImg = document.getElementById("myImg");
const myInput = document.getElementById("myInput");


let directionButtons = {
    "noord" : document.getElementById("knopNoord"),
    "west" : document.getElementById("knopWest"),
    "oost" :  document.getElementById("knopOost"),
    "zuid" : document.getElementById("knopZuid")
}

let current_index = 0;

let lokaties =
[
    {
        "titel":"plaats 0",
        "img":"img/0.jpg",
        "directions" :{
            "zuid" : 1
        }
    }, 
    {
        "titel":"plaats 1",
        "img":"img/1.jpg",
        "directions" :{
            "noord" : 0,
            "zuid" : 4,
            "west" : 2,
            "oost" : 5
        }
    },
    {
        "titel":"plaats 2",
        "img":"img/2.jpg",
        "directions" :{
            "zuid" : 3,
            "oost" : 1
        }
    }, 
    {
        "titel":"plaats 3",
        "img":"img/3.jpg",
        "directions" :{
            "noord" : 2
        }
    }, 
    {
        "titel":"plaats 4",
        "img":"img/4.jpg",
        "directions" :{
            "noord" : 1
        }
    }, 
    {
        "titel":"plaats 5",
        "img":"img/5.jpg",
        "directions" :{
            "west" : 1,
            "oost" : 6,
            "noord" : 10
        }
    }, 
    {
        "titel":"plaats 6",
        "img":"img/6.jpg",
        "directions" :{
            "zuid" : 11,
            "west" : 5,
            "oost" : 7
        }
    }, 
    {
        "titel":"plaats 7",
        "img":"img/7.jpg",
        "directions" :{
            "zuid" : 8,
            "noord" : 9,
            "west" : 6
        }
    }, 
    {
        "titel":"plaats 8",
        "img":"img/8.jpg",
        "directions" :{
            "noord" : 7
        }
    }, 
    {
        "titel":"plaats 9",
        "img":"img/9.jpg",
        "directions" :{
            "zuid" : 7,
            "west" : 10
        }
    }, 
    {
        "titel":"plaats 10",
        "img":"img/10.jpg",
        "directions" :{
            "zuid" : 5,
            "oost" : 9
        }
    }, 
    {
        "titel":"plaats 11",
        "img":"img/11.jpg",
        "directions" :{
            "noord" : 6
        }
    },  

]

function show(index){
    myTitle.innerHTML = lokaties[index].titel;
    myImg.src = lokaties[index].img;
    current_index = index;

    //knoppen berekenen
    updateDirections();
}

function updateDirections(){
    let possible = lokaties[current_index].directions;

    let possible_keys = Object.keys(possible);

    let buttons_keys = Object.keys(directionButtons);

    for(const key of buttons_keys){
        directionButtons[key].style.visibility = "hidden";
    }

    for(const key of possible_keys){
        directionButtons[key].style.visibility = "visible";
    }
}

function getInput(){
    show(myInput.value);
    myInput.value = "";
    myInput.focus();
}

function GoDirection(richting){
    let punt_index = lokaties[current_index].directions[richting];
    show(punt_index);
}

show(0);
