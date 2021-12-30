//'Wed Nov 24 2021'
const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'short',
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

export const formatDate = (s: string) =>
  // 브라우저 호환성 babel polyfill 설정
  // 정규표현식 /,/global - 모든콤마
  // new RegExp(',', 'g')
  dateFormatter.format(new Date(s)).replace(/,/g, '');
