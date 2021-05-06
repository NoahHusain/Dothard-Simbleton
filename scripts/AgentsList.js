import { getBusinesses } from "./database.js";
import { Agents } from "./AgentsHTML.js";

const contentTarget = document.querySelector(".agents")

const businesses = getBusinesses()

export const agentList = () => {

    const agentList = businesses.map( business => {
        return {
        fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast} `,
        company: business.companyName,
        phone: business.phoneWork
        }
    }
    )

    contentTarget.innerHTML = "<h1>Agent List</h1>"

    agentList.forEach(agent => contentTarget.innerHTML += Agents(agent))
 
}
