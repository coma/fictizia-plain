export default (http, {owner, name}) => http
                  .get(`https://api.github.com/repos/${ owner }/${ name }`)
                  .then(response => response.data);