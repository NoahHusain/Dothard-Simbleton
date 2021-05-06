import { Agents } from "./AgentsHTML.js"
import { getBusinesses } from "./database.js"


const agentSearchResultArticle = document.querySelector(".foundAgents")


document.querySelector("#agentFirstNameSearch").addEventListener("keypress", keyPressEvent => {
    if(keyPressEvent.charCode === 13) {
        const businesses = getBusinesses()

        const input = keyPressEvent.target.value.toLowerCase()

        const findAgentsBusiness = businesses.find(business => 
            business.purchasingAgent.nameFirst.toLowerCase().includes(input) ||
            business.purchasingAgent.nameLast.toLowerCase().includes(input))

        const foundAgent = FindAgent(findAgentsBusiness)

        const agentInfo = Agents(foundAgent)

        agentSearchResultArticle.innerHTML = agentInfo
    }
})




export const FindAgent = (agentsBusiness) => {
    return {
        fullName: `${agentsBusiness.purchasingAgent.nameFirst} ${agentsBusiness.purchasingAgent.nameLast}`,
        company: agentsBusiness.companyName,
        phone: agentsBusiness.phoneWork
    }
}