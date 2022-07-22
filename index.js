// bai 1
document.getElementById("ketQua").onclick = function() {
    var diem1 = document.getElementById("diem1").value*1
    var diem2 = document.getElementById("diem2").value*1
    var diem3 = document.getElementById("diem3").value*1
    var doiTuong = document.getElementById("doiTuong").value*1
    var khuVuc = document.getElementById("khuVuc").value*1
    var diemChuan = document.getElementById("diemChuan").value*1
    var hienRa;
    var diemTongket = diem1 + diem2 + diem3 + doiTuong + khuVuc;
    if (diemTongket < diemChuan || diem1 === 0 || diem2 === 0 || diem3 === 0){
        hienRa = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    }
    else{
        hienRa = "Bạn đã đậu. Tổng điểm: "+diemTongket;
    }
    document.getElementById("ok").innerHTML = hienRa;
}
//bai 2

document.getElementById("xuatTien").onclick = function() {
    var name = document.getElementById("name").value
    var elec = document.getElementById("elec").value*1
    var tienTra;
    if(elec < 50 ){
        tienTra = elec * 500
    }
    else if(elec < 100){
        tienTra = 50 * 500 + (elec - 50) * 650;
    }
    else if(elec < 200){
        tienTra = 50 * 500 +  50 * 650 + (elec - 100) * 850;
    }
    else if(elec < 350){
        tienTra = 50 * 500 +  50 * 650 + 100 * 850 + (elec - 200) * 1100;
    }
    else {
        tienTra = 50 * 500 +  50 * 650 + 100 * 850 + 150 * 1100 +(elec - 350) * 1300;
    }

    document.getElementById("OK").innerHTML = "Ho Ten: "+ name +"; "+ "so tien dien la: "+tienTra + "vnd"; 

}

// bai 3
document.getElementById("tax").onclick = function() {
    var hoTen = document.getElementById("hoTen").value
    var income = document.getElementById("income").value*1
    var ngPhuthuoc = document.getElementById("ngPhuthuoc").value*1

    var chiuThue = 0;
    var tienThue = 0;
    chiuThue = income - 4000000 -(ngPhuthuoc * 1600000);
    if(chiuThue <= 4000000){
        tienThue = "khong hop le , 0";
    }
    else if(chiuThue < 60000000) {
        tienThue = chiuThue * 0.05;
    }
    else if(chiuThue < 120000000){
        tienThue = 60000000 *0.05 + (chiuThue - 60000000)* 0.1;
    }
    else if(chiuThue < 210000000){
        tienThue = 60000000 *0.05 +  60000000* 0.1 + (chiuThue - 120000000) * 0.15 ;
}
    else if(chiuThue < 384000000) {
        tienThue = 60000000 *0.05 +  60000000* 0.1 + 90000000 * 0.15 + (chiuThue - 210000000) * 0.2;
    }
    else if(chiuThue < 624000000){
        tienThue = 60000000 *0.05 +  60000000* 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (chiuThue - 384000000) * 0.25;
    }
    else if(chiuThue < 960000000){
        tienThue = 60000000 *0.05 +  60000000* 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 384000000 * 0.25 + (chiuThue - 624000000) * 0.3;
    }
    else{
        tienThue = 60000000 *0.05 +  60000000* 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 384000000 * 0.25 + 624000000 * 0.3 + (chiuThue - 960000000)* 0.35; 
    }

document.getElementById("xuatThue").innerHTML = "Ho va Ten: "+ hoTen + "; "+"tien thue thu nhap ca nha: "+tienThue+ "vnd";


}

//bai 4
function nhaDan(chanel) {
    var hoaDon = 4.5;
    var coBan = 20.5;
    var caoCap = 7.5 * chanel;

    var result = hoaDon + coBan + caoCap;
    return result;
}


document.getElementById("tinhTien").onclick = function() {
    var kenh = document.getElementById("kenh").value*1;
    var khachHang = document.getElementById("khachHang").value;
    var maKhachhang = document.getElementById("maKhachhang").value;
     var tienCap;
    if(khachHang === "nhaDan" ){
        tienCap = nhaDan(kenh);
    }
    else if(khachHang == "doanhnghiep"){

    
        tienCap = doanhNghiep(kenh);
    
    }
    document.getElementById("yo").innerHTML = "Ma khach hang: "+maKhachhang +"; "+ "tien cap la: "+ tienCap;
}

document.getElementById("khachHang").onchange = function(e) {
    if(e.target.value === "doanhnghiep"){
        document.getElementById("Yes").innerHTML = "<input id=\"congKetnoi\" type=\"number\" placeholder=\"so Ket noi\" /> ";
    }
}



function doanhNghiep(chanel) {
    var hoaDon = 15;
    var caoCap = 50 * chanel;
    var coBan
    var congKetnoi = document.getElementById("congKetnoi").value*1
    if(congKetnoi <= 10){
        coBan = 75;
    }
    else {
        coBan = 75 + (congKetnoi - 10)*5;
    }

    var result = hoaDon + coBan + caoCap;
    return result;
}




