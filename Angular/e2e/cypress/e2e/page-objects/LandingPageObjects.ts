class LandingPageObjects {

    //constants
    url: string = 'http://localhost:4200/dashboard';
    noOfTopHeroes: number = 4;

    //web elements
    topHeros = '.heroes-menu';
    heroList = '.heroes';
    topHero = (heroName: string) => {return"//a[normalize-space(text())='"+heroName+"']"};
    heroDetailsTitle = (heroName: string) => {return "//h2[contains(text(), '"+heroName+" Details')]"};
    tabButton = (tabName: string) => {return "//a[text()='"+tabName+"']"};
    heroListItem=(heroName: string) => {return "//a[contains(text(),'"+heroName+"')]"}

    //actions 
    navigateToLandingPage() : void {
        cy.visit(this.url);
    }

    viewHeroDetails(heroName: string) : void {
        cy.xpath(this.topHero(heroName)).click();
    }

    viewHeroList(tabName: string) : void {
        cy.xpath(this.tabButton(tabName)).click();
    }

    //assertion 
    verifyTheDisplayOfTopHeroes() : void {
        cy.get(this.topHeros).should("be.visible");
        cy.get(this.topHeros).find('a').should("have.length", this.noOfTopHeroes);
    }

    verifyTheDisplayOfHeroDetails(heroName: string) : void {
        cy.xpath(this.heroDetailsTitle(heroName)).should("be.visible");
    }

    verifyTheDisplayOfHeroList() : void {
        cy.get(this.heroList).should("be.visible");
    }
    verifyTheDisplayOfHeroNameOnList(heroName: string) : void {
        cy.xpath(this.heroListItem(heroName)).should("be.visible");
    }

}

export default LandingPageObjects;