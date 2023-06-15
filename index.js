const express = require('express');
const session = require('express-session');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const mysql = require('mysql');
const app = express();
const path = require('path');
const static = require('serve-static');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 5000

/* 입력폼 넣어주기 */
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/js'));
app.use(express.static('public/img'));
app.use(express.static('public/file'));


/* 페이지 연결 */
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'mainpage.html')));
app.get('/mainpage.html', (req, res) => res.sendFile(path.join(__dirname, 'mainpage.html')));
app.get('/l_mainpage.html', (req, res) => res.sendFile(path.join(__dirname, 'l_mainpage.html')));

app.get('/mypage_main.html', (req, res) => res.sendFile(path.join(__dirname, 'mypage_main.html')));
app.get('/namechange.html', (req, res) => res.sendFile(path.join(__dirname, 'namechange.html')));
app.get('/namechange2.html', (req, res) => res.sendFile(path.join(__dirname, 'namechange2.html')));
app.get('/pwdchange.html', (req, res) => res.sendFile(path.join(__dirname, 'pwdchange.html')));
app.get('/pwdchange2.html', (req, res) => res.sendFile(path.join(__dirname, 'pwdchange2.html')));
app.get('/pwdchange3.html', (req, res) => res.sendFile(path.join(__dirname, 'pwdchange3.html')));
app.get('/emailchange.html', (req, res) => res.sendFile(path.join(__dirname, 'emailchange.html')));
app.get('/emailchange2.html', (req, res) => res.sendFile(path.join(__dirname, 'emailchange2.html')));
app.get('/memberout.html', (req, res) => res.sendFile(path.join(__dirname, 'memberout.html')));
app.get('/memberout2.html', (req, res) => res.sendFile(path.join(__dirname, 'memberout2.html')));
app.get('/memberout3.html', (req, res) => res.sendFile(path.join(__dirname, 'memberout3.html')));
app.get('/scorecheck.html', (req, res) => res.sendFile(path.join(__dirname, 'scorecheck.html')));

app.get('/cbt.html', (req, res) => res.sendFile(path.join(__dirname, 'cbt.html')));
app.get('/cbtstart.html', (req, res) => res.sendFile(path.join(__dirname, 'cbtstart.html')));
app.get('/cbtexam.html', (req, res) => res.sendFile(path.join(__dirname, 'cbtexam.html')));
app.get('/cbtOMR.html', (req, res) => res.sendFile(path.join(__dirname, 'cbtOMR.html')));

app.get('/cbt2.html', (req, res) => res.sendFile(path.join(__dirname, 'cbt2.html')));
app.get('/02.html', (req, res) => res.sendFile(path.join(__dirname, '02.html')));
app.get('/03.html', (req, res) => res.sendFile(path.join(__dirname, '03.html')));
app.get('/04.html', (req, res) => res.sendFile(path.join(__dirname, '04.html')));
app.get('/05.html', (req, res) => res.sendFile(path.join(__dirname, '05.html')));
app.get('/06.html', (req, res) => res.sendFile(path.join(__dirname, '06.html')));
app.get('/07.html', (req, res) => res.sendFile(path.join(__dirname, '07.html')));
app.get('/08.html', (req, res) => res.sendFile(path.join(__dirname, '08.html')));
app.get('/09.html', (req, res) => res.sendFile(path.join(__dirname, '09.html')));
app.get('/10.html', (req, res) => res.sendFile(path.join(__dirname, '10.html')));
app.get('/11.html', (req, res) => res.sendFile(path.join(__dirname, '11.html')));
app.get('/12.html', (req, res) => res.sendFile(path.join(__dirname, '12.html')));
app.get('/13.html', (req, res) => res.sendFile(path.join(__dirname, '13.html')));
app.get('/14.html', (req, res) => res.sendFile(path.join(__dirname, '14.html')));
app.get('/15.html', (req, res) => res.sendFile(path.join(__dirname, '15.html')));
app.get('/16.html', (req, res) => res.sendFile(path.join(__dirname, '16.html')));
app.get('/17.html', (req, res) => res.sendFile(path.join(__dirname, '17.html')));
app.get('/18.html', (req, res) => res.sendFile(path.join(__dirname, '18.html')));
app.get('/20.html', (req, res) => res.sendFile(path.join(__dirname, '20.html')));
app.get('/21.html', (req, res) => res.sendFile(path.join(__dirname, '21.html')));
app.get('/22.html', (req, res) => res.sendFile(path.join(__dirname, '22.html')));
app.get('/23.html', (req, res) => res.sendFile(path.join(__dirname, '23.html')));
app.get('/24.html', (req, res) => res.sendFile(path.join(__dirname, '24.html')));
app.get('/25.html', (req, res) => res.sendFile(path.join(__dirname, '25.html')));
app.get('/answer.html', (req, res) => res.sendFile(path.join(__dirname, 'answer.html')));

app.get('/ginengsa.html', (req, res) => res.sendFile(path.join(__dirname, 'ginengsa.html')));
app.get('/sanupgisa.html', (req, res) => res.sendFile(path.join(__dirname, 'sanupgisa.html')));
app.get('/gisa.html', (req, res) => res.sendFile(path.join(__dirname, 'gisa.html')));

app.get('/loginfix.html', (req, res) => res.sendFile(path.join(__dirname, 'loginfix.html')));

app.get('/c_signup.html', (req, res) => res.sendFile(path.join(__dirname, 'c_signup.html')));
app.get('/signup.html', (req, res) => res.sendFile(path.join(__dirname, 'signup.html')));
app.get('/signupco.html', (req, res) => res.sendFile(path.join(__dirname, 'signupco.html')));
app.get('/signup_ok.html', (req, res) => res.sendFile(path.join(__dirname, 'signup_ok.html')));

app.get('/communityfix.html', (req, res) => res.sendFile(path.join(__dirname, 'communityfix.html')));
app.get('/fix.html', (req, res) => res.sendFile(path.join(__dirname, 'fix.html')));
app.get('/view.html', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
app.get('/write.html', (req, res) => res.sendFile(path.join(__dirname, 'write.html')));

app.get('/gongjisahang.html', (req, res) => res.sendFile(path.join(__dirname, 'gongjisahang.html')));

app.get('/itstudy.html', (req, res) => res.sendFile(path.join(__dirname, 'itstudy.html')));

app.get('/samplequestion.html', (req, res) => res.sendFile(path.join(__dirname, 'samplequestion.html')));
app.get('/questiondownload.html', (req, res) => res.sendFile(path.join(__dirname, 'questiondownload.html')));
app.get('/questiondownload1.html', (req, res) => res.sendFile(path.join(__dirname, 'questiondownload1.html')));
app.get('/questiondownload2.html', (req, res) => res.sendFile(path.join(__dirname, 'questiondownload2.html')));
app.get('/questiondownload3.html', (req, res) => res.sendFile(path.join(__dirname, 'questiondownload3.html')));
app.get('/questiondownload4.html', (req, res) => res.sendFile(path.join(__dirname, 'questiondownload4.html')));
app.get('/questiondownload5.html', (req, res) => res.sendFile(path.join(__dirname, 'questiondownload5.html')));




app.get('/', (req, res) => res.send(req.body));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


app.use(bodyParser.urlencoded({extended : true}));


const con = mysql.createConnection({
    host : 'cbtuser.crdxng4rto2j.ap-northeast-2.rds.amazonaws.com',
    user : 'admin',
    password : 'qwer1234',
    database : 'cbtuser'
});

app.post('/signup_ok.html', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    const pwd = req.body.pwd;
    const email = req.body.email;
    const sql = "INSERT INTO cbtuser value(?, ?, ?, ?)"
    con.query(sql, [id, name, pwd, email], function(err, result, field){
        if(err) throw err;
        console.log(result);
        res.sendFile(path.join(__dirname, 'signup_ok.html'));
    })

});

/* 1. 테이블 생성하기 */
/*
con.connect(function (err) {
    if(err) throw err;
    console.log('Connected');

    con.query('CREATE DATABASE cbtuser', function(err, result){
        if(err) throw err;
        console.log('database created');
    })
})
*/

/* 2. 테이블 구조 만들기 id, name, pwd, email */ 
/*con.connect(function (err) {
    if(err) throw err;
    console.log('Connected');
    const sql = 'CREATE TABLE cbtuser(' +
        'id varchar(10) not null primary key,' +
        'name varchar(20) not null,' +
        'pwd varchar(20) not null,' +
        'email varchar(30) not null)'

    con.query(sql, function(err, result){
        if(err) throw err;
        console.log('table created');
    })
})*/


/* 3. 테이블 검색하기 */
con.connect(function (err){
    if(err) throw err;
    console.log('Connected');
    const sql = 'SELECT * FROM cbtuser'

    con.query(sql, function(err, result, field){
        if(err) throw err;
        console.log(result);
    })
});

app.get('/test1', async (req, res, next)=> {
    
    const idNumber = req.param('idNumber');

    const sql = 'SELECT * FROM cbtuser where id = ?'

    const isUser = await new Promise((resolve, reject) => {
        con.query(sql, [idNumber], function(err, result, field){
            if(err)
                reject(err);
            else
                resolve(result);  
        });
        
    })
    isUser.length ? res.send({isUser: "true"}): res.send({isUser: "false"})
})


app.get('/test2', async (req, res, next)=> {
    
    const emailNumber = req.param('emailNumber');

    const sql = 'SELECT * FROM cbtuser where email = ?'

    const isEmail = await new Promise((resolve, reject) => {
        con.query(sql, [emailNumber], function(err, result, field){
            if(err)
                reject(err);
            else
                resolve(result);  
        });
        
    })
    isEmail.length ? res.send({isEmail: "true"}): res.send({isEmail: "false"})
})



/* --------------------로그인------------------------- */
/*passport.use(new LocalStrategy(
    {
      usernameField: 'idNumber',
      passwordField: 'pwd'
    },
    (idNumber, pwd, done) => {
      const sql = `SELECT * FROM cbtuser WHERE id = ? AND pwd = ?`;
      con.query(query, [idNumber, pwd], (error, results) => {
        if (error) {
          console.error('로그인 중 오류 발생:', error);
          return done(null, false);
        } else {
          if (results.length > 0) {
            return done(null, results[0]);
          } else {
            return done(null, false);
          }
        }
      });
    }
  ));
  
  passport.serializeUser((user, done) => {
    done(null, user.idNumber);
  });
  
  passport.deserializeUser((idNumber, done) => {
    const query = `SELECT * FROM cbtuser WHERE idNumber = ?`;
    connection.query(query, [idNumber], (error, results) => {
      if (error) {
        console.error('사용자 조회 중 오류 발생:', error);
        return done(error);
      } else {
        return done(null, results[0]);
      }
    });
  });
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
  app.use(passport.initialize());
  app.use(passport.session());
  
  app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }));
  
  app.get('/', (req, res) => {
    res.send('로그인 성공!');
  });
  
  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/loginfix.html');
  });
  


*/



/* 4. 테이블에 데이터 삽입하기 */
/*const sql = "INSERT INTO cbtuser(id, name, pwd, email) values ('miran123', '김일환', 'qwe123456', 'miran@naver.com') "
con.query(sql, function(err, result, fields){
    if(err) throw err;
    console.log(result);
});*/



/* 테이블 브라우저에 보여주기 */
/*app.get('/', (req, res) => {
    const sql = 'SELECT * FROM cbtuser'

    con.query(sql, function(err, result, field){
        if(err) throw err;
        res.send(result);
    })
});*/

app.get('/', (req, res) =>{
    const sql = "SELECT * FROM cbtuser";
    con.query(sql, function(err, result, fields){
        if(err) throw err;
        res.render('index', {cbtuser : result});
    })
});


/* 브라우저에서 보내온 데이터를 저장하기*/
/*app.post('/' , (req, res) => {
    const sql = "INSERT INTO cbtuser SET ?"

    con.query(sql, req.body, function(err, result, field){
        if(err) throw err;
        console.log(result);
        res.send('등록이 완료되었습니다.');
    })
})
*/

