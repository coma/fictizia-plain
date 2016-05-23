export default (http, {owner, name}) => http
                  .get(`https://api.github.com/repos/${ owner }/${ name }/contributors`)
                  .then(response => response.data);