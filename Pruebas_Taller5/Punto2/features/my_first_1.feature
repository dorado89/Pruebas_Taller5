Feature: Opening the Taximetro screen

  Scenario: As a user I want to be able to open the taximetro screen from the side menu the first time I open the app
    Given I press "Paraderos"               
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    And I press "Taximetro"
    Then I should see "Unidades"
  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"               
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    And I press "Ayuda"
    Then I should see "Calcular ruta con horario"
  Scenario: As a user I want to be able to open the help screen from the side menu the first time I open the app
    Given I press "Paraderos"               
    #button to remove the splash screen
    When I swipe left
    #to open te menu
    And I press "Ayuda"
    Then I should see "Calcular ruta con horario"
