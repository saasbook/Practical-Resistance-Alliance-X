Feature: User navigate between pages

  As a user
  I can navigate between differnt pages

  Background: I am on the home page

  Scenario: Go to category page from index page
    Given I am on the home page
    When I follow "GET STARTED"
    Then I should be on the category page