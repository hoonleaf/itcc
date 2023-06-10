function secondPageGo(form) {

    if(form.nowPass.value == "") {
        alert('현재 비밀번호를 입력하세요.');
        form.nowPass.focus() ;
        return ;
    }
    form.reset();

    location.href = 'memberout2.html';
    console.log(location.href);
}

function thirdPageGo() {
    location.href = 'memberout3.html';
    console.log(location.href);
}

function firstPageGo() {
    location.href = 'mypage_main.html';
    console.log(location.href);
}