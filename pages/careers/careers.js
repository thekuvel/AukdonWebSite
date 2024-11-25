
let bgColors = ["#E7F3F8", "#fbf3db", "#EDF3EC", "#FDEBEC"]

let careersData = [];

careersData = [
    {
        title:"Junior Full Stack Developer - MERN",
        description:`MERN full stack developer.<br>
        Should have practical knowledge or certification.<br>
        A portfolio project is mandatory to showcase.<br>
        Any degree except mechanical and civil.
        `,
        location: "Chennai - Hybrid",
        salary: "240000"
    },
    {
        title:"Technical Specialist - Intern",
        description:"Interest to learn new application and support users and developers. Any degree.",
        location: "Chennai - Hybrid",
        salary: "120000"
    },
    {
        title:"Accountant",
        description:"Accountant with minimum 2 years of experience.",
        location: "Chennai - Hybrid",
        salary: "240000"
    },
    {
        title:"Marketing specialist - Intern",
        description:"Strong knowlwdge in marketing and relevent degree.",
        location: "Chennai - Hybrid",
        salary: "120000"
    }
]

let careersContainer = document.querySelector(".careersContainer");


careersData.map((data, index)=>{
    let jobCard = document.createElement("div");
    jobCard.classList.add("jobCard")
    jobCard.href = "#";
    jobCard.innerHTML = `
    <div class="productInfoCard">
        <h2>${data.title}</h2>
        <p>${data.description}</p>
        <p>Location: ${data.location}</p>
        <p>Salary: ${data.salary}</p>
    </div>
    `

    let i = index

    if(index > bgColors.length-1){
        if(index % bgColors.length === 0){
            console.log(index)
            i = 0;
        }else{
            i = (index - (bgColors.length*Math.floor(index/bgColors.length)));
        }
    }

    jobCard.style.backgroundColor = bgColors[i];

    careersContainer.append(jobCard);
    
})