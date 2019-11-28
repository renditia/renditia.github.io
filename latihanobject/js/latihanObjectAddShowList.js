/*
    Inisiasi Variable (global)    
*/
var mahasiswaObj = {};
var arryMahasiswa = [];

/*
    nama  : add list
    tujuan : menambahkan object kedalam array
*/
function addObjMahasiswa(nama,alamat,npm,imgpth){
    var localObj = {};
    localObj.nama = nama;
    localObj.alamat = alamat;
    localObj.imgpth = imgpth;
    localObj.npm = npm;
    return localObj;
}
/*
   nama  : add Object to array
   tujuan : menambahkan object kedalam array
   addObjtoArray(addObjMahasiswa("Rendi",
   "Sari Indah","2131231","1.jpg"))
*/
function addObjtoArray(objMhs){
    arryMahasiswa.push(objMhs);
    console.log(arryMahasiswa);
}

/*
   nama  : show list input mahasiswa
   tujuan : menambahkan object kedalam array
*/
function showListMahasiswa(arryMhs){
    console.log(arryMhs);
}









