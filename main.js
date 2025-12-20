/**
 * Bài 1: Quản lý tuyển sinh
 * 
 * Đầu vào
 *  -Tạo biến toàn cục
 *  Khu vực ưu tiên A = 2
 *  Khu vực ưu tiên B = 1
 *  Khu vực ưu tiên C = 0.5
 *  Khu vực không ưu tiên D = 0
 *  Đối tượng không ưu tiên 0 = 0
 *  Đối tượng ưu tiên 1 = 2.5
 *  Đối tượng ưu tiên 2 = 1.5
 *  Đối tượng ưu tiên 3 = 1
 * 
 *  -Tạo biến chứa giá trị điểm chuẩn
 *  -Tạo biến chứa giá trị môn thứ 1
 *  -Tạo biến chứa giá trị môn thứ 2
 *  -Tạo biến chứa giá trị môn thứ 3
 *  
 *  -Tạo biến chứa điểm tổng kết và gán giá trị = 0
 * 
 * Xử lý
 * tính điểm tổng kết = tổng 3 môn
 * 
 * Kiểm tra nếu có khu vực A và đối tượng không ưu tiên 0 -> điểm tổng kết + khu A + đối tượng 0
 * Kiểm tra nếu có khu vực A và đối tượng ưu tiên 1 -> điểm tổng kết + khu A + đối tượng 1
 * Kiểm tra nếu có khu vực A và đối tượng ưu tiên 2 -> điểm tổng kết + khu A + đối tượng 2
 * Kiểm tra nếu có khu vực A và đối tượng ưu tiên 3 -> điểm tổng kết + khu A + đối tượng 3
 * 
 * Kiểm tra nếu có khu vực B và đối tượng không ưu tiên 0 -> điểm tổng kết + khu A + đối tượng 0
 * Kiểm tra nếu có khu vực B và đối tượng ưu tiên 1 -> điểm tổng kết + khu B + đối tượng 1
 * Kiểm tra nếu có khu vực B và đối tượng ưu tiên 2 -> điểm tổng kết + khu B + đối tượng 2
 * Kiểm tra nếu có khu vực B và đối tượng ưu tiên 3 -> điểm tổng kết + khu B + đối tượng 3
 *
 *  Kiểm tra nếu có khu vực C và đối tượng không ưu tiên 1 -> điểm tổng kết + khu C + đối tượng 0
 * Kiểm tra nếu có khu vực C và đối tượng ưu tiên 1 -> điểm tổng kết + khu C + đối tượng 1
 * Kiểm tra nếu có khu vực C và đối tượng ưu tiên 2 -> điểm tổng kết + khu C + đối tượng 2
 * Kiểm tra nếu có khu vực C và đối tượng ưu tiên 3 -> điểm tổng kết + khu C + đối tượng 3
 * 
 * Kiểm tra nếu có khu vực không ưu tiên D và đối tượng không ưu tiên 0 -> điểm tổng kết + khu D + đối tượng 0
 * Kiểm tra nếu có khu vực không ưu tiên D và đối tượng ưu tiên 1 -> điểm tổng kết + khu D + đối tượng 1
 * Kiểm tra nếu có khu vực không ưu tiên D và đối tượng ưu tiên 2 -> điểm tổng kết + khu D + đối tượng 2
 * Kiểm tra nếu có khu vực không ưu tiên D và đối tượng ưu tiên 3 -> điểm tổng kết + khu D + đối tượng 3
 * 
 * Kiểm tra điểm tổng kết cuối cùng so với điểm chuẩn
 * 
 * Đầu ra
 * In điểm tổng kết ra màn hình
 * Nếu điểm chuẩn > điểm tổng kết -> hiển thị kết quả rớt + in điểm ra màn hình
 * Nếu điểm chuẩn < điểm tổng kết -> hiển thị kết quả đậu + in điểm ra màn hình
 * 
 */

const A = 2;
const B = 1;
const C = 0.5;
const D = 0;

const uuTien_0 = 0;
const uuTien_1 = 2.5;
const uuTien_2 = 1.5;
const uuTien_3 = 1.5;
let diemTongKet = 0;
const pInfo_1 = document.getElementById("pInfo_1");
const pInfo_2 = document.getElementById("pInfo_2");

