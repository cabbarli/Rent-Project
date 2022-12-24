
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

