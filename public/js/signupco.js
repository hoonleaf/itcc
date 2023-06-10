function formCheck(form) {
    //유효성 검사
    if(form.name.value == "") {
        alert('이름을 입력하세요.');
        form.name.focus() ;
        return ;
    }
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
    if(form.pwd.value.length < 8 || form.pwd.value.length > 15) {
        alert('비밀번호는 8 ~ 15자 사이로 입력하세요.');
        form.pwd.focus() ;
        return ;
    }
    if(form.pwdCheck.value == "") {
        alert('비밀번호 확인을 입력하세요.');
        form.pwdCheck.focus() ;
        return ;
    }
  // 패스워드가 같은지 확인하기
    if(form.pwdCheck.value != form.pwd.value){
        alert('비밀번호가 일치하지 않습니다.');
        form.pwdCheck.focus();
        return;
    }
    if(form.email.value == "") {
        alert('e-mail을 입력하세요.');
        form.FrontMail.focus() ;
        return ;
    }
    console.log(form);
    form.submit();
    }


function check_pw(){

    var pwd = document.getElementById('pwd').value;
    if(document.getElementById('pwd').value !='' && document.getElementById('pwdCheck').value!=''){
        if(document.getElementById('pwd').value==document.getElementById('pwdCheck').value){
            document.getElementById('check').innerHTML='비밀번호가 일치합니다.'
            document.getElementById('check').style.color='blue';
        }
        else{
            document.getElementById('check').innerHTML='비밀번호가 일치하지 않습니다.';
            document.getElementById('check').style.color='red';
        }
    }
    if(pwd.length < 8 || pwd.length > 15){
        window.alert('비밀번호는 8 ~ 15자 사이로 입력해주세요.');
        document.getElementById('pwd').value='';
    }
    }    
    
    function mail_pick(){

        document.frm.BackMail.value = document.frm.mailpick.value;
    
    }

    function MainpageGO(){
        location.href = 'c_signup.html';
        console.log(location.href);


    }

    function idCheck(form){
    
        let value = document.getElementById("studentNumber").value;
        console.log(`/test1?studentNumber=${value}`);
    
        fetch(`/test1?studentNumber=${value}`)
        .then( async (response) => {
            const data = await response.json();
            console.log(document.getElementById("studentNumber").innerHTML);
            if( document.getElementById("studentNumber").value==''){
                alert("아이디를 입력해주세요.")
                return;
            } else if(data.isUser == "true"){
                document.getElementById("studentNumber").value="";
                alert("존재하는 아이디입니다.")
                return ;
            }
                alert("사용가능한 아이디입니다.")
        })
        .catch((error) => console.log("error: ", error));   
    
    }

    function emailCheck(){
        let value = document.getElementById("emailNumber").value;
        console.log(`/test2?emailNumber=${value}`);
    
        fetch(`/test2?emailNumber=${value}`)
        .then( async (response) => {
            const data = await response.json();
            console.log(document.getElementById("emailNumber").innerHTML);
            if( document.getElementById("emailNumber").value==''){
                alert("이메일을 입력하세요.")
                return;
            } else if(data.isEmail == "true"){
                document.getElementById("emailNumber").value="";
                alert("존재하는 이메일입니다.")
                return ;
            }
                alert("사용가능한 이메일입니다.")
        })
        .catch((error) => console.log("error: ", error));   
    
    }


