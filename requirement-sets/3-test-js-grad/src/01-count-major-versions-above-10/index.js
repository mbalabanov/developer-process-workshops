/**

* Make the following HTTP request with either axios or node-fetch:

GET https://api.npms.io/v2/search/suggestions?q=react

******

*  With the results from this request, inside "content", count
*  the number of packages that have a MAJOR semver version
*  greater than 10.x.x

*/

const axios = require('axios')

module.exports = async function countMajorVersionsAbove10() {
  let number = 0
  const { data } = await axios.get("https://api.npms.io/v2/search/suggestions?q=react")
  data.forEach(element => {
    let thisElement = Number(element.package.version.split('.')[0])
    if (thisElement >= 10) {
      number++
    }
  });
  return number
};
