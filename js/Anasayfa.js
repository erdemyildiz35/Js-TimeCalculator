

function hesapla() {
    const dogumTarihi_string = document.getElementById("dogum_tarihi").value;

    const date_Birtday =new Date(dogumTarihi_string);
    const DateToday = new Date();
    

   
    
    var gunSayisi=  Math.floor((DateToday-date_Birtday)/(1000*60*60*24));
  
    var saatSayisi =Math.floor((DateToday-date_Birtday)/(1000*60*60));
    var saniyesayisi = Math.floor((DateToday-date_Birtday)/(1000));

    console.log(date_Birtday);
    console.log(gunSayisi);
    console.log(DateToday);


    document.getElementById("sonuc").innerHTML = `Kac gun Yasadın: ${gunSayisi}`;
    document.getElementById("SaatSonuc").innerHTML=`Kac Saat Yasadın: ${saatSayisi}`;
    document.getElementById("SaniyeSonuc").innerHTML=`Kac saniye Yasadın: ${saniyesayisi}`;
    document.getElementById("Credit").innerHTML='yapan kişi : erdem yıldız';
    
}
