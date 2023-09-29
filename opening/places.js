
document.addEventListener("DOMContentLoaded", () => {
    let page = window.location.pathname.split('/').pop()
    let list = JSON.parse(localStorage.getItem("list") | "[]")


    if (!list.includes(page)) { 
        list.push(page)
        localStorage.setItem("list", JSON.stringify(list))
    }
    if (list.length > 3) {
        document.getElementById("hiddenlink").style.display="block"
    }
    if (page == "/cemetery/cemetery/html") {
        localStorage.setItem("list", "[]")
    }
})
