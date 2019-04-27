Feature: User Update Profie

    As a User
    I can Update my Profie

    Background: User is logged in
        Given the user is loggedin
        And I am on the category page

    Scenario: Enter profile page
        Given I am on the users profile page
        When I follow "Edit"
        Then I should be on the users edit page

    Scenario: Modify profile success
        Given I am on the users edit page
        When I fill in "user_password" with "123"
        And I fill in "user_password_confirmation" with "123"
        And I press "Save"
        Then I should be on the users profile page

    Scenario: Modify profile fail
        Given I am on the users edit page
        And I press "Save"
        Then I should be on the users profile page