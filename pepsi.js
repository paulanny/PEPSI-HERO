function changeEvent1() {
    document.getElementById("headimage").src="./images/PEPSI BLUE (2).png";
    document. body. style. backgroundColor = ' #0062be '
}


function changeEvent2() {
    document.getElementById("headimage").src="./images/PEPSI ASH (2).png";
    document. body. style. backgroundColor = '#e60c2c '
}


function changeEvent3() {
   if ( document.getElementById("headimage").src !=="./images/PEPSI BLACK (2).png") {
    document.getElementById("headimage").src ="./images/PEPSI BLACK (2).png"
    document. body. style. backgroundColor = '#1e1e1e' }
}

const blueCan = document.getElementById("pepp1");
const ashCan = document.getElementById("pepp2");
const blackCan = document.getElementById("pepp");


blueCan.addEventListener('click', changeEvent1);
ashCan.addEventListener('click', changeEvent2);
blackCan.addEventListener('click', changeEvent3);

