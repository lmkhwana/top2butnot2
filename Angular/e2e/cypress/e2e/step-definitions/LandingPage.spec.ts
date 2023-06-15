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

When(/^The user selects "([^"]*)"$/, (heroName: string) => {
	landingPageObject.viewHeroDetails(heroName);
});

Then(/^The hero "([^"]*)" details are displayed$/, (heroName: string) => {
	landingPageObject.verifyTheDisplayOfHeroDetails(heroName);
});


When(/^The user clicks the "([^"]*)"$/, (tabName: string) => {
	landingPageObject.viewHeroList(tabName);
});

Then(/^The list of "([^"]*)" should be displayed$/, (heroes: string) => {
	var splitted = heroes.split(",");
	splitted.forEach(value => {
		landingPageObject.verifyTheDisplayOfHeroNameOnList(value)
	});
	
});


When(/^The user clicks the "([^"]*)"$/, (tabName: string) => {
	landingPageObject.viewHeroList(tabName);
});

When(/^The list of "([^"]*)" should be displayed$/, (heroes: string) => {
	var splitted = heroes.split(",");
	splitted.forEach(value => {
		landingPageObject.verifyTheDisplayOfHeroNameOnList(value)
	});
});

When(/^the user removes "([^"]*)"$/, (heroName: string) => {
	console.log(heroName);
	return true;
});

Then(/^the "([^"]*)" is removed on the hero list$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the number of heroes in the list decrease$/, () => {
	return true;
});





