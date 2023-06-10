function secondPageGo(form) {

    if(form.nowPassword.value == "") {
        alert('비밀번호를 입력하세요.');
        form.nowPassword.focus() ;
        return ;
    }

    if(form.nowPassword.value.length < 8 || form.nowPassword.value.length > 15) {
        alert('비밀번호는 8 ~ 15자 까지 입력 가능합니다.');
        form.nowPassword.focus() ;
        return ;
    }
    form.reset();

    location.href = 'pwdchange2.html';
    console.log(location.href);
}

function thirdPageGo(form) {

    if(form.newPassword.value == "") {
        alert('비밀번호를 입력하세요.');
        form.newPassword.focus() ;
        return ;
    }

    if(form.newPassword.value.length < 8 || form.newPassword.value.length > 15) {
        alert('비밀번호는 8 ~ 15자 까지 입력 가능합니다.');
        form.newPassword.focus() ;
        return ;
    }

    if(form.newPassword2.value == "") {
        alert('비밀번호 확인을 입력하세요.');
        form.newPassword2.focus() ;
        return ;
    }
    // 패스워드가 같은지 확인하기
    if(form.newPassword.value != form.newPassword2.value){
         alert('비밀번호가 일치하지 않습니다.');
         form.newPassword2.focus();
         return;
     }
    form.reset();

    location.href = 'pwdchange3.html';
    console.log(location.href);
}


function firstPageGo() {
    location.href = 'mypage_main.html';
    console.log(location.href);
}