let namaKaryawan =[];

function showKaryawan(){
    let listKaryawan = document.getElementById('list-karyawan');
    listKaryawan.innerHTML = ""

    for (let i=0;i<namaKaryawan.length;i++){
        var btnEdit= "<a href='#' onClick='editNama("+i+")'>Edit</a>"
        var btnHapus= "<a href='#' onClick='hapusNama("+i+")'>Hapus</a>"
        listKaryawan.innerHTML +="<li>"+namaKaryawan[i]+ " "+"["+btnEdit+" | "+btnHapus+"]" +"</li>";
    }
}

function addKaryawan(){
    let input = document.getElementById("nama");
    namaKaryawan.push(input.value);
    showKaryawan();
}

function editNama(id){
    let newNama= prompt("inputkan nama baru", namaKaryawan[id]);
    namaKaryawan[id] = newNama;
    showKaryawan();
}

function hapusNama(id){
    namaKaryawan.splice(id,1);
    showKaryawan();

}