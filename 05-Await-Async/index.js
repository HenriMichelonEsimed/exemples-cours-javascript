const myHeaders = new Headers({
    "x-api-key": "VOTRE CLE ICI",
})

try {
    const response = await fetch("https://api.thecatapi.com/v1/breeds", {headers: myHeaders})
    const data = await response.json();
    let content = ""
    data.forEach(breed => {
        console.log(breed)
        content += `<li class="list-group-item">${breed.name}</li>`
    })
    $("#breeds").innerHTML = content
} catch (error) {
    console.log(error)
}