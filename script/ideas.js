funIdeas();

function funNuv(a) {
    const nuv = document.getElementsByClassName("nav_but");
    nuv[a].classList.toggle("false");
    
    funIdeas();
}

function funIdeas() {
    const nuv_true = document.getElementsByClassName("false");

    const nuvHTML = Array.from(nuv_true).some(div => div.textContent.trim() === "HTML");
    const nuvCSS = Array.from(nuv_true).some(div => div.textContent.trim() === "CSS");
    const nuvJS = Array.from(nuv_true).some(div => div.textContent.trim() === "JS");
    
    console.log(nuvHTML);
    console.log(nuvCSS);
    console.log(nuvJS);

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
                <div class="tegs">
                    <div class="teg"></div>
                    <div class="teg"></div>
                    <div class="teg"></div>
                </div>
                <div class="text">${db[i].text}</div>
            </div>`

        let ideas_teg = document.getElementsByClassName("teg");

        if (db[i].html) {
            ideas_teg[i * 3].textContent = "HTML";
        } else {
            ideas_teg[i * 3].style.backgroundColor = 'inherit';
        }

        if (db[i].css) {
            ideas_teg[i * 3 + 1].textContent = "CSS";
        } else {
            ideas_teg[i * 3 + 1].style.backgroundColor = 'inherit';
        }

        if (db[i].js) {
            ideas_teg[i * 3 + 2].textContent = "JS";
        } else {
            ideas_teg[i * 3 + 2].style.backgroundColor = 'inherit';
        }
    }
}
