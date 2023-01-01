// function changeImage() {
        //     var image = document.getElementById('headimage');
        //     if (image.src.match("colorbottel")) {
        //         image.src = "./images/PEPSI BLACK (2).png";
        //     }
        //     else if {
        //         image.src = "./images/PEPSI BLUE (2).png";
        //         document. body. style. backgroundColor = '#2E85EE'
        //     }

        //     // var image = this;
        //     // if (this.image.src.match("./images/PEPSI BLUE (2).png")){
        //     //     image.src = "./images/PEPSI ASH (2).png";
        //     //     document. body. style. backgroundColor = 'red'
        //     // }
        //     // else {return};
            
        // }

        
        // function changeImage2() {
        //     let image = document.getElementById('headimage');
        //     if (image.src.match("./images/PEPSI BLUE (2).png")) {
        //         image.src = "./images/PEPSI BLACK (2).png";
        //     }
        //     else {
        //         image.src = "./images/PEPSI ASH (2).png";
        //         document. body. style. backgroundColor = 'red'
        //     }
        // }
    
        

        //  const clickImage2 = document.getElementById('pepp2');
        // clickImage.addEventListener('click', changeFunction);


//         function changeFunction(e)
// {
//     if( document.getElementById("headimage").src == "./images/PEPSI BLACK (2).png" ){
//         document.getElementById("headimage").src = "./images/PEPSI ASH (2).png";
//     }
//     else if( document.getElementById("headimage").src == "./images/PEPSI ASH (2).png" ){
//         document.getElementById("headimage").src = "./images/PEPSI BLUE (2).png";
//     } else { document.getElementById("headimage").src = "./images/PEPSI BLACK (2).png";
    
//     }
// }
        
// const clickImage = document.getElementById('pepp1');
//         clickImage.addEventListener('click', changeFunction);

//         red







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

const blueCan2 = document.getElementById("pep1");
const ashCan2 = document.getElementById("pep2");
const blackCan2 = document.getElementById("pep3");



blueCan.addEventListener('click', changeEvent1);
ashCan.addEventListener('click', changeEvent2);
blackCan.addEventListener('click', changeEvent3);

blueCan2.addEventListener('click', changeEvent1);
ashCan2.addEventListener('click', changeEvent2);
blackCan2.addEventListener('click', changeEvent3);



const openDropdownButton = document.querySelector(".menu-btn.open"),
  closeDropdownButton = document.querySelector(".menu-btn.close");

openDropdownButton.addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.right = "0";
});

closeDropdownButton.addEventListener("click", () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.right = "-400px";
});

