var arrMahasiwa = [];
var mahasiswadecl = {};
// create object using function declaration
function objMahasiswa(nama, alamat, npm, imgfth) {
    var objA = {};
    objA.nama = nama;
    objA.alamat = alamat;
    objA.npm = npm;
    objA.imgfth = imgfth;
    return objA;
}

function resetDataList(){
    arrMahasiwa = [];
    mahasiswadecl = {};
    var strHtml ="";
    /* loop arrray */
    for (var i in arrMahasiwa) {
        strHtml = strHtml + "<div clas='text'><img src='images/"+arrMahasiwa[i].imgfth+"' alt = ''><div>"+arrMahasiwa[i].nama +"</div><div>"+arrMahasiwa[i].npm+"</div><div><i>Jl. Antasari III No.36</i></div></div >"
    }
    
    $(".content").html(
        strHtml
    )
}

function addMahaSiswa(mahasiswa){
    arrMahasiwa.push(mahasiswa);
}

function showList(listmahasiwa){

    /* convert array of object into string json */
    var jsonString = JSON.stringify(listmahasiwa);
    console.log(jsonString)
    var strHtml ="";
    /* loop arrray */
    for (var i in listmahasiwa) {
        strHtml = strHtml + "<div class='text'><img src='images/"+listmahasiwa[i].imgfth+"' alt = ''><div>"+listmahasiwa[i].nama +"</div><div>"+listmahasiwa[i].npm+"</div><div><i>"+listmahasiwa[i].alamat+"</i></div></div >"
    }

    $(".content").html(strHtml)
}

