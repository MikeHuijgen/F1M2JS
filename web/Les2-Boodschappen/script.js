const fruitvak = document.getElementById('fruit');
const vleesvak = document.getElementById('vlees');

function zetInFruitLa(fruit)
{
    console.log(fruit);

    const nieuwElementFruit = document.createElement('h2');
    nieuwElementFruit.innerHTML = fruit;
    nieuwElementFruit.className = 'groen';
    fruitvak.appendChild(nieuwElementFruit);
}

function zetInVleesLa(vlees)
{
    console.log(vlees);

    const nieuwElementVlees = document.createElement('h2');
    nieuwElementVlees.innerHTML = vlees;
    nieuwElementVlees.className = 'rood';
    vleesvak.appendChild(nieuwElementVlees);
}