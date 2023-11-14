document.querySelector("li").style.listStyleType = "lower-greek"

document.querySelectorAll(".classe1").forEach(li => {
    li.style.listStyleType = "upper-roman"
})

// JQuery-style (-> tools.js)
document.querySelector("#laligne").style.listStyleType = "lower-greek"
$("#laligne").innerHTML = "la ligne 4"

//$("li:empty").style.backgroundColor = "red"

$("li > span", function(span) {
    span.style.backgroundColor = "silver"
})

$("li > span", span => {
    span.style.backgroundColor = "silver"
    span.style.padding = "5px"
})

$("li[class] > span", li => {
    li.style.border = "1px solid darkblue"
})

$("li[class~='classe2']", li =>  {
    li.style.backgroundColor = "yellow"
})

window.addli = function () {
    const nombre = document.querySelectorAll("li").length
    const li = document.createElement("li")
    li.innerHTML = "nouvelle ligne " + (nombre + 1)
    $("ul").appendChild(li)
}

window.removeli = function () {
    const numero = Number.parseInt($("#numero").value)
    if (numero) {
        //$("#erreur-saisie").style.display = "none"
        $("[id^=erreur-]", div => { div.style.display = "none" })
        const li = $("li:nth-child(" + numero + ")")
        try {
            $("ul").removeChild(li)
        } catch {
            $("#erreur-numero").style.display = "block"
        }
        $("#numero").value = ""
    } else {
        $("#erreur-saisie").style.display = "block"
    }
}
