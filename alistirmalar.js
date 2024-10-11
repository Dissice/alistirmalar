//Parse float kullanmadığım taktirde yaşadığım tarayıcı sorunundan dolayı araştırmalarım sonucu bunu kullanmamın sorunu çözebileceğini gördüm.
//Bir çeşit chrome da prompt kısmının gözükmeme hatasıydı. Çalışıyordu kodlarım bir anda olmadı. Böyle çözüm buldum.

/* Basit İndirim Hesaplama:
Bir ürünün fiyatını ve indirim yüzdesini kullanıcıdan alarak, indirimli fiyatı hesaplayan bir program yazın.
Örn: 100 TL olan bir ürüne %20 indirim yapıldığında ne kadar ödenmesi gerektiğini hesaplayıp alert ile gösterin.*/

let urunFiyati = parseFloat(prompt('Ürünün fiyatını girin.'));
let indirimYuzdesi = parseFloat(prompt('İndirim yüzdesini girin.'));

let indirimliFiyat = urunFiyati * (1 - indirimYuzdesi / 100);
alert("İndirimli Ücret: " + indirimliFiyat + " ₺");


/*Vize ve Final Notu ile Ortalama:
Kullanıcıdan vize ve final notunu alarak dönem ortalamasını hesaplayan bir program yazın (vize %40, final %60 etkili olsun).
Eğer not 50’den büyükse "Geçtiniz", 50'den küçükse ve 40’tan büyükse "Şartlı geçtiniz", 40’tan küçükse "Kaldınız" mesajını verin.*/

let vizeNotu = parseFloat(prompt('Vize notunu gir.'));
let finalNotu = parseFloat(prompt('Final notunu gir.'));

let ortalama = (vizeNotu * 0.4 + finalNotu * 0.6);

if (ortalama > 50) {
  console.log('Geçtiniz!');
} else if (ortalama <= 50 && ortalama >= 40) {
  console.log('Şartlı Geçtiniz.');
} else {
  console.log('Kaldınız!');
}


/*Haftanın Günü:
​​​​​​​​​​Kullanıcıdan bir sayı alın ve o sayıya karşılık gelen günü yazdırın (1 = Pazartesi, 7 = Pazar). Switch case araştırabilirsiniz.*/

let gunler = prompt('Bir sayı giriniz');

switch (gunler) {
  case "1":
    console.log("Pazartesi");
    break;
  case "2":
    console.log("Salı");
    break;
  case "3":
    console.log("Çarşamba");
    break;
  case "4":
    console.log("Perşembe");
    break;
  case "5":
    console.log("Cuma");
    break;
  case "6":
    console.log("Cumartesi");
    break;
  case "7":
    console.log("Pazar");
    break;
  default:
    console.log("Bu bir gün değil!!");
    break; 
}

//DEVAMI GELECEK.