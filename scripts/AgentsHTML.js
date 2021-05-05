export const Agents = (agentObject) => {
    return `
    <h2>${agentObject.name}</h2>
    <div class="agentInfo">
        <div>${agentObject.company}</div>
        <div>${agentObject.phone}</div>
    </div>
    `
}