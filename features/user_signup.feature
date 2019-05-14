Feature: User can sign up

  User should be able to sign up themselves

  Scenario: User should be able to sign up and redirect to profile page
    Given I am on the sign up page
    And I fill in "user_email" with "test@example.com"
    And I fill in "user_password" with "123"
    And I fill in "user_password_confirmation" with "123"
    And I fill in "user_firstName" with "John"
    And I fill in "user_lastName" with "Davis"
    And I press "Sign Up"
    Then I should be on the users profile page