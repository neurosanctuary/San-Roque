
document.addEventListener("DOMContentLoaded", () => {
    let page = String(window.location.pathname);
    //collects path in current window
    let list = JSON.parse(window.localStorage.getItem("list") || "[]")
    //list for every page visited in local storage

    if (!list.includes(page)) { 
        list.push(page)
        window.localStorage.setItem("list", JSON.stringify(list))
        //if page is not in list, it is now added to list.
    }

    if (list.includes("/clocktower/clocktower.html") && list.includes("/stables/stables.html") && list.includes("/bank/bank.html")) {
        //checks list if three locations are there, if they are....reveals cemetery
        document.getElementById("hiddenlink").style.display="block"
    }
    if (page === "/cemetery/cemetery.html") {
        /* this will reset the list once cemetery is visited*/
        window.localStorage.setItem("list", "[]")
    }
    if (list.includes("/cemetery/cemetery.html")) {
        /* this will reset the list once cemetery is visited*/
        window.localStorage.setItem("list", "[]")
    }

})
