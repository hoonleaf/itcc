function secondPageGo(form) {
    if(form.nowEmail.value == "") {
        alert('e-mail을 입력하세요.');
        form.nowEmail.focus() ;
        return ;
    }
    if(form.newEmail.value == "") {
        alert('변경할 e-mail을 입력하세요.');
        form.newEmail.focus() ;
        return ;
    }
    form.reset();

    location.href = 'emailchange2.html';
    console.log(location.href);
}

function firstPageGo() {
    location.href = 'mypage_main.html';
    console.log(location.href);
}
