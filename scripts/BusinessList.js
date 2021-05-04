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
