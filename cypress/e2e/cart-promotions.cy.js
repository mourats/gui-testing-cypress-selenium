describe('cart promotions', () => {
  beforeEach(() => {
    cy.visit('/admin');
    cy.get('[id="_username"]').type('sylius');
    cy.get('[id="_password"]').type('sylius');
    cy.get('.primary').click();

    /* cy.clickInFirst('a[href="/admin/promotions/"]');

    cy.get('input.bulk-select-checkbox').last().check();

    cy.get('button.ui.red.labeled.icon.button').first().click();

    cy.get('div.ui.green.ok.inverted.button#confirmation-button').click();*/
  });

  // Remove .only and implement others test cases!
  it('increase percentage of christmas promotion', () => {
    // Click in cart promotions in side menu
    cy.clickInFirst('a[href="/admin/promotions/"]');
    // Type in value input to search for specify cart promotion
    cy.get('[id="criteria_search_value"]').type('christmas');
    // Click in filter blue button
    cy.get('*[class^="ui blue labeled icon button"]').click();
    // Click in edit of the remain cart promotion
    cy.get('*[class^="ui labeled icon button "]').last().click();
    // Edit cart promotion percentage inside configuration
    cy.get('[id="sylius_promotion_actions_0_configuration_percentage"]').scrollIntoView().clear().type('10');
    // Click on Save changes button
    cy.get('[id="sylius_save_changes_button"]').scrollIntoView().click();

    // Assert that cart promotion name has been updated
    cy.get('body').should('contain', 'Promotion has been successfully updated.');
  });

  it('create new promotion', () => {
    cy.clickInFirst('a[href="/admin/promotions/"]');

    //Create new promotion and type the code and name.
    cy.get('a.ui.labeled.icon.button.primary').click();

    cy.get('[name="sylius_promotion[code]"]').type('new_promotion_code');

    cy.get('[name="sylius_promotion[name]"]').type('New promotion name');

    cy.get('button.ui.labeled.icon.primary.button').click();

    //Return to promotion page
    cy.clickInFirst('a[href="/admin/promotions/"]');

    cy.get('body').should('contain', 'new_promotion_code');
    cy.get('body').should('contain', 'New promotion name');

    //Remove recent created promotion
    cy.get('input.bulk-select-checkbox').last().check();

    cy.get('button.ui.red.labeled.icon.button').first().click();

    cy.get('div.ui.green.ok.inverted.button#confirmation-button').click();
  });

  it('create new promotion cupom based', () => {
    cy.clickInFirst('a[href="/admin/promotions/"]');

    //Create new promotion and type the code and name.
    cy.get('a.ui.labeled.icon.button.primary').click();

    cy.get('[name="sylius_promotion[code]"]').type('new_promotion_code');

    cy.get('[name="sylius_promotion[name]"]').type('New promotion name');

    //CUPOM based checkbox
    cy.get('label[for="sylius_promotion_couponBased"]').click();

    cy.get('button.ui.labeled.icon.primary.button').click();

    //Return to promotion page
    cy.clickInFirst('a[href="/admin/promotions/"]');

    cy.get('span.ui.basic.label').contains('Yes').first().click();

    //Remove recent created promotion
    cy.get('input.bulk-select-checkbox').last().check();

    cy.get('button.ui.red.labeled.icon.button').first().click();

    cy.get('div.ui.green.ok.inverted.button#confirmation-button').click();
  });

  it.only('filter cupom based promotions', () => {
    cy.clickInFirst('a[href="/admin/promotions/"]');

    cy.get('#criteria_couponBased').select('true');

    cy.get('*[class^="ui blue labeled icon button"]').click();

    cy.get('body').should('contain', 'Christmas');
    cy.get('body').should('not.contain', 'New Year');
  });

  it('filter not cupom based promotions', () => {});

  it('order promotions by priority', () => {});

  it('list cupoms from cupom based promotion', () => {});

  it('create new cupom for cupom based promotion', () => {});

  it('generate new cupom for cupom based for cupom based promotion', () => {});

  it('should create a new promotion and delete it', () => {});
});
