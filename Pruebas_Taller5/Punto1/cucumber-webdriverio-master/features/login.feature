#Complete siguiendo las instrucciones del taller.
Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario Outline: Login failed with wrong inputs

  Given I go to losestudiantes home screen
    When I open the login screen
    And I fill with <email> and <password>
    And I try to login
    Then I expect to see <error>

    Examples:
      | email            | password | error                    |
      |                  |          | Ingresa una contraseña   |
      | miso@gmail.com   |    1234  | Upss! El correo y        |

Scenario: Login pass
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill the form
    And I try to register
    And I ok exitoso screen
    And I try to click cuenta and salir
    And I open the login screen
    And I fill a right email and password
    And I try to login
    Then I expect to verify login