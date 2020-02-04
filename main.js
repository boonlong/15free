function domenu(obj, div) {
    $('li.current-menu-item').removeClass('current-menu-item');
    $(obj).addClass('current-menu-item');
    //console.log($(obj).children('a').attr('data-url'));
    var file = $(obj).children('a').attr('data-url');
    $('#' + div).load(file);
    if (file == 'history.html') {
        setTimeout(function() {
            $('#diva1').load('project.html');
        }, 500);
    } else if (file == 'print.html') {
        setTimeout(function() {
            window.print();
        }, 500);
    }
}

if (typeof(Storage) !== "undefined") {

    if (!localStorage.List) {
        resetdb();
    }
} else {
    alert("Browser ไม่รองรับการจัดเก็บข้อมูล Storage แนะนำให้เปลี่ยน Browser");
}

function resetdb() {
    localStorage.clear()
    localStorage.setItem("List", "");

}

function setSelBook(selbooklist) {
    //localStorage.setItem("List", selbooklist);
    localStorage.setItem("List", JSON.stringify(selbooklist));
    showbadge();
}

function adddb(itemNo) {
    if (localStorage.getItem("List") == "") {
        localStorage.List = itemNo;
    } else {
        removedb(itemNo);
        localStorage.List = localStorage.List + ",," + itemNo;
    }

}

function removedb(itemNo) {
    var arr = localStorage.List.split(",,");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == itemNo) {
            arr.splice(i, 1);
        }
    }
    localStorage.List = arr.join();

}

function listdb() {
    var txt = "";
    var arr = localStorage.List.split(",,");
    for (var i = 0; i < arr.length; i++) {
        txt += arr[i] + "<br />";
    }
    return txt;
}

function getdb() {
    let book = [];
    if (localStorage.getItem('List')) {
        /*const data = [localStorage.getItem('List')];
        return data;*/
        book = JSON.parse(localStorage.getItem('List'));
        //console.log(book);
    }
    showbadge();
    return book;
}

function showbadge() {
    let book = [];
    if (localStorage.getItem('List')) {
        book = JSON.parse(localStorage.getItem('List'));
        $('#badge1').html(book.length);
    } else {
        $('#badge1').html('0');
    }
}

$('#divmenu').load('menu.html');
$('#divfoot').load('foot.html');
showbadge();