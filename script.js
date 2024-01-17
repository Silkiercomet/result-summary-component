const getData = async () => {
    let req = await fetch("./data.json")
    let res = await req.json()


        const dataArray = Array.from(res)
        const list = document.querySelector("#list")
        list.innerHTML = ""
        dataArray.map(e => {
            let newItem = document.createElement("li")
            newItem.innerHTML = `
            <span><i><img src="${e.icon}" alt="icon for ${e.category}"></i>${e.category}</span> <span>${e.score} / 100</span>
            `
            list.appendChild(newItem)
        })
}
getData()
