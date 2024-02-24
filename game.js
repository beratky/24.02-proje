
//?PC'ye 1-20 arasında bir sayı tutturduk
let rasgeleSayi = Math.ceil(Math.random()*20)
// console.log(rasgeleSayi)

let mesaj = document.querySelector(".msg");

let skor = 10;
//skoru index.html'den çekebilirdik. Ama çok kullanacağımız için bu daha tercih edilen bir yoldur
let enYuksekSkor = 0;

document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value
    // console.log(tahmin)

    //! Tahmin girmeden butona basıldıysa
    if (!tahmin) {
        mesaj.textContent = "Lütfen bir sayı giriniz..."

        //!Tahmin doğruysa
    } else if(tahmin == rasgeleSayi) {

        mesaj.textContent = "Tebrikler Bildiniz..."
        document.querySelector("body").style.backgroundColor = "green"
        document.querySelector(".number").textContent = rasgeleSayi;

        // top-score Kontrolü yap

        if (skor > enYuksekSkor ) {
            enYuksekSkor = skor
            document.querySelector(".top-score").textContent = skor
        }




        //!Tahmin yanlışsa
    }else{
        //? Skor 1'den büyük olduğu sürece hakkım var 

        if (skor > 1) {
            skor--;
            document.querySelector(".score").textContent = skor
            
            tahmin < rasgeleSayi
            ? mesaj.textContent = "Arttır"
            : mesaj.textContent = "Azalt"
        } else {
            // GAME OVER
            mesaj.textContent = "Oyunu kaybetttiniz"
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red"


        }


    }
} )

//Again butonuna basılınca ayarlar başlangıç değerine kurulsun. Arka plan #2d3436

document.querySelector(".again").onclick = () => {

    document.querySelector("body").style.backgroundColor = "#2d3436"

    rasgeleSayi = Math.ceil(Math.random() * 20 )
    console.log("yeni rasgele sayı", rasgeleSayi)

    skor = 10;

    document.querySelector(".score").textContent = skor

    document.querySelector(".number").textContent = "?"

    document.querySelector(".guess").value = "";

    mesaj.querySelector = "Oyun yeni oyuncu için başlıyor..."
}



//! ENTER tuşu çalışsın!

//Klavyeden enter butonuna basıldığında  check butonunu tetikle

document.addEventListener("keydown", function(e){
    // console.log(e.key)

    if (e.key === "Enter") {
        document.querySelector(".check").click()
    }
})

localStorage.setItem("harvey", 555)

console.log(localStorage.getItem("harvey"))