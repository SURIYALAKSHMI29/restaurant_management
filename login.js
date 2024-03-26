function check(){
    var cat=document.getElementsByName("cate");
    for (const c of cat) {
        if (c.checked) {
            selectedValue = c.value;
            break;
        }
    }
    if (selectedValue== 'admin') {
        window.open('home.html');
    } else if (selectedValue == 'Employee') {
        window.open('emp_attendance.html');
        //window.location.href = 'emp_attendance.html';
    } else if (selectedValue=='Customer') {
        window.open('menu.html');
    } else {
        alert('Please select a destination!');
    }
}