function tinhDiemTongKet() {
    const diemChuan = document.getElementById("diem_chuan").value * 1;
    const mon_1 = document.getElementById("mon_1").value * 1;
    const mon_2 = document.getElementById("mon_2").value * 1;
    const mon_3 = document.getElementById("mon_3").value * 1;

    const khu_A = document.getElementById("khu_A");
    const khu_B = document.getElementById("khu_B");
    const khu_C = document.getElementById("khu_C");
    const khu_D = document.getElementById("khu_D");

    const doiTuong_0 = document.getElementById("doiTuong_0");
    const doiTuong_1 = document.getElementById("doiTuong_1");
    const doiTuong_2 = document.getElementById("doiTuong_2");
    const doiTuong_3 = document.getElementById("doiTuong_3");

    diemTongKet = mon_1 + mon_2 + mon_3;
    if (diemChuan > 0 && mon_1 > 0 && mon_2 > 0 && mon_3 > 0) {
        if (khu_A.checked && doiTuong_0.checked) {
            diemTongKet = diemTongKet + A + uuTien_0;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_A.checked && doiTuong_1.checked) {
            diemTongKet = diemTongKet + A + uuTien_1;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_A.checked && doiTuong_2.checked) {
            diemTongKet = diemTongKet + A + uuTien_2;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_A.checked && doiTuong_3.checked) {
            diemTongKet = diemTongKet + A + uuTien_3;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_B.checked && doiTuong_0.checked) {
            diemTongKet = diemTongKet + B + uuTien_0;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        }
        else if (khu_B.checked && doiTuong_1.checked) {
            diemTongKet = diemTongKet + B + uuTien_1;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_B.checked && doiTuong_2.checked) {
            diemTongKet = diemTongKet + B + uuTien_2;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_B.checked && doiTuong_3.checked) {
            diemTongKet = diemTongKet + B + uuTien_3;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_C.checked && doiTuong_0.checked) {
            diemTongKet = diemTongKet + C + uuTien_1;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        }
        else if (khu_C.checked && doiTuong_1.checked) {
            diemTongKet = diemTongKet + C + uuTien_1;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_C.checked && doiTuong_2.checked) {
            diemTongKet = diemTongKet + C + uuTien_2;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_C.checked && doiTuong_3.checked) {
            diemTongKet = diemTongKet + C + uuTien_3;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_D.checked && doiTuong_0.checked) {
            diemTongKet = diemTongKet + D + uuTien_0;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_D.checked && doiTuong_1.checked) {
            diemTongKet = diemTongKet + D + uuTien_1;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_D.checked && doiTuong_2.checked) {
            diemTongKet = diemTongKet + D + uuTien_2;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        } else if (khu_D.checked && doiTuong_3.checked) {
            diemTongKet = diemTongKet + D + uuTien_3;
            if (diemTongKet > diemChuan) {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Đậu";
            } else {
                pInfo_1.innerHTML = diemTongKet;
                pInfo_2.innerHTML = "Rớt";
            }
        }
    } else {
        alert("Những giá trị yêu cầu nhập vui lòng > 0");
    }
}




/**
 * Bài 2
 * 
 * Đầu vào
 * Tạo biến chứa tên
 * Tạo biến chứa số KW
 *  biến giá 50kw đầu = 500 đ
 *  biến giá 50kw kế = 650 đ
 *  biến giá 100kw đầu = 850 đ
 *  biến giá 150kw đầu = 1100 đ
 *  biến giá còn lại = 1300 đ
 * 
 * Biến chứa giá trị 50kw đầu
 * Biến chứa giá trị 50kw kế
 * Biến chứa giá trị 100kw kế
 * Biến chứa giá trị 150kw kế
 * Biến chứa giá trị số kw còn lại
 * 
 * Tạo biến tính tổng tiền điện
 * 
 * 
 * 
 * Xử lý
 *  So sánh số Kw nhập trong khoảng từ 0 tới 50kw để tính 50kw đầu
 *  quá 50kw thì so sánh tiếp trong khoảng tờ 50 tới 100 để tính tiếp 50kw kế
 *  quá 100kw so sánh tiếp trong khoảng 100 tới 200 để tính 100kw kế
 *  quá 200kw so sánh tiếp trong khoảng 200 tới 350 để tính 150kw kế
 *  quá 350kw tính số kw còn lại 
 * 
 * 
 * Đầu ra
 * In giá trị 50kw đầu ra màn hình
 * In giá trị 50kw kế ra màn hình
 * In giá trị 100km kế ra màn hình
 * In giá trị 150kw kế ra màn hình
 * In giá trị kw còn lại ra màn hình
 * In tổng tiền điện ra màn hình
 * 
 */

const dau_50kw = 500;
const ke_50kw = 650;
const ke_100kw = 850;
const ke_150kw = 1100;
const kw_conLai = 1300;

let dien_dau = 0;
let dien_ke = 0;
let dien_ke100 = 0;
let dien_ke150 = 0;
let dien_conLai = 0;
let tongTienDien = 0;

const span50w_dau = document.getElementById("span50w_dau");
const span50w_ke = document.getElementById("span50w_ke");
const span100w_ke = document.getElementById("span100w_ke");
const span150w_ke = document.getElementById("span150w_ke");
const span_conlai = document.getElementById("span_conlai");
const span_tongTien = document.getElementById("span_tongTien");
const span_tenDien = document.getElementById("span_tenDien");

function tinhTienDien() {
    const ten = document.getElementById("ten").value;
    const soKw = document.getElementById("soKW").value * 1;

    if (0 <= soKw && soKw <= 50) {
        dien_dau = soKw * dau_50kw;
        tongTienDien = dien_dau;
        span50w_dau.innerHTML = dien_dau.toLocaleString();
        span50w_ke.innerHTML = 0;
        span100w_ke.innerHTML = 0;
        span150w_ke.innerHTML = 0;
        span_conlai.innerHTML = 0;
        span_tongTien.innerHTML = tongTienDien.toLocaleString() + " VNĐ";
        span_tenDien.innerHTML = ten;
    } else if (50 < soKw && soKw <= 100) {
        dien_dau = 50 * dau_50kw;
        dien_ke = (soKw - 50) * ke_50kw;
        tongTienDien = dien_dau + dien_ke;
        span50w_dau.innerHTML = dien_dau.toLocaleString();
        span50w_ke.innerHTML = dien_ke.toLocaleString();
        span100w_ke.innerHTML = 0;
        span150w_ke.innerHTML = 0;
        span_conlai.innerHTML = 0;
        span_tongTien.innerHTML = tongTienDien.toLocaleString() + " VNĐ";
        span_tenDien.innerHTML = ten;
    } else if (100 < soKw && soKw <= 200) {
        dien_dau = 50 * dau_50kw;
        dien_ke = 50 * ke_50kw;
        dien_ke100 = (soKw - 100) * ke_100kw;
        tongTienDien = dien_dau + dien_ke + dien_ke100;
        span50w_dau.innerHTML = dien_dau.toLocaleString();
        span50w_ke.innerHTML = dien_ke.toLocaleString();
        span100w_ke.innerHTML = dien_ke100.toLocaleString();
        span150w_ke.innerHTML = 0;
        span_conlai.innerHTML = 0;
        span_tongTien.innerHTML = tongTienDien.toLocaleString() + " VNĐ";
        span_tenDien.innerHTML = ten;
    } else if (200 < soKw && soKw <= 350) {
        dien_dau = 50 * dau_50kw;
        dien_ke = 50 * ke_50kw;
        dien_ke100 = 100 * ke_100kw;
        dien_ke150 = (soKw - 200) * ke_150kw;
        tongTienDien = dien_dau + dien_ke + dien_ke100 + dien_ke150;
        span50w_dau.innerHTML = dien_dau.toLocaleString();
        span50w_ke.innerHTML = dien_ke.toLocaleString();
        span100w_ke.innerHTML = dien_ke100.toLocaleString();
        span150w_ke.innerHTML = dien_ke150.toLocaleString();
        span_conlai.innerHTML = 0;
        span_tongTien.innerHTML = tongTienDien.toLocaleString() + " VNĐ";
        span_tenDien.innerHTML = ten;
    } else if (soKw > 350) {
        dien_dau = 50 * dau_50kw;
        dien_ke = 50 * ke_50kw;
        dien_ke100 = 100 * ke_100kw;
        dien_ke150 = 150 * ke_150kw;
        dien_conLai = (soKw - 350) * kw_conLai;
        tongTienDien = dien_dau + dien_ke + dien_ke100 + dien_ke150 + dien_conLai;
        span50w_dau.innerHTML = dien_dau.toLocaleString();
        span50w_ke.innerHTML = dien_ke.toLocaleString();
        span100w_ke.innerHTML = dien_ke100.toLocaleString();
        span150w_ke.innerHTML = dien_ke150.toLocaleString();
        span_conlai.innerHTML = dien_conLai.toLocaleString();
        span_tongTien.innerHTML = tongTienDien.toLocaleString() + " VNĐ";
        span_tenDien.innerHTML = ten;
    } else {
        alert("Vui lòng nhập số KW bằng 0 hoặc lớn hơn 0")
    }
}


/**
 * Tính thuế thu nhập cá nhân
 * 
 * Đầu vào
 * Tạo biến chứa tên
 * Biến số người phụ thuộc
 * Biến chứa giá trị số tiền thu nhập theo năm
 * 
 * 
 * XỬ lý
 * kiểm tra số người phục thuộc và thu nhập > 0 thì thực hiện bước dưới
 * nếu thu nhập trên năm > 60tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 5%
 * thu nhập trong khoảng từ 60tr đến 120tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 10%
 * thu nhập trong khoảng từ 120tr đến 210tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 15%
 * thu nhập trong khoảng từ 210tr đến 384tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 20%
 * thu nhập trong khoảng từ 384tr đến 624tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 25%
 * thu nhập trong khoảng từ 624tr đến 960tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 30%
 * thu nhập trên 960tr : [tổng thu nhập năm - 4tr - (số người phụ thuộc * 1.6tr)] * 35%
 * 
 * Đầu ra
 * In màn hình báo nhập lại nếu số người phụ thuộc và thu nhập nhập số < 0
 * In kết quả thu nhập cá nhân phải trả ra màn hình
 * 
 */

const thue_1 = 0.05;
const thue_2 = 0.1;
const thue_3 = 0.15;
const thue_4 = 0.2;
const thue_5 = 0.25;
const thue_6 = 0.3;
const thue_7 = 0.35;

let thueTNCN = 0;

function tinhThue() {
    const hoTen = document.getElementById("hoTen").value;
    const thuNhap = document.getElementById("thunhap").value * 1;
    const nguoiPhuThuoc = document.getElementById("nguoiPhuThuoc").value * 1;
    const span_hoTen = document.getElementById("span_hoTen");
    const span_tienThue = document.getElementById("span_tienThue");

    const thuNhapChiuThue = thuNhap - 4000000 - (nguoiPhuThuoc * 1600000);
    if (thuNhap >= 0 && nguoiPhuThuoc >= 0) {
        if (thuNhapChiuThue <= 60000000) {
            thueTNCN = thuNhapChiuThue * thue_1;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
            thueTNCN = thuNhapChiuThue * thue_2;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
            thueTNCN = thuNhapChiuThue * thue_3;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
            thueTNCN = thuNhapChiuThue * thue_4;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
            thueTNCN = thuNhapChiuThue * thue_5;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
            thueTNCN = thuNhapChiuThue * thue_6;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        } else if (thuNhapChiuThue > 960000000) {
            thueTNCN = thuNhapChiuThue * thue_7;
            span_hoTen.innerHTML = hoTen;
            span_tienThue.innerHTML = thueTNCN.toLocaleString() + " VNĐ";
        }
    } else {
        alert("Vui lòng không nhập số âm");
    }
}


/**
 * Tính tiền cáp
 * 
 * Đầu vào
 * Nhà dân
 * tạo biến chứa phí xử lý hóa đơn : 4.5$
 * tạo biến chứa phí dịch vụ cơ bản : 20.5$
 * tạo biến chứa phí thuê kênh cao cấp : 7.5$
 * tạo biến chứa phí xử lý hóa đơn : 4.5$
 * 
 * Doanh nghiệp
  tạo biến chứa phí xử lý hóa đơn : 15$
 * tạo biến chứa phí dịch vụ cơ bản : 75$ 10 kênh, mỗi kênh thêm 5$
 * tạo biến chứa phí thuê kênh cao cấp : 7.5$ 
 * tạo biến chứa phí xử lý hóa đơn : 50$
 * 
 * Xử lý
 * nếu chọn doanh nghiệp thì sẽ hiển số kênh kết nối, còn chọn nhà dân thì sẽ mất
 * TH: chọn nhà dân và gói cơ bản = phí xử lý hóa đơn + phí gói cơ bản
 *  chọn nhà dân và gói cao cấp = phí xử lý hóa đơn + (phí cao cấp * số kênh cao cấp)
 * 
 * TH: chọn doanh nghiệp 
 *  -gói cơ bản nếu chỉ có 10 kênh kết nói đầu = phí xử lý hóa đơn + (phí cơ bản * số kênh kết nối)
 *  -gói cơ bản từ kênh thứ 10 trở lên = phí xử lý hóa đơn + (phí cơ bản * 10) + (5 * số kênh nối)
 * 
 * chọn doanh nghiệp và gói cao cấp = phí xử lý hóa đơn + (phí cao cấp * số kênh cao cấp)
 * 
 * Đầu ra
 * In mã khách hàng ra màn hình
 * Hiển thị tổng tiền cáp ra màn hình
 * 
 */

const nhaDan_hoaDon = 4.5;
const nhaDan_coBan = 20.5;
const nhaDan_caoCap = 7.5;

const doanhNghiep_hoaDon = 15;
const doanhNghiep_coBan = 7.5;
const doanhNghiep_caoCap = 50;

let tongTienCap = 0;

const divKetNoi = document.getElementById("divKetNoi");

function disableInput(radio) {
    if (radio.value === "doanhnghiep") {
        divKetNoi.style.display = "block";
    } else {
        divKetNoi.style.display = "none";
    }
}


function tinhTienCap() {
    const maKH = document.getElementById("maKH").value;
    const nhaDan = document.getElementById("nhaDan");
    const doanhNghiep = document.getElementById("doanhNghiep");

    const coban = document.getElementById("coban");

    const soKetNoi = document.getElementById("soKetNoi").value * 1;
    const kenhCaoCap = document.getElementById("kenhCaoCap").value * 1;

    const span_maKH = document.getElementById("span_maKH");
    const span_tienCap = document.getElementById("span_tienCap");

    if (nhaDan.checked) {
        if (coban.checked) {
            tongTienCap = nhaDan_hoaDon + nhaDan_coBan;
            span_maKH.innerHTML = maKH;
            span_tienCap.innerHTML = tongTienCap.toLocaleString() + " $";
        } else {
            tongTienCap = nhaDan_hoaDon + (nhaDan_caoCap * kenhCaoCap);
            span_maKH.innerHTML = maKH;
            span_tienCap.innerHTML = tongTienCap.toLocaleString() + " $";
        }
    } else if (doanhNghiep.checked) {
        if (coban.checked) {
            if (soKetNoi <= 10) {
                tongTienCap = doanhNghiep_hoaDon + (doanhNghiep_coBan * soKetNoi);
            } else {
                tongTienCap = doanhNghiep_hoaDon + (doanhNghiep_coBan * 10) + (5 * soKetNoi);
            }
            span_maKH.innerHTML = maKH;
            span_tienCap.innerHTML = tongTienCap.toLocaleString() + " $";
        } else {
            tongTienCap = doanhNghiep_hoaDon + (doanhNghiep_caoCap * kenhCaoCap);
            span_maKH.innerHTML = maKH;
            span_tienCap.innerHTML = tongTienCap.toLocaleString() + " $";
        }
    }
}