var btn = document.getElementById("btnHesap");

btn.onclick = function ()
{
  var sayi1 = Number(document.getElementById("sayi1").value);
  var sayi2 = Number(document.getElementById("sayi2").value);
  var sonuc;
  if (document.getElementById("toplama").checked) {
    sonuc = sayi1 + sayi2;
  } else if (document.getElementById("cikarma").checked) {
    sonuc = sayi1 - sayi2;
  } else if (document.getElementById("bolme").checked) {
    sonuc = sayi1 / sayi2;
  } else if (document.getElementById("carpma").checked) {
    sonuc = sayi1 * sayi2;
  } else {
    alert("Seçim Yapmadınız!");
  }
  document.getElementById("sonucDon").innerHTML = "SONUÇ : " + sonuc;
};