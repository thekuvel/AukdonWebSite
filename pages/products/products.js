let productsData = [];

productsData = [
    {
        img:"../../assets/productsIcon/edinPortIcon.png",
        title:"edinport",
        description:"A cloud app that links education institutions, students and employers.",
        bgColor:"#E7F3F8"
    },
    {
        img:"../../assets/productsIcon/godIcon.png",
        title:"Game Of Domination",
        description:"Application to book playground, participate and create tournaments.",
        bgColor:"#fbf3db"
    },
    {
        img:"../../assets/productsIcon/billKraftIcon.png",
        title:"billkraft",
        description:"Application to manage sales, generate bills for customer and track inventory.",
        bgColor:"#EDF3EC"
    },
    {
        img:"../../assets/productsIcon/clientopiaIcon.png",
        title:"clientopia",
        description:"Software Suit to manage contacts, sales, support tickets, tasks, approvals, feedback and more.",
        bgColor:"#FDEBEC"
    },
    {
        img:"../../assets/productsIcon/ticketdaIcon.png",
        title:"ticketsda",
        description:"Ticket booking app.",
        bgColor:"#E7F3F8"
    }
]

let productsContainer = document.querySelector(".productsContainer");


productsData.map((data)=>{
    let productCard = document.createElement("a");
    productCard.href = "#";
    productCard.innerHTML = `
    <div class="productInfoCard">
        <div class="productCardImg">
            <img src=${data.img} alt="App Icon">
        </div>
        <div class="productCardDetails">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        </div>
    </div>
    `
    productCard.style.backgroundColor = data.bgColor

    productsContainer.append(productCard)
    
})