const { Responses } = require("../responses.js");

module.exports.handler = function (event) {
    if(event?.pathParameters?.ID === undefined){
        return Responses._400("no ID in request");
    }

    const id = event.pathParameters.ID;
    return USERS[id] ? Responses._200(USERS[id]) : Responses._400("user not found")
}

const USERS = {
    0:{
        id:0,
        name:'test user'
    },
    1:{
        id:1,
        name:'test user'
    },
    2:{
        id:2,
        name:'test user'
    },
    3:{
        id:3,
        name:'test user'
    }
}