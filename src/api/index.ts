import Cookies from 'js-cookie';

export default async function getSearchId(): Promise<any> {
  return fetch('https://aviasales-test-api.kata.academy/search')
    .then((res) => {
      if (res.ok) return res.json();
      return getSearchId();
    })
    .then(({ searchId }) => {
      if (!Cookies.get('searchId')) {
        Cookies.set('searchId', `${searchId}`);
      }
      return searchId;
    })
    .catch((err) => console.log(err));
}
