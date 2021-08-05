Feature: End to End Ecommerce Validation


    Application Regression
    Background: Angular Practice page should be launched
        Given Angluar Practice page has been launched

    Scenario: Ecommerce products delivery
        Given I open ecommerce page
        When I add items to Cart
        Then Select the country submit
        And Validate thankyou message