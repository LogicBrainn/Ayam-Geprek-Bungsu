var menu=[document.getElementById("gambar1"),document.getElementById("gambar2"),document.getElementById("gambar3"),
document.getElementById("gambar4"),document.getElementById("gambar5")];


var nama=[document.getElementById("nama1"),document.getElementById("nama2"),document.getElementById("nama3"),
document.getElementById("nama4"),document.getElementById("nama5")];

var diklik=document.getElementById("onclick");
var dikliknama=document.getElementById("onnama");

function klik1(){
    
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[0].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[0].innerHTML",300);
}
function klik2(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[1].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[1].innerHTML",300);
}
function klik3(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[2].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[2].innerHTML",300);
}
function klik4(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[3].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[3].innerHTML",300);
}
function klik5(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[4].style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=nama[4].innerHTML",300);
}
