function secondPageGo(form) {

    if(form.firstName.value == "") {
        alert('성을 입력하세요.');
        form.firstName.focus() ;
        return ;
    }

    if(form.lastName.value == "") {
        alert('이름을 입력하세요.');
        form.lastName.focus() ;
        return ;
    }
    form.reset();

    location.href = 'namechange2.html';
    console.log(location.href);
}

function firstPageGo() {
    location.href = 'mypage_main.html';
    console.log(location.href);
}