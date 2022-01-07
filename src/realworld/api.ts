// 숨겨진, 내부 캡슐화된 친구
function post<T>(path: string, data: T) {
  return fetch(path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

const HOST = 'https://api.realworld.io/api';

export default {
  login(data: { email: string; password: string }) {
    return post(HOST + '/users/login', { user: data });
  },
  register(data: { username: string; email: string; password: string }) {
    return post(HOST + '/users', { user: data });
  },
};
