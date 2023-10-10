// function changeBackgroundColor(){
//     let body = document.querySelector('body')
//     body.style.backgroundColr = "yellow"
// }

// btnBackground.addEventListener('click', function(){
// changeBackgroundColor('gray','1')
// })

// let a = (color, opacity){
//     let body = document.querySelector('body')
//     body.style.backgroundColor = color
//     body.style.opacity = opacity
// }

// function a(mineur, majeur){
//     if(mineur < 18){
//         console.log(`il est : mineur`);
//     }
//     if ( majeur >= 18){
//         console.log(`il est : majeur`);
//     }
// }
// a(15, 20)

// function changeBg(){
//     let changeBg = query.selector('body')
//     body.style.backgroundcolor = "yellow"
// }
// changeBg()

// let password = document.getElementById('password')
function checkMotPasse(){
    let inputpassword = document.getElementById('password').value
    let confirmpassword = document.getElementById('confirmPassword').value
    console.log(inputpassword, confirmpassword);
    if (inputpassword == confirmpassword){
        // console.log("ok");
        information.innerHTML = "Mot de passe validé !"
    }else{
        // console.log("ko");
        information.innerHTML = "Mot de passe incorrect !"
        information.classList.remove('validate')
    }
}
let valider = document.querySelector('#valider')
console.log(valider);
valider.addEventListener('click',function(){
    checkMotPasse()
});






