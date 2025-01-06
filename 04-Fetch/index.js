const myHeaders = new Headers({
    "x-api-key": "VOTRE CLE ICI",
})

fetch("https://api.thecatapi.com/v1/breeds", {headers: myHeaders})
    .then(response => response.json())
    .then(data => {
        let content = ""
        data.forEach(breed => {
            console.log(breed)
            content += `<li class="list-group-item">${breed.name}</li>`
        })
        $("#breeds").innerHTML = content
    })
    .catch((error) => {
        console.log(error)
    })