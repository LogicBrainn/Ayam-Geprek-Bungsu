

var sectionMenuMuncul = document.getElementById("sectionMenuMuncul")

var diklikGambar=document.getElementById("diklikGambar");
var dikliknama=document.getElementById("onnama");

var harga = [document.getElementById("harga"),[12000,15000,9000,7000,10000,12000,12000,12000,15000,17000]];

// untuk fungsi ketika memilih salah satu menu
var index;
function klik(){
    diklikGambar.style.backgroundImage=document.getElementById("gambar"+(index+1)).style.backgroundImage;
    setTimeout(" dikliknama.innerHTML=  document.getElementById('nama'+(index+1)).innerHTML",300);
    setTimeout("harga[0].innerHTML='Harga : Rp. '+ harga[1][index]+ ' ,00'",300); 
    sectionMenuMuncul.style.top="10vh" 
    }

    
function cetak(){
    var dikali = document.getElementById("dikali");
    var total = document.getElementById("total");
    var pesan = document.getElementById("pesan");
    total.innerHTML= "Total : Rp." + harga[1][index]*dikali.value +" ,00";
    pesan.innerHTML='     <a style="padding: 1vh 3vh;border-radius:20px ;background-color: white; color: black;"target="_blank"href="https://api.whatsapp.com/send?phone=62895805349793&text= Halo kak saya mau order  '+dikali.value+" porsi "+dikliknama.innerHTML+" "+ total.innerHTML+'">Pesan</a>';
    if(dikali.value==0){
        pesan.innerHTML="";
    }
}

function hapus(){
 sectionMenuMuncul.style.top="120vh";
 total.innerHTML="Total : Rp.-";
 pesan.innerHTML= "";
}