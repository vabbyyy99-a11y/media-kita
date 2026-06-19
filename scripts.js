function scrollToContent() {

    // Countdown
    document.querySelector(".count-section").scrollIntoView({
        behavior: "smooth"
    });

    // Galeri
    setTimeout(() => {
        document.querySelector(".gallery").scrollIntoView({
            behavior: "smooth"
        });
    }, 5000);

    // Surat cinta
    setTimeout(() => {

        document.querySelector(".letter").scrollIntoView({
            behavior: "smooth"
        });

        // Baru mulai mengetik saat sampai surat
        if(!typingStarted){
            typingStarted = true;
            typeWriter();
        }

    }, 10000);

}

const startDate = new Date("2025-09-17");

function updateDays(){

const now = new Date();

const diff = now - startDate;

const days =
Math.floor(
diff/(1000*60*60*24)
);

document.getElementById("daysTogether").innerHTML =
days + " Hari ❤️";

}

updateDays();

const text = `
Aku gak pernah nyangka akan jatuh cinta sama seseorang yang ternyata membawa begitu banyak perbedaan dalam hidupku. Kita lahir dari keluarga yang berbeda, budaya yang berbeda, dan keyakinan yang berbeda. Kadang aku takut, bukan karena aku gak yakin sama perasaanku, tapi karena aku tahu jalan yang kita lalui gak akan semudah pasangan lain.

Tapi dari semua perbedaan itu, ada satu hal yang selalu sama: perasaanku ke kamu.

Aku gak takut dengan jarak, aku gak takut dengan waktu. Yang paling aku takutin adalah keadaan yang memaksa kita saling melepaskan padahal hati kita masih sama-sama ingin bertahan.

Kalau suatu hari nanti dunia bertanya kenapa aku memilih kamu, jawabanku sederhana. Karena di antara miliaran manusia, kamu adalah orang yang membuatku merasa pulang.

Aku gak tahu bagaimana akhir cerita kita. Tapi yang aku tahu, aku akan selalu bersyukur karena pernah dipertemukan dengan kamu. Dan kalau suatu saat air mata harus jatuh karena keadaan, percayalah, itu bukan karena aku menyesal mencintaimu. Justru karena aku terlalu mencintaimu.

Terima kasih sudah hadir di hidupku. Terima kasih sudah menjadi alasan kenapa aku percaya bahwa cinta bisa tumbuh bahkan di antara banyak perbedaan.

`;

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML +=
        text.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    } else {

        setTimeout(() => {

            document.querySelector(".question").scrollIntoView({
                behavior: "smooth"
            });

        }, 7000);

    }

}

//typeWriter();
let typingStarted = false;

const noBtn =
document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{

const x =
Math.random() *
(window.innerWidth-150);

const y =
Math.random() *
(window.innerHeight-80);

noBtn.style.position="fixed";
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";

});

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="❤️";

heart.style.left =
Math.random()*100+"vw";

heart.style.animationDuration =
Math.random()*4+4+"s";

document.body.appendChild(heart);

setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,400);
const yesBtn = document.querySelector(".yes");

yesBtn.addEventListener("click", () => {

    document.body.innerHTML = `
    <div id="lovePage" style="
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    background:linear-gradient(180deg,#07111f,#132a49);
    color:white;
    padding:30px;
    font-family:Poppins,sans-serif;
    overflow:hidden;
    ">

    <h1>❤️ Terima Kasih Nadine ❤️</h1>

    <p style="
    max-width:700px;
    margin-top:20px;
    line-height:2;
    font-size:1.1rem;
    ">
    Aku bersyukur karena dipertemukan dengan kamu.

    Terima kasih sudah bertahan,
    terima kasih sudah percaya,
    dan terima kasih sudah menjadi bagian dari hidup aku.

    Aku sayang kamu ❤️
    </p>

    <h2 style="margin-top:30px;">
    Forever Starts Here ✨
    </h2>

    </div>
    `;

    function rainHeart() {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-50px";
        heart.style.fontSize = (20 + Math.random() * 30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";
        heart.style.transition = "transform 6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(110vh)";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    setInterval(rainHeart, 150);

});