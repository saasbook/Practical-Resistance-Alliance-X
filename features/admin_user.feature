Feature: Admin can manage users

  As an Admin
  I can see a table of user and remove users

  Background: Admin has been added to db

    Given the user is created

    And the admin is created

    And the admin is loggedin

  Scenario: Admin can see users table
    Given I am on the users page
    Then I should see "Users Table"

  Scenario: Admin can see other users' profile
    Given I am on the users page
    Then I follow "Show"
    Then I should be on the users profile page