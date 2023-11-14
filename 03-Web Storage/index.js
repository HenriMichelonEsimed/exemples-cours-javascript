const NAME_KEY="lastname"
const HISTORY_KEY="history"

const lastname = localStorage.getItem(NAME_KEY)
if (lastname) {
    $("#name").value = lastname
}

let history
const storedHistory = localStorage.getItem(HISTORY_KEY)
if (storedHistory) {
    history = JSON.parse(storedHistory)
    displayHistory()
} else {
    history = []
}

window.sayHello = () => {
    const name = $("#name").value
    if (name) {
        $("#message").innerText = `Bonjour ${name}`
        localStorage.setItem(NAME_KEY, name)
        history.push(name)
        localStorage.setItem(HISTORY_KEY, JSON.stringify(history))
        displayHistory()
    }
}

function displayHistory() {
    let historyHtml = ""
    history.forEach(v => historyHtml += `${v}<br/>`)
    $("#history").innerHTML = historyHtml
}