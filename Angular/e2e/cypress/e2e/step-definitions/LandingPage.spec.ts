import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import LandingPageObjects from "../page-objects/LandingPageObjects";

const landingPageObject = new LandingPageObjects();

//#region Testing for the landing page display of four top heroes

Given(/^the user is on the landing page$/, () => {
	landingPageObject.navigateToLandingPage();
});

Then(/^The four top heroes are displayed$/, () => {
	landingPageObject.verifyTheDisplayOfTopHeroes();
});

//#endregion

//#region Testing for a hero click to access and see the hero details page

When(/^The user selects "([^"]*)"$/, (heroName: string) => {
	landingPageObject.viewHeroDetails(heroName);
});

Then(/^The hero "([^"]*)" details are displayed$/, (heroName: string) => {
	landingPageObject.verifyTheDisplayOfHeroDetails(heroName);
});

//#endregion

//#region Testing for a heroes tab click to access and see the hero list oage

When(/^The user clicks the "([^"]*)"$/, (tabName: string) => {
	landingPageObject.viewHeroList(tabName);
});

Then(/^The list of "([^"]*)" should be displayed$/, (heroes: string) => {
	var splitted = heroes.split(",");
	
	splitted.forEach(value => {
		landingPageObject.verifyTheDisplayOfHeroNameOnList(value);
	});
});

//#endregion

//#region Testing for the delete functionality of a hero

When(/^The user clicks the "([^"]*)"$/, (tabName: string) => {
	landingPageObject.viewHeroList(tabName);
});

When(/^The list of "([^"]*)" should be displayed$/, (heroes: string) => {
	var splitted = heroes.split(",");

	splitted.forEach(value => {
		landingPageObject.verifyTheDisplayOfHeroNameOnList(value);
	});
});

When(/^the user removes "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the "([^"]*)" is removed on the hero list$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^the number of heroes in the list decrease$/, () => {
	return true;
});

//#endregion
