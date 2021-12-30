describe('article 상세 페이지', () => {
  it('게시글 상세 페이지로 이동', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Create a new implementation').click();
  });

  // 스냅샷 vs 구성요소

  it('게시글 상세에는 저자, 작성한 날짜, 제목, 본문, 태그 목록이 있다', () => {
    // within 을 사용해서 이 preview 안에서만 찾게 해줍니다.

    /*
    <a className="author" href={'#@' + username}>
      {username}
    </a>
    */
    cy.get('.author').contains('Gerome');
    cy.get('.date').contains('Wed Nov 24 2021');
    cy.get('h1').contains('Create a new implementation');
    cy.get('.article-content').contains(
      'Share your knowledge and enpower the community by creating a new implementation'
    );
    cy.get('.tag-list').contains('implementations');
  });

  // 댓글
  it('댓글 목록에는 저자, 작성한 날짜, 제목, 본문, 태그 목록이 있다', () => {
    // within 을 사용해서 이 comment 안에서만 찾게 해줍니다.

    cy.get('.card')
      .first()
      .within(($comment) => {
        cy.get('.comment-author').contains('Gerome');
        cy.get('.date-posted').contains('Wed Nov 24 2021');
        cy.get('.card-text').contains(
          'Before starting a new implementation, please check if there is any work in progress for the stack you want to work on.'
        );
      });
  });
});
