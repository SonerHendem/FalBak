let btn =document.querySelector("#btn");
let output = document.querySelector("#output")
let fal= [
    "Yakışıklı bir bey elinde maşa saçları sarı gözleri maşa.",
    "Bir derdi var kara sevda buruk gönlü olur paşa.",
    "Yaşa bakma yaşa elinde bir maşa.",
    "Adında S var gönlünde D olur bu iş seneye.",
    "Bilirsin sever kahve içmekten olur pare pare.",
    "Şansını dene çek bir bilet kendine bir bakmıssın olmuş bin hane.",
    "Birkere sevdin olmaz bahane çok dolaşma bitir bu işi şahane."
]
btn.addEventListener("click",function(){
    let randomFal= fal[Math.floor(Math.random()*fal.length)]
    output.innerHTML=randomFal;
})