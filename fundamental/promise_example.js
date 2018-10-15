const fetch = () => {
    return new Promise((resolve, reject) => {
        let flag = "false";
        if (flag === "true") {
            resolve('{ "text" : "Some awesome text"}');
        } else {
            reject('{ "text" : "Rejected"}')
        }

    })
}

fetch()
    .then(result => console.log(JSON.parse(result)))
    .catch(error => console.log(JSON.parse(error)));
