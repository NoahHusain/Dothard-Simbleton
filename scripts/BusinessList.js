import { getBusinesses } from "./database.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".businesses")

const businesses = getBusinesses()

export const BusinessList = () => {
    contentTarget.innerHTML = "<h1>Business List</h1>"

    businesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}


const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
        .addEventListener(
            "keypress",
            keyPressEvent => {
                if (keyPressEvent.charCode === 13) {
                    const input = keyPressEvent.target.value.toLowerCase()

                    const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(input))/** implement .find() method here */

                    companySearchResultArticle.innerHTML = Business(foundBusiness);
                }
        });