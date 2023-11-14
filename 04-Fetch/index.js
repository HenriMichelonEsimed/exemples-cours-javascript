const myHeaders = new Headers({
    "x-api-key": "d016f309-0eca-4c47-a749-cc247aa403d7",
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