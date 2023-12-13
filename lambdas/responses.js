module.exports.Responses = class Responses {
    static _200(data = {}) {
        return {
            headers: {
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Methods":"*"
            },
            statusCode:200,
            body:JSON.stringify(data)
        }
    }

    static _400(data = {}) {
        return {
            headers: {
                "Content-type":"application/json",
                "Access-Control-Allow-Origin":"*",
                "Access-Control-Allow-Methods":"*"
            },
            statusCode:400,
            body:JSON.stringify(data)
        }
    }
}