var teks = document.getElementById("teks");
    teks.innerHTML =""
    var ha=["No 1"," di"," Bantaeng"]
      setInterval(() => {
        if(teks.innerHTML=="")
            teks.innerHTML=teks.innerHTML+ha[0];
        else if(teks.innerHTML==ha[0]) {
            teks.innerHTML=teks.innerHTML+ha[1];
        }
        else if(teks.innerHTML==ha[0]+ha[1]) {
            teks.innerHTML=teks.innerHTML+ha[2];
        }
         
        else if(teks.innerHTML==ha[0]+ha[1]+ha[2]) {
            teks.innerHTML="mantapp!!";
        }
        else if(teks.innerHTML=="mantapp!!") {
            teks.innerHTML="";
        }
         
      }, 1000); 
      
       


    