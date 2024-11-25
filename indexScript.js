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
        description:"Application to manage sales, generate bills for customer and track inventory."
    },
    {
        img:"./assets/productsIcon/clientopiaIcon.png",
        title:"clientopia",
        description:"Software Suit to manage contacts, sales, support tickets, tasks, approvals, feedback and more."
    },
    {
        img:"./assets/productsIcon/ticketdaIcon.png",
        title:"ticketsda",
        description:"Ticket booking app."
    }
]

highlightsData = [];

highlightsData = [
    {
        img:"./assets/icons/support.png",
        title:"Dedicated Support",
        description:"A deticated technical specialist will be assigned to all paid plans. Along with community support.",
        bgColor:"#E7F3F8"
    },
    {
        img:"./assets/icons/coding.png",
        title:"Experienced Developers",
        description:"All our products are developed by industry experts. Making it robust and reliable.",
        bgColor:"#fbf3db"
    },
    {
        img:"./assets/icons/Card.png",
        title:"Tranparent Billing",
        description:"Contact us to get a transparent quote. All bill includes tax. No hidden charges.",
        bgColor:"#EDF3EC"
    },
    // {
    //     img:"./assets/images/developerCoding.png",
    //     title:"Developer",
    //     description:"With all our paid plans you get deticated support. A team of skillful developers and specialist will be assigned to your profile.",
    //     bgColor:"#FDEBEC"
    // },
]

let primaryRightSide = document.querySelector(".primaryRightSide");


productsData.map((data)=>{
    let productCard = `
    <a href="#">
    <div class="productCard">
        <div class="productCardImg">
            <img src=${data.img} alt="App Icon">
        </div>
        <div class="productCardDetails">
            <h2>${data.title}</h2>
            <p>${data.description}</p>
        </div>
    </div>
    </a>
    `

    primaryRightSide.innerHTML += productCard
    
})

let primaryleftHighlights = document.querySelector(".primaryleftHighlights");

highlightsData.map((data) => {
    let highlightsCard = document.createElement("div");
    highlightsCard.classList.add("highlightsCard")
    highlightsCard.innerHTML = `
        <div class="imgContainer">
            <img src=${data.img} alt="Dedicated Support">
        </div>
        <h3>${data.title}</h3>
        <p class="highlightsCardDescription">${data.description}</p>
    `

    highlightsCard.style.backgroundColor = data.bgColor

    primaryleftHighlights.append(highlightsCard);
})

function handleStartFree(){
    window.location.href = "./pages/contact/contact.html"
}