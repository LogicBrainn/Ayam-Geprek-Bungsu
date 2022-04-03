var menu=[document.getElementById("gambar1"),document.getElementById("gambar2"),document.getElementById("gambar3"),
document.getElementById("gambar4"),document.getElementById("gambar5")];

var diklik=document.getElementById("onclick");

function klik1(){
    
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[0].style.backgroundImage
}
function klik2(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[1].style.backgroundImage
}
function klik3(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[2].style.backgroundImage
}
function klik4(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[3].style.backgroundImage
}
function klik5(){
    diklik.style=" padding: 20vh;background-size: 100%;border-radius: 50%;transition:.4s;"
    diklik.style.backgroundImage=menu[4].style.backgroundImage
}
