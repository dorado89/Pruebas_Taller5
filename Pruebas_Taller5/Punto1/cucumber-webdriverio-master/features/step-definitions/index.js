//Complete siguiendo las instrucciones del taller
var {defineSupportCode} = require('cucumber');
var {expect} = require('chai');
var nombre = "Mario " + Math.random();
var apellido = "Lin " + Math.random();
var correo = makeid(8) + "@sharklasers.com";
defineSupportCode(({Given, When, Then}) => {
    Given('I go to losestudiantes home screen', () => {
        browser.url('/');
        if (browser.isVisible('button=Cerrar')) {
            browser.click('button=Cerrar');
        }
        if (browser.isVisible('#cuenta')) {
            browser.element('#cuenta').click();
            browser.element('.dropdown-menu > li:nth-child(1) > a:nth-child(1)').click()
        }
    });
    Given('I have exitoso screen', () => {
        if (browser.isVisible('.sweet-alert')) {
            var cajaSignUp = browser.element('.sweet-alert');
            cajaSignUp.element('button=Ok').click();
        }
    });
    When('I ok exitoso screen', () => {
        browser.waitForVisible('.sweet-alert', 50000);
        var cajaSignUp = browser.element('.sweet-alert');
        cajaSignUp.element('button=Ok').click();
    });
    When('I open the login screen', () => {
        browser.waitForVisible('button=Ingresar', 50000);
        browser.click('button=Ingresar');
    });

    When('I fill a wrong email and password', () => {
        browser.waitForVisible('.cajaLogIn', 50000);
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys('wrongemail@example.com');

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('123467891');
    });

    When('I fill a right email and password', () => {
        browser.waitForVisible('.cajaLogIn', 50000);
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys(correo);

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('123467891');
    });

    When('I try to login', () => {
        var cajaLogIn = browser.element('.cajaLogIn');
        cajaLogIn.element('button=Ingresar').click();
    });

    Then('I expect to not be able to login', () => {
        browser.waitForVisible('.aviso.alert.alert-danger', 50000);
    });
    When(/^I fill with (.*) and (.*)$/, (email, password) => {
        browser.waitForVisible('.cajaLogIn', 50000);
        var cajaLogIn = browser.element('.cajaLogIn');

        var mailInput = cajaLogIn.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys(email);

        var passwordInput = cajaLogIn.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys(password);
    });
    Then('I expect to see {string}', error => {
        browser.waitForVisible('.aviso.alert.alert-danger', 50000);
        var alertText = browser.element('.aviso.alert.alert-danger').getText();
        expect(alertText).to.include(error);
    });
    When('I fill the form', () => {
        browser.waitForVisible('.cajaSignUp', 50000);
        var cajaSignUp = browser.element('.cajaSignUp');

        var nombreInput = cajaSignUp.element('input[name="nombre"]');
        nombreInput.click();
        nombreInput.keys(nombre);

        var apellidoInput = cajaSignUp.element('input[name="apellido"]');
        apellidoInput.click();
        apellidoInput.keys(apellido);

        var mailInput = cajaSignUp.element('input[name="correo"]');
        mailInput.click();
        mailInput.keys(correo);

        var degreeInput = cajaSignUp.element('select[name="idPrograma"]');
        degreeInput.selectByVisibleText('Ingeniería de Sistemas y Computación');

        var passwordInput = cajaSignUp.element('input[name="password"]');
        passwordInput.click();
        passwordInput.keys('123467891');

        var acceptInput = cajaSignUp.element('input[name="acepta"]');
        acceptInput.click();
    });
    When('I try to register', () => {
        var cajaSignUp = browser.element('.cajaSignUp');
        cajaSignUp.element('button=Registrarse').click();
    });
    When('I try to click cuenta and salir', () => {
        browser.element('#cuenta').click();
        browser.element('.dropdown-menu > li:nth-child(1) > a:nth-child(1)').click()
    });
    Then('I expect to verify exitoso', () => {
        browser.waitForVisible('.sweet-alert', 50000);
        var alertText = browser.element('.sweet-alert').getText();
        expect(alertText).to.include("exitoso");
    });
    Then('I expect to verify login', () => {
        browser.waitForVisible('#cuenta', 50000);
    });
});
function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}