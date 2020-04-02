const handler = (promise) =>{
    return promise
    .then(data => [undefined,data])
    .catch(err => [err,undefined])
}

module.exports = {handler}