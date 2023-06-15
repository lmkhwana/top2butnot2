class LandingPageObjects {

    //constants
    url: string = "http://localhost:4200/dashboard";
    noOfTopHeroes: number = 4;

    //web elements
    topHeros = ".heroes-menu";

    //actions 
    navigateToLandingPage() : void {
        cy.visit(this.url);
    }

    //assertsion 
    verifyTheDisplayOfTopHeroes() : void {
        cy.get(this.topHeros).should("be.visible");
        cy.get(this.topHeros).find('a').should("have.length", this.noOfTopHeroes);
    }

}

export default LandingPageObjects;