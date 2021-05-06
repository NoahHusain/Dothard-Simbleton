export const Agents = (agentObject) => {
    return `
    <h2>${agentObject.fullName}</h2>
    <div class="agentInfo">
        <div>${agentObject.company}</div>
        <div>${agentObject.phone}</div>
    </div>
    `
}