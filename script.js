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
