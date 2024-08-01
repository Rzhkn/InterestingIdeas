funIdeas();

function funNuv(a) {
    const nuv = document.getElementsByClassName("nav_but");
    if(nuv[a].classList.contains("false")){
        nuv[a].classList.remove("false");
    }
    else {
        nuv[a].classList.add("false");
    }
    
    funIdeas();
}

function funIdeas() {
    const nuv_true = document.getElementsByClassName("false");

    const nuvHTML = Array.from(nuv_true).some(div => div.textContent.trim() === "HTML");
    const nuvCSS = Array.from(nuv_true).some(div => div.textContent.trim() === "CSS");
    const nuvJS = Array.from(nuv_true).some(div => div.textContent.trim() === "JS");
    
//    console.log(nuvHTML);
//    console.log(nuvCSS);
//    console.log(nuvJS);

    let db = ideas;
    if (nuvHTML) {
        db = db.filter(item => item.html == false);
    }
    if (nuvCSS) {
        db = db.filter(item => item.css == false);
    }
    if (nuvJS) {
        db = db.filter(item => item.js == false);
    }

    const num = document.querySelector("#num");
    num.textContent = `Количество: ${db.length}`;

    const items = document.querySelector("#items");
    items.innerHTML = "";
    for (let i = 0; i < db.length; i++) {
        items.innerHTML += `<div class="item">
                <div class="tegs"></div>
                <div class="text_wrap">
                    <div class="text">
                        <p class="text_title">${db[i].title}</p>
                        <p class="text_text">${db[i].text}</p>
                    </div>
                    <div class="arrow"></div>
                </div>
                
            </div>`

        let ideas_teg = document.getElementsByClassName("tegs");

        if (db[i].html) {
            ideas_teg[i].innerHTML += `<div class="teg">HTML</div>`
        }

        if (db[i].css) {
            ideas_teg[i].innerHTML += `<div class="teg">CSS</div>`
        }

        if (db[i].js) {
            ideas_teg[i].innerHTML += `<div class="teg">JS</div>`
        }
    }
}
