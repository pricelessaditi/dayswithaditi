 let body = document.body;
let loading = 1;

//welcome
console.log("[Welcome My Adit from(Chris George]");

//cursor
let cursor = document.getElementById("cursor");
let cursorTL = document.getElementById("cursorTL");
let cursorTR = document.getElementById("cursorTR");
let cursorBL = document.getElementById("cursorBL");
let cursorBR = document.getElementById("cursorBR");
let mx = 0, my = 0, cx = 0, cy = 0, i = 0;
body.addEventListener("mousemove", (m) => {
    mx = m.x - cursor.offsetLeft - cursor.clientWidth / 2;
    my = m.y - cursor.offsetTop - cursor.clientHeight / 2;
    i = 0;
    if (cursor.style.display != "block") {
        cursor.style.display = "block";
        cursor.style.animation = "cursorAppear 0.2s ease-in backwards";
    };
    if (loading) {
        cursorTL.style.animation = "TLloading 2s infinite";
        cursorTR.style.animation = "TRloading 2s infinite";
        cursorBL.style.animation = "BLloading 2s infinite";
        cursorBR.style.animation = "BRloading 2s infinite";
    } else {
        cursorTL.style.animation = "none";
        cursorTR.style.animation = "none";
        cursorBL.style.animation = "none";
        cursorBR.style.animation = "none";
    };
});
body.addEventListener("mouseleave", () => {
    cursor.style.animation = "cursorDisappear 0.2s ease-out forwards";
    setTimeout(() => {
        cursor.style.display = "none";
    }, 200);
});
function moveCursor() {
    if (i < 18) {
        cx += mx / 18;
        cy += my / 18;
    };
    cursor.style.left = cx + "px";
    cursor.style.top = cy + "px";
    i++;
};
setInterval(moveCursor, 1);

//page
let container = document.getElementById("container");

//JSneeded & Loading
let JSnotice = document.getElementById("JSneeded");
let shade = document.getElementById("shade");
let shadeText = document.getElementById("shadeText");
shadeText.innerHTML = "[Loading the website for my Aditi ...]";
function startPage() {
    setTimeout(() => {
        JSnotice.style.animation = "disappear 3s ease-out forwards";
        shade.style.animation = "disappear 3s ease-out forwards";
        setTimeout(() => {
            loading = 0;
            JSnotice.style.display = "none";
            shade.style.display = "none";
            container.style.display = "block";
        }, 800);
    }, 2000);
};


//homePage
//nothing yet


//introPage
let introTitle = document.getElementById("introTitle");
let picText = document.getElementById("picText");
window.onresize = function () {
    introTitle.style.bottom = picText.offsetHeight + 40 + "px";
};


//Let's go!
window.onload = function () {
    startPage();
    setTimeout(() => {
        console.log(picText.clientHeight)
        introTitle.style.bottom = picText.offsetHeight + 40 + "px";
    }, 1600);
};