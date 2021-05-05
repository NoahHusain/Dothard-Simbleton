import { getBusinesses } from "./database.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".businessList--newYork")

const businesses = getBusinesses()

export const NewYorkList = () => {

    const filteredNewYorkBusinesses = businesses.filter( business => business.addressStateCode === "NY")

    contentTarget.innerHTML = "<h1>New York Business List</h1>"

    filteredNewYorkBusinesses.forEach(business => contentTarget.innerHTML += Business(business))
 
}
