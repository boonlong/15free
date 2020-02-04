
function domenu(obj, div ){
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
	showbadge();
}
function setSelBook(selbooklist){
    localStorage.setItem("List", selbooklist);
	
}
function adddb(itemNo) {
	if(localStorage.getItem("List")=="") {
		localStorage.List = itemNo;
	} else {
		removedb(itemNo);
		localStorage.List = localStorage.List + ",," + itemNo;
	}
	showbadge();
}

function removedb(itemNo) {
    var arr = localStorage.List.split(",,");
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == itemNo) {
            arr.splice(i, 1);
        }
    }
    localStorage.List = arr.join();
	showbadge();
}
function listdb(){
	var txt="";
	var arr = localStorage.List.split(",,");
	for (var i = 0; i < arr.length; i++) {
        txt += arr[i] + "<br />";
     }
	 return txt;
}
function getdb(){
    
    const data=[localStorage.getItem('List')];
    return data;
}
function showbadge(){
	var arr = localStorage.List.split(",,");
	var num=0;
    $('#badge1').html(arr.length); 
}

$('#divmenu').load('menu.html');
$('#divfoot').load('foot.html');