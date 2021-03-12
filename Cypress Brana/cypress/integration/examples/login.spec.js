const data = require("../../fixtures/data.json")
const locators = require("../../fixtures/locators.json")
import {loginPage} from "../../pageObjects/loginPage"

describe("login", () => {
    before(()=> {
        cy.visit("https://gradebook.vivifyideas.com/login#")
    
        
     })
    it ("login", ()=> {
        cy.get('[type="text"]').type("branatest@test.com");
       cy.get('.form-control.mt-3').type("bb12345678");
       cy.get('.btn').click()
       //cy.url().should("eq".data.login.)
    })

   

    it('create a profesor', () => {
        cy.get(locators.createProfesor.create).click()
        cy.get(locators.createProfesor.create2).click()
        //cy.visit('https://gradebook.vivifyideas.com/create-professor')
        cy.get(locators.createProfesor.firstName).type(data.create.firstName)
        cy.get(locators.createProfesor.lastName).type(data.create.lastName)
        cy.get(locators.createProfesor.image).click()
        cy.get(locators.createProfesor.imageUrl).type(data.create.url)
        cy.get(locators.createProfesor.button).click()
        //cy.get(locators.login.submit).should("not.exist")
    })
    it('create a gradebook', () => {
        cy.get(locators.createGradebook.createGrad).click()
        //cy.visit('https://gradebook.vivifyideas.com/create-professor')
        cy.get(locators.createGradebook.titleGradebook).type(data.createGradebook.gradebookTitle)
        cy.get(locators.createGradebook.profesforGradebook).select("Brana Miladinovic")
        //cy.get(locators.createGradebook.profesforGradebook).type(data.createGradebook.gradebookProfesor)
        cy.get(locators.createGradebook.button).click()
        //cy.get(locators.login.submit).should("not.exist")
    })

})