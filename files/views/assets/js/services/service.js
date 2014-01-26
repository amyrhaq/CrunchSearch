/*
 * Service settings
 */
var CRUNCHBASE_settings = {
    "api_key": "vsfbrzu8b7y8uyvzfg8h7kxh"
}

/*
 * Services
 */

var CRUNCHBASE_searchPermalinkExceptPeople = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_searchPermalinkPeople = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_getProduct = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_getFinancialOrg = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_searchProduct = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_searchFinancialOrg = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_getListOfAll = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_searchPerson = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_searchCompany = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_getPerson = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_getCompany = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_searchServiceProvider = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});

var CRUNCHBASE_getServiceProvider = new Appery.RestService({
    'url': 'https://api.appery.io/rest/1/proxy/tunnel',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': CRUNCHBASE_settings
});