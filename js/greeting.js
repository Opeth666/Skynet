const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#logout");

// String(문자열)로만 이루어진 변수이름은 대문자로 사용하는것이 관례
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// paintGreetings - 환영메시지 출력
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `${username} LOGGED IN`;
    greeting.classList.remove(HIDDEN_CLASSNAME)
}

// logOutBtn - 로그아웃 버튼
function logOutBtn() {
    logOut.classList.remove(HIDDEN_CLASSNAME);
    logOut.addEventListener("click", loggingout)
}

// loggingout - 로그아웃 기능
function loggingout(event) {
    // 저장된 유저네임키 삭제
    localStorage.removeItem(USERNAME_KEY);
    // 로그인폼 다시 로딩
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
    // 환영메시지와 로그아웃버튼 숨김
    greeting.classList.add(HIDDEN_CLASSNAME);
    logOut.classList.add(HIDDEN_CLASSNAME); 
}

// loginSubmit - 최초 이름입력 및 로그인
function loginSubmit(event) {
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY, loginInput.value)
    loginForm.classList.add(HIDDEN_CLASSNAME)
    paintGreetings();
    logOutBtn();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
// 저장된 유저네임이 없는 경우
if(savedUsername === null) {
    // 로그인폼 출력
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit)
} else {
    // 로그인 되어있는 경우 인사와 로그아웃 버튼 출력
    paintGreetings();
    logOutBtn();
}


