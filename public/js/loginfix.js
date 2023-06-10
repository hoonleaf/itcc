function Main(){
    location.href = 'mainpage.html';
    console.log(location.href);
}

function loginCheck(form){
    if(form.id.value == "") {
        alert('아이디를 입력하세요.');
        form.id.focus() ;
        return ;
    }
    if(form.pwd.value == "") {
        alert('비밀번호를 입력하세요.');
        form.pwd.focus() ;
        return ;
    }
    if(form.id.value == "qwer" && form.pwd.value == "1234"){
        alert('박현우님, 환영합니다!');
        location.href = 'l_mainpage.html';
    }
    else{
        alert('아이디와 비밀버호를 확인해주세요.')
        form.id.focus() ;
        return;
    }

}

/*function loginCheck(form) {
    const idNumber = document.getElementById('idNumber').value;
    const pwd = document.getElementById('pwd').value;
    
    const data = {
        idNumber: idNumber,
        pwd: pwd
    };
    
    fetch('/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(result => {
        if (result.success) {
            alert('로그인 성공!');
            // 로그인 성공 후 처리할 작업을 여기에 추가합니다.
        } else {
            alert('로그인 실패. 아이디와 비밀번호를 확인하세요.');
        }
        })
        .catch(error => {
        console.error('로그인 중 오류 발생:', error);
        });
    
  }

*/



