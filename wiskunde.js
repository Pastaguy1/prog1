function berekenInhoud(lengte, hoogte, diepte) {
    return lengte * hoogte * diepte;
}

let kubusInhoud = berekenInhoud(10, 5, 10);
console.log(kubusInhoud);

function berekenCilinderInhoud(diameter, hoogte) {
    const radius = diameter / 2;
    const pi = Math.PI;
    return Math.pow(radius, 2) * pi * hoogte;
}

let cilinderInhoud = berekenCilinderInhoud(10, 5);
console.log(cilinderInhoud); 

function berekenHypotenusa(lengte, hoogte) {
    return Math.sqrt(Math.pow(lengte, 2) + Math.pow(hoogte, 2));
}

let langeZijde = berekenHypotenusa(3, 4);
console.log(langeZijde);

function berekenGemiddelde(getallen) {
    let som = getallen.reduce((acc, curr) => acc + curr, 0);
    return som / getallen.length;
}

let gemiddelde = berekenGemiddelde([10, 20, 30, 40, 50, 60, 70]);
console.log(gemiddelde);