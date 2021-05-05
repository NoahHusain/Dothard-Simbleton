import { getBusinesses } from "./database.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".businessList--manufacturing")

const businesses = getBusinesses()

export const ManufacturerList = () => {

    const filteredNewYorkBusinesses = businesses.filter( business => business.companyIndustry === "Manufacturing")

    contentTarget.innerHTML = "<h1>Manufacturer Business List</h1>"

    filteredNewYorkBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
 
}
