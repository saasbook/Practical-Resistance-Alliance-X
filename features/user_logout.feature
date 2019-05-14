Feature: User logout

  User should be able to log out.

  Background: Create user to db and log in user
    Given the user is loggedin
    And I am on the home page

  Scenario: User should log out
    When I follow "Logout"
    Then I should be on the category page