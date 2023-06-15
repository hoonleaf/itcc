function secondPageGo(form) {

    if(form.nowPassword.value == "") {
        alert('비밀번호를 입력하세요.');
        form.nowPassword.focus() ;
        return ;
    }

/*    if(form.nowPassword.value.length < 8 || form.nowPassword.value.length > 15) {
        alert('비밀번호는 8 ~ 15자 까지 입력 가능합니다.');
        form.nowPassword.focus() ;
        return ;
    }
    form.reset();
*/
    if(form.nowPassword.value == "1q2w3e4r"){
        location.href = 'pwdchange2.html';
        console.log(location.href);
    }
    else{
        alert("비밀번호를 확인해주세요");
    }


}

function thirdPageGo(form) {

    if(form.newPassword.value == "") {
        alert('새로운 비밀번호를 입력하세요.');
        form.newPassword.focus() ;
        return ;
    }
    if(form.newPassword.value == "1q2w3e4r"){
        alert('현재 비밀번호와 같습니다. 다시 입력해주세요.');
        form.newPassword.focus();
        return;
    }

    if(form.newPassword2.value == "") {
        alert('비밀번호를 입력하세요.');
        form.newPassword2.focus() ;
        return ;
    }
    // 패스워드가 같은지 확인하기
    if(form.newPassword.value != form.newPassword2.value){
         alert('비밀번호가 일치하지 않습니다.');
         form.newPassword2.focus();
         return;
    }

    location.href = 'pwdchange3.html';
    console.log(location.href);
}


function firstPageGo() {
    location.href = 'mypage_main.html';
    console.log(location.href);
}