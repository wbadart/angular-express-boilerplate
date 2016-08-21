/**
* routes.js
*
* Callback implementation for app API endpoints.
*
*/

//======================
// Constant definitions
//======================

// Prepends all API endpoints (e.g. /test -> /api/v1/test)
const api_prefix = '/api/v1'

// Associate all endpoints with respective HTTP method and callback
const routes = [
    {endpoint: '/test', method: 'get', callback: test}
];

//=========================
// Callback implementation
//=========================

function test(req, res, next){
    return res.send('Hello world!');
}

//===================
// Set module export
//===================

module.exports = routes.map(route=>{
    return {
        endpoint: api_prefix + route.endpoint,
        method:   route.method,
        callback: route.callback
    };
});
