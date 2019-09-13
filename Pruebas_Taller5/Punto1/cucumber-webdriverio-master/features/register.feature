Feature: Registro into losestudiantes
    As an user I want to register myself within losestudiantes website in order to rate teachers

Scenario: Register pass
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill the form
    And I try to register
    Then I expect to verify exitoso
Scenario: Login pass
    Given I have exitoso screen
    When I try to click cuenta and salir
    And I open the login screen
    And I fill a right email and password
    And I try to login
    Then I expect to verify login