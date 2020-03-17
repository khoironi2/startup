$(document).ready(function () {

   $("#merah").click(function () {
      console.log("merah");
      $("#txt").css("color", "red");
   });

   $("#biru").click(function () {
      console.log("biru");
      $("#txt").css("color", "blue");
   });

   $("#reset").click(function () {
      console.log("reset");
      $("#txt").css("color", "black");
   });

   $("#email").keyup(function () {
      var a = $("#email").val();
      console.log(a);
      $("#abc").text(a);
   });

   $("#telpon").keyup(function () {
      var a = $("#telpon").val();
      console.log(a);
      $("#def").text(a);
   });

   $("#nama").keyup(function () {
      var a = $("#nama").val();
      console.log(a);
      $("#hij").text(a);
   });

   $("#cd").click(function () {
      var harga = $("#harga").val();
      var time = $("#time").val();

      var h = harga - time;

      $("#hasil").text(" Total Rp" + h + ".000");
   });

});