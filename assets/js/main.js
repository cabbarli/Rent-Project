
// satılıq ev, aylıq kirayə, günlük kiray-> radio butonlarına stil verən funksiyalar
function changeBgcolor1 (){
    document.getElementById("iii").style.backgroundColor = "#00bcd4";
    document.getElementById("iii").style.color = "#ffffff";
    document.getElementById("ii").style.backgroundColor = "white";
    document.getElementById("i").style.backgroundColor = "white";
    document.getElementById("ii").style.color = "#000000";
    document.getElementById("i").style.color = "#000000";
   };
   function changeBgcolor2 (){
    document.getElementById("ii").style.backgroundColor = "#00bcd4";  
    document.getElementById("ii").style.color = "#ffffff";
    document.getElementById("iii").style.backgroundColor = "white";
    document.getElementById("i").style.backgroundColor = "white";
    document.getElementById("iii").style.color = "#000000";
    document.getElementById("i").style.color = "#000000";
   };
   function changeBgcolor3 (){
    document.getElementById("i").style.backgroundColor = "#00bcd4";
    document.getElementById("i").style.color = "#ffffff";
    document.getElementById("iii").style.backgroundColor = "white";
    document.getElementById("ii").style.backgroundColor = "white";
    document.getElementById("iii").style.color = "#000000";
    document.getElementById("ii").style.color = "#000000";
   };
   // evin sahə ölçüsünü girərkən km2 dəyərini sağa çəkmə funksiyası
   function changeArea() {
    document.querySelector(".advertised__area").style.right = "20px";
   }
    // evin qiymətini girərkən AZN dəyə rini sağa çəkmə funksiyası
   function changeFunction() {
    document.querySelector(".advertised__value").style.right = "20px";
   }
   // detail map and elan-page3-map 
   function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: { lat: 40.375,  lng: 49.845}});
  }