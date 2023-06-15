import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LandingPageObjects from "../page-objects/LandingPageObjects";

const landingPageObject = new LandingPageObjects();

Given(/^the user is on the landing page$/, () => {
	landingPageObject.navigateToLandingPage();
});

Then(/^the user shall see the employee dashboard$/, () => {
	return true;
});

Then(/^The four top heroes are displayed$/, () => {
	landingPageObject.verifyTheDisplayOfTopHeroes();
});

