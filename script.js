const ipInput = document.getElementById("ipInput");
const checkButton = document.getElementById("checkIP");
const result = document.getElementById("ipResult");

checkButton.addEventListener("click", function () {
    const ip = ipInput.value.trim();
    const parts = ip.split(".");

    if (parts.length !== 4) {
        result.textContent = "❌ Invalid IPv4 address";
        return;
    }

    for (let part of parts) {
        if (part === "" || !/^\d+$/.test(part)) {
            result.textContent = "❌ Invalid IPv4 address";
            return;
        }

        const number = Number(part);

        if (number < 0 || number > 255) {
            result.textContent = "❌ Invalid IPv4 address";
            return;
        }
    }

    result.textContent = "✅ Valid IPv4 address";
});
const portInput = document.getElementById("portInput");
const checkPort = document.getElementById("checkPort");
const portResult = document.getElementById("portResult");

checkPort.addEventListener("click", function () {
    const port = Number(portInput.value);

    if (!Number.isInteger(port) || port < 0 || port > 65535) {
        portResult.textContent = "❌ Invalid port number";
        return;
    }

    portResult.textContent = "✅ Valid port number";
});
const subnetInput = document.getElementById("subnetInput");
const checkSubnet = document.getElementById("checkSubnet");
const subnetResult = document.getElementById("subnetResult");

checkSubnet.addEventListener("click", function () {
    const subnet = subnetInput.value.trim();
    const parts = subnet.split(".");

    if (parts.length !== 4) {
        subnetResult.textContent = "❌ Invalid subnet mask";
        return;
    }

    const numbers = parts.map(Number);

    if (parts.some(part => !/^\d+$/.test(part)) ||
        numbers.some(number => number < 0 || number > 255)) {
        subnetResult.textContent = "❌ Invalid subnet mask";
        return;
    }

    const binary = numbers
        .map(number => number.toString(2).padStart(8, "0"))
        .join("");

    if (!/^1*0*$/.test(binary)) {
        subnetResult.textContent = "❌ Invalid subnet mask";
        return;
    }

    subnetResult.textContent = "✅ Valid subnet mask";
});
const cidrInput = document.getElementById("cidrInput");
const calculateCIDR = document.getElementById("calculateCIDR");
const cidrResult = document.getElementById("cidrResult");

if (calculateCIDR) {
    calculateCIDR.addEventListener("click", function () {

        const cidr = Number(cidrInput.value);

        if (!Number.isInteger(cidr) || cidr < 0 || cidr > 32) {
            cidrResult.textContent = "❌ Enter a CIDR between 0 and 32";
            return;
        }

        const totalAddresses = 2 ** (32 - cidr);

        cidrResult.textContent =
            `✅ /${cidr} = ${totalAddresses.toLocaleString()} total addresses`;
    });
}
