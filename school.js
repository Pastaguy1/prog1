const vandaag = new Date();
const huidigeDag = vandaag.getDay();


if(huidigeDag === 0) {
    console.log("zondag dus lekker uitslapen");
} else if (huidigeDag === 6) {
    console.log("Lekker uitslapen het is zaterdag!");
} else {
    console.log("Schooldag, yey");
}   