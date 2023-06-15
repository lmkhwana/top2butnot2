Feature: LandingPage Functionality

    This Feature tests login scenarios

    Background: 
        Given the user is on the landing page

    Scenario: As a toh user, I want to navigate to landingpage in order to see the dashboard
        Then the user shall see the employee dashboard

    Scenario: As a TOH user, I want to navigate to dashboard in order to see top 4 Heroes displayed
        Then The four top heroes are displayed

    Scenario Outline: As a TOH user, I want to select a hero from the dashboard in order to see the hero details displayed
        When The user selects "<heroName>"
        Then The hero "<heroTitle>" details are displayed
        Examples:
            | heroName | heroTitle | 
            | Bombasto | BOMBASTO  | 
            | Magneta  | MAGNETA   |

    Scenario Outline: As a TOH user, I want to navigate to heroes page in order to see 9 heroes
        When The user clicks the "<tabName>"
        Then The list of "<heroes>" should be displayed
        Examples:
            |tabName| heroes |
            |Heroes | Dr. Nice,Bombasto,Celeritas,Magneta,RubberMan,Dynama,Dr. IQ,Magma,Tornado |

    
    Scenario Outline: As a TOH user, I want to remove a hero in order to see the hero list decrease
        When The user clicks the "<tabName>"
        And  The list of "<heroes>" should be displayed
        And the user removes "<heroName>"
        Then the "<heroName>" is removed on the hero list 
        And the number of heroes in the list decrease
        Examples:
            |heroName   |tabName| heroes |
            |Magneta    |Heroes | Dr. Nice,Bombasto,Celeritas,Magneta,RubberMan,Dynama,Dr. IQ,Magma,Tornado |

    Scenario: As a TOH user, I want to add a hero in order to see the hero list increase 
        Then The hero details are displayed

    Scenario: As a TOH user, I want to add a hero without a name in order to see the hero list remain the same
        Then The hero page should be displayed
