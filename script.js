
// Header

let companyDropDown = document.querySelector(".companyDropDown");
let companyDropDownList = document.querySelector(".companyDropDown .list");
companyDropDownList.style.display = "none";

companyDropDown.addEventListener("click", () => {
    if(companyDropDownList.style.display == "none"){
        companyDropDownList.style.display = "block";
    }else{
        companyDropDownList.style.display = "none";
    }
})