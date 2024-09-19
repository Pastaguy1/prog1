const vandaag = new Date();
const huidigeDag = vandaag.getDay();

if(huidigeDag == 0 || huidigeDag == 6 ) {
    console.log("weekend dus lekker uitslapen");
}  else {
       console.log("Schooldag, yey");
}   