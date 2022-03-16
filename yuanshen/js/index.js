var allneed_info_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0]


// 天赋每个等级消耗的资源  [绿色天赋书，蓝色天赋书，紫色天赋书，灰色掉落物，绿色掉落物，蓝色掉落物,周本材料，皇冠，摩拉]
function dj_info(n) {
    if(n == 2){
        return [3, 0, 0, 6, 0, 0, 0, 0, 12500];
    }
    else if(n == 3){
        return [0, 2, 0, 0, 3, 0, 0, 0, 17500];
    }
    else if(n == 4){
        return [0, 4, 0, 0, 4, 0, 0, 0, 25000];
    }
    else if(n == 5){
        return [0, 6, 0, 0, 6, 0, 0, 0, 30000];
    }
    else if(n == 6){
        return [0, 9, 0, 0, 9, 0, 0, 0, 37500];
    }
    else if(n == 7){
        return [0, 0, 4, 0, 0, 4, 1, 0, 120000];
    }
    else if(n == 8){
        return [0, 0, 6, 0, 0, 6, 1, 0, 260000];
    }
    else if(n == 9){
        return [0, 0, 12, 0, 0, 9, 2, 0, 450000];
    }
    else if(n == 10){
        return [0, 0, 16, 0, 0, 12, 2, 1, 700000];
    }
    else{
        return [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
}

// 数组对应元素相加
function arradd(a, b) {
    var need_info_arr = new Array();
    for (var i = 0; i < 9; i++){
        need_info_arr[i] = a[i] + b[i];
    }
    return need_info_arr;
}

// 按钮事件
function jisuan() {
    // 获取下拉列表的选中的值
    var a_start = Number(document.getElementById("a-start").value);
    var a_end = Number(document.getElementById("a-end").value);

    var e_start = Number(document.getElementById("e-start").value);
    var e_end = Number(document.getElementById("e-end").value);

    var q_start = Number(document.getElementById("q-start").value);
    var q_end = Number(document.getElementById("q-end").value);

    // 绑定EL对象
    var tfs_green_El = document.getElementsByTagName("input")[0];
    var tfs_blue_El = document.getElementsByTagName("input")[1];
    var tfs_purple_El = document.getElementsByTagName("input")[2];

    var dlw_grey_El = document.getElementsByTagName("input")[3];
    var dlw_green_El = document.getElementsByTagName("input")[4];
    var dlw_blue_El = document.getElementsByTagName("input")[5];

    var zhouben_El = document.getElementsByTagName("input")[6];
    var huangguan_El = document.getElementsByTagName("input")[7];
    var mola_El = document.getElementsByTagName("input")[8];

    // 计算材料 每个天赋从开始等级到结束等级
    // 数组清零
    allneed_info_arr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    // 框清空
    tfs_green_El.value = "";
    tfs_blue_El.value = "";
    tfs_purple_El.value = "";
    dlw_grey_El.value = "";
    dlw_green_El.value = "";
    dlw_blue_El.value = "";
    zhouben_El.value = "";
    huangguan_El.value = "";
    mola_El.value = "";

    while (a_start <= a_end){
            allneed_info_arr = arradd(allneed_info_arr, dj_info(a_start));
            a_start += 1;
    }
    while (e_start <= e_end){
            allneed_info_arr = arradd(allneed_info_arr, dj_info(e_start));
            e_start += 1;
    }
    while (q_start <= q_end){
            allneed_info_arr = arradd(allneed_info_arr, dj_info(q_start));
            q_start += 1;
    }

    // 数据写入输入框中
    tfs_green_El.value = String(allneed_info_arr[0]);
    tfs_blue_El.value = String(allneed_info_arr[1]);
    tfs_purple_El.value = String(allneed_info_arr[2]);
    dlw_grey_El.value = String(allneed_info_arr[3]);
    dlw_green_El.value = String(allneed_info_arr[4]);
    dlw_blue_El.value = String(allneed_info_arr[5]);
    zhouben_El.value = String(allneed_info_arr[6]);
    huangguan_El.value = String(allneed_info_arr[7]);
    mola_El.value = String(allneed_info_arr[8]);
}



