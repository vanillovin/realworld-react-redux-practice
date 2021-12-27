describe('article 목록', () => {
  it('메인 페이지로 이동', () => {
    cy.visit('http://localhost:3000');
  });

  describe('로그인하지 않은 상태에서', () => {
    it('Global Feed 가 있다', () => {
      // '.feed-toggle'인 html 엘레먼트를 가져와서, Global Feed를 innerText가 포함하는지?
      cy.get('.feed-toggle').contains('Global Feed');
    });

    it('게시글 목록에 preview가 3개 있다', () => {
      //.article-preview 인 html 엘레먼트를 가져오면 3개가 있다.
      cy.get('.article-preview').should('have.length', 3);
      // https://docs.cypress.io/guides/references/assertions#BDD-Assertions
    });

    it('게시글 preview에는 저자, 날짜, 제목, 본문, 좋아요, 태그 목록이 있다', () => {
      // within 을 사용해서 이 preview 안에서만 찾게 해줍니다.
      cy.get('.article-preview')
        .first()
        .within(($preview) => {
          cy.contains('Gerome');
          cy.contains('Wed Nov 24 2021');
          cy.contains('Create a new implementation');
          cy.contains('join the community by creating a new implementation');
          cy.contains('implementations');
        });
    });
  });
});
