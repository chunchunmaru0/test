const fetch = require('node-fetch')
const endpoints = require("./endpoints.json")

function getContent(url) {
  return new Promise((resolve, reject) => {

    try {
      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonObj) {
          resolve(jsonObj)
          //console.log(jsonObj);

        })
    } catch (error) {
      reject(`Error: ${error.message}`)
    }


  });
}
class NekoClient {
  constructor() {

    this.data = {};
    this.imagegen = {}
    let baseURL = 'https://nekobot.xyz/api';

    Object.keys(endpoints.data).forEach(async (endpoint) => {
      this[endpoint] = async function () { return await getContent(baseURL + endpoints.data[endpoint]); };
    });
    Object.keys(endpoints.imagegen).forEach(async (endpoint) => {
      this.imagegen[endpoint] = async function (queryParams, queryParams2) {
        let url = new URL(`${baseURL}${endpoints.imagegen[endpoint]}&user1=${queryParams}&user2=${queryParams2}`);
        queryParams == '' ? url.search = new URLSearchParams(queryParams) : '';
        queryParams2 == '' ? url.search = new URLSearchParams(queryParams2) : '';
        //console.log(url)
        return await getContent(url.toString());
      };
    });
  }
}

module.exports = NekoClient;
