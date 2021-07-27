//var listKelurahanBantul = [
//                        ["Mulyodadi", "Sidomulyo", "Sumbermulyo"], 
//                        ["Banguntapan", "Baturetno", "Jagalan","Jambidan", "Potorono", "Singosaren", "Tamanan", "Wirokerten"],  
//                        ["Bantul", "Palbapang", "Ringinharjo", "Sabdodadi", "Trirenggo"],
//                        ["Dlingo", "Jatimulyo", "Mangunan", "Muntuk", "Temuwuh", "Terong"],
//                        ["Girirejo", "Imogiri", "Karangtalun", "Karangtengah", "Kebonagung", "Selopamioro", "Sriharjo", "Wukirsari"],
//                        ["Canden", "Patalan", "Sumberagung", "Trimulyo"],
//                        ["Bangunjiwo","Ngestiharjo", "Tamantirto", "Tirtonirmolo"],
//                        ["Donotirto", "Parangtritis", "Tirtohargo", "Tirtomulyo", "Tirtosari"],
//                        ["Guwosari", "Sendangsari", "Triwidadi"],
//                        ["Caturharjo", "Gilangharjo", "Triharjo", "Wijirejo"],
//                        ["Srimulyo", "Sitimulyo", "Srimartani"],
//                        ["Bawuran", "Pleret","Segoroyo", "soWonokromo", "Wonolelo"],
//                        ["Panjangrejo", "Bangunharjo", "Srihardono"],
//                        ["Gadingsari", "Gadingharjo", "Murtigading", "Srigading"],
//                        ["Argodadi", "Argorejo", "Argosari", "Argomulyo"],
//                        ["Bangunharjo", "Panggungharjo", "Pendowoharjo", "Timbulharjo"],
//                        ["Poncosari", "Trimurti"],
//                        ]  
//
                         
//var reactNative =["Hafif","Dayat","Wandi"];
//var reactJs =["Yusuf","Luthfi","Tompel"];
//var JavaScriptDivison = reactNative.concat(reactJs);
//console.log("Java Script Divison =" + JavaScriptDivison.toString())
//document.write("Java Script Divison =" + JavaScriptDivison.toString())


//var santriPondok =[" ", "Wandi","Aldi","Acep","Putra","Hafif","Syofyan","Rahmad"]
//for(var i = 1; i < santriPondok.length; i++){
// console.log(i + "." + " " + santriPondok[i])
//}

var nilaiSantri =[ 5, 9, 6, 7, 9, 8, 10, 7, 8]

var jumlahNilai = 0;

for(var n = 0; n < nilaiSantri.length; n++){
    jumlahNilai += nilaiSantri[n]
}

console.log(jumlahNilai)
console.log(jumlahNilai/nilaiSantri.length)
