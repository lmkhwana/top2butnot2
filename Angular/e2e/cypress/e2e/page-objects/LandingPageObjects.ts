class LandingPageObjects {

    //#region constants

    private dashboardUrl: string = 'http://localhost:4200/dashboard';
    private noOfTopHeroes: number = 4;

    //#endregion

    //#region web elements

    private topHeros: string = '.heroes-menu';
    private heroList: string = '.heroes';
    
    private topHero = (heroName: string) => { return "//a[normalize-space(text())='"+ heroName +"']" };
    private heroDetailsTitle = (heroName: string) => { return "//h2[contains(text(), '"+ heroName +" Details')]" };
    private tabButton = (tabName: string) => { return "//a[text()='"+ tabName +"']" };
    private heroListItem = (heroName: string) => { return "//a[contains(text(),'"+ heroName +"')]" };

    //#endregion

    //#region actions

    public navigateToLandingPage() : void {
        cy.visit(this.dashboardUrl);
    }

    public viewHeroDetails(heroName: string): void {
        cy.xpath(this.topHero(heroName)).click();
    }

    public viewHeroList(tabName: string) : void {
        cy.xpath(this.tabButton(tabName)).click();
    }

    //#endregion

    //#region assertions 

    public verifyTheDisplayOfTopHeroes() : void {
        cy.get(this.topHeros).should("be.visible");
        cy.get(this.topHeros).find('a').should("have.length", this.noOfTopHeroes);
    }

    public verifyTheDisplayOfHeroDetails(heroName: string) : void {
        cy.xpath(this.heroDetailsTitle(heroName)).should("be.visible");
    }

    public verifyTheDisplayOfHeroList() : void {
        cy.get(this.heroList).should("be.visible");
    }

    public verifyTheDisplayOfHeroNameOnList(heroName: string) : void {
        cy.xpath(this.heroListItem(heroName)).should("be.visible");
    }

    //#endregion

}

export default LandingPageObjects;