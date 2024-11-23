
let productsData = [];

productsData = [
    {
        img:"./assets/productsIcon/edinPortIcon.png",
        title:"edinport",
        description:"A cloud app that links education institutions, students and employers."
    },
    {
        img:"./assets/productsIcon/godIcon.png",
        title:"Game Of Domination",
        description:"Application to book playground, participate and create tournaments."
    },
    {
        img:"./assets/productsIcon/billKraftIcon.png",
        title:"billkraft",
        description:"Application to book playground, participate and create tournaments."
    },
    {
        img:"./assets/productsIcon/clientopiaIcon.png",
        title:"clientopia",
        description:"Application to book playground, participate and create tournaments."
    },
    {
        img:"./assets/productsIcon/ticketdaIcon.png",
        title:"ticketsda",
        description:"Application to book playground, participate and create tournaments."
    }
]

console.log(productsData);

let primaryRightSide = document.querySelector(".primaryRightSide");


productsData.map((data)=>{
    let productCard = `
    <div class="productCard">
        <div class="productCardImg">
            <img src=${data.img} alt="App Icon">
        </div>
        <div class="productCardDetails">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        </div>
    </div>
    `
    console.log(productCard);

    primaryRightSide.innerHTML += productCard
    
})

console.log(primaryRightSide)