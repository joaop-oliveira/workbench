/// <reference types="Cypress" />

import moment from 'moment';

describe('Posts Test Section', () => {
  it('Should visit posts page', () => {
    cy.server();
    cy.route('**/entries', 'fixture:posts.json').as('getEntries');
    cy.visit('/');
    cy.get('[data-cy=header-posts-link]').click({ multiple: true });
  });
  it('Should have loaded posts correctly', () => {
    cy.get('[data-cy=card-post-title1]').as('post1Title');
    cy.get('[data-cy=card-post-content1]').as('post1Content');
    cy.get('[data-cy=card-post-category1]').as('post1Category');
    cy.get('@post1Title').should('have.text', 'Post Test on Cypress');
    cy.get('@post1Content').should('have.text', 'This is the body of a test post');
    cy.get('@post1Category').should('have.text', 'Cypress Test');
  });
  it('Should navigate to the Post page', () => {
    cy.server();
    cy.route('**/entries?sys.id=1', 'fixture:post.json').as('getEntry');
    cy.get('[data-cy=link-to-post1]').click({ multiple: true });
  });
  it('Should have the post structure built right', () => {
    cy.get('[data-cy="post-title"]').as('postTitle');
    cy.get('[data-cy="post-date"]').as('postDate');
    cy.get('[data-cy="post-tags"]').as('postTags');
    cy.fixture('post.json').then(post => {
      cy.get('@postTitle').should('have.text', post.items[0].fields.title);
      cy.get('@postDate').should('have.text', moment(post.items[0].fields.date).format('dddd  MMMM  YYYY'));
      cy.get('@postTags').then($elements => {
        const tags = post.items[0].fields.tags.split(',');
        $elements.each((index, $element) => {
          console.log(tags[index]);
          expect($element.innerText).to.be.equal(tags[index]);
        });
      });
    });
  });
});
