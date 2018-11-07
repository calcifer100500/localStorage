/**solution with local storage**/

const RED = "#ef3e3e";
const GREEN = "#2ac767";
const BLUE = "#2f96dc";
const WHITE = "ffffff";

window.onload = function() {
    let red = document.getElementById('red');
    let green = document.getElementById('green');
    let blue = document.getElementById('blue');

    red.addEventListener('click', function (){clickButton(RED)});
    green.addEventListener('click', function (){clickButton(GREEN)});
    blue.addEventListener('click', function (){clickButton(BLUE)});

    function clickButton(color) {
        document.getElementsByTagName('body')[0].style.backgroundColor = color;
        localStorage.setItem('backgroundColor', color);
    }

    if (localStorage.getItem('backgroundColor')) {
        document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.getItem('backgroundColor');
    } else {
        document.getElementsByTagName('body')[0].style.backgroundColor = WHITE;
    }

    /** form login **/
    /** validation **/
    let form = document.getElementById('form');
    let login = document.getElementById('login');
    let password = document.getElementById('password');
    let regexpLogin = /^[a-z0-9_-]{3,16}$/;
    let regexpPass = /^[a-z0-9]{3,8}$/;
    let submit = document.getElementById('submit');
    let loggedWindow = document.getElementById('loggedIn');
    let logOut = document.getElementById('logOut');

    function validateLogin() {
        if (login.value.match(regexpLogin)) {
            login.classList.remove('invalid');
            login.classList.add('valid');
        } else {
            login.classList.remove('valid');
            login.classList.add('invalid');
        }
    }

    function validatePass() {
        if (password.value.match(regexpPass)) {
            password.classList.remove('invalid');
            password.classList.add('valid');
        } else {
            password.classList.remove('valid');
            password.classList.add('invalid');
        }
    }

    function submitForm() {
        if((login.classList.contains('valid')) && (password.classList.contains('valid'))) {
            localStorage.setItem(login.value, password.value);
            form.style.display = 'none';
            loggedWindow.style.display = 'block';
            logOut.style.display = 'inline-block';
            hiLogin('Hello, ' + login.value + '!');
        } else {
            alert('all inputs must be valid!');
        }
    }

    login.addEventListener('keyup', validateLogin);
    password.addEventListener('keyup', validatePass);
    submit.addEventListener('click', submitForm);
    /** end of validation **/
    /** end of form login **/

    /**
     * function initiate hi message
     * @param message
     */

    function hiLogin(message) {
        let res = document.createElement('h1');
        res.className = 'hi';
        res.innerHTML = (message);
        loggedWindow.appendChild(res);
    }

    /**
     * function cleared hi message
     */

    function clearMessage() {
        let item = loggedWindow.querySelectorAll('h1.hi');
        if (item.length !== 0) {
            item[0].remove();
        }
    }

    /** end of hiMessage */

    /** function log out */
    function loginOut() {
        form.style.display = 'block';
        loggedWindow.style.display = 'none';
        logOut.style.display = 'none';
        localStorage.removeItem(login.value);
        clearMessage();
    }

    logOut.addEventListener('click', loginOut);
    /** end of log out */
};



