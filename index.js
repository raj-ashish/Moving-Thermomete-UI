function thermaLoad(){
    var therma = document.getElementById("therma");
    therma.innerHTML = "&#xf2cb;";
    therma.style.color = "#fff";

setTimeout(() =>{
    therma.innerHTML = "&#xf2ca";
    therma.style.color = "#FDCA40";
},1000)

setTimeout(() =>{
    therma.innerHTML = "&#xf2c9";
},2000)

setTimeout(() =>{
    therma.innerHTML = "&#xf2c8";
},3000)

setTimeout(() =>{
    therma.innerHTML = "&#xf2c7";
    therma.style.color = "#CE1212";
},4000)

setTimeout(() =>{
    therma.innerHTML
})
}
thermaLoad();

setInterval(thermaLoad, 5000);