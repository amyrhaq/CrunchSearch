/*
 * JS for CRUNCHBASE_search generated by Appery.io
 *
 */

Appery.getProjectGUID = function() {
    return '10159332-6ca9-4e3e-8d2b-7b3a2ee01b02';
}

function navigateTo(outcome, useAjax) {
    Appery.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Appery.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Appery.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Appery.setDetailContent(pageUrl);
}

Appery.AppPages = [{
    "name": "CRUNCHBASE_search",
    "location": "CRUNCHBASE_search.html"
}, {
    "name": "CRUNCHBASE_financialOrgInfo",
    "location": "CRUNCHBASE_financialOrgInfo.html"
}, {
    "name": "CRUNCHBASE_milestonesList",
    "location": "CRUNCHBASE_milestonesList.html"
}, {
    "name": "CRUNCHBASE_peopleList",
    "location": "CRUNCHBASE_peopleList.html"
}, {
    "name": "CRUNCHBASE_serviceProviderInfo",
    "location": "CRUNCHBASE_serviceProviderInfo.html"
}, {
    "name": "CRUNCHBASE_officesList",
    "location": "CRUNCHBASE_officesList.html"
}, {
    "name": "CRUNCHBASE_showMap",
    "location": "CRUNCHBASE_showMap.html"
}, {
    "name": "CRUNCHBASE_competitorsList",
    "location": "CRUNCHBASE_competitorsList.html"
}, {
    "name": "CRUNCHBASE_personInfo",
    "location": "CRUNCHBASE_personInfo.html"
}, {
    "name": "CRUNCHBASE_productsList",
    "location": "CRUNCHBASE_productsList.html"
}, {
    "name": "CRUNCHBASE_productInfo",
    "location": "CRUNCHBASE_productInfo.html"
}, {
    "name": "CRUNCHBASE_companyInfo",
    "location": "CRUNCHBASE_companyInfo.html"
}];

CRUNCHBASE_search_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilegrid_serch': 'CRUNCHBASE_search_mobilegrid_serch',
        'mobilegridcell_searchField': 'CRUNCHBASE_search_mobilegridcell_searchField',
        'mobiletextinput_searchQuery': 'CRUNCHBASE_search_mobiletextinput_searchQuery',
        'mobilegridcell_searchButton': 'CRUNCHBASE_search_mobilegridcell_searchButton',
        'mobilebutton_search': 'CRUNCHBASE_search_mobilebutton_search',
        'mobileradiogroup_searchEntity': 'CRUNCHBASE_search_mobileradiogroup_searchEntity',
        'mobileradiobutton_companies': 'CRUNCHBASE_search_mobileradiobutton_companies',
        'mobileradiobutton_financialOrganizations': 'CRUNCHBASE_search_mobileradiobutton_financialOrganizations',
        'mobileradiobutton_serviceProviders': 'CRUNCHBASE_search_mobileradiobutton_serviceProviders',
        'mobileradiobutton_products': 'CRUNCHBASE_search_mobileradiobutton_products',
        'mobileradiobutton_people': 'CRUNCHBASE_search_mobileradiobutton_people',
        'mobilelabel_searchRemark': 'CRUNCHBASE_search_mobilelabel_searchRemark',
        'mobilelabel_numberOfResults': 'CRUNCHBASE_search_mobilelabel_numberOfResults',
        'mobilelist_searchResult': 'CRUNCHBASE_search_mobilelist_searchResult',
        'mobilelistitem_searchResult': 'CRUNCHBASE_search_mobilelistitem_searchResult',
        'mobilelistitembutton_3': 'CRUNCHBASE_search_mobilelistitembutton_3',
        'mobilelabel_resultName': 'CRUNCHBASE_search_mobilelabel_resultName',
        'mobilelabel_resultName2': 'CRUNCHBASE_search_mobilelabel_resultName2',
        'mobilelabel_resultPermalink': 'CRUNCHBASE_search_mobilelabel_resultPermalink',
        'mobilelabel_resultsShown': 'CRUNCHBASE_search_mobilelabel_resultsShown',
        'mobilegrid_nextPrevButtons': 'CRUNCHBASE_search_mobilegrid_nextPrevButtons',
        'mobilegridcell_prevButton': 'CRUNCHBASE_search_mobilegridcell_prevButton',
        'mobilebutton_previous': 'CRUNCHBASE_search_mobilebutton_previous',
        'mobilegridcell_nextButton': 'CRUNCHBASE_search_mobilegridcell_nextButton',
        'mobilebutton_next': 'CRUNCHBASE_search_mobilebutton_next'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fixing issue https://github.com/jquery/jquery-mobile/issues/5424 on Windows Phone
        $("div[data-role=page] div[data-role=footer]").css("bottom", "-36px");
    }

    if (Appery.getTargetPlatform == "I") {
        $.each(window.n2id, function(name, id) {
            var elApperyRole = $("#" + id).attr("data-role");
            if (elApperyRole != "appery_label" && elApperyRole != "appery_link") {
                var appleDataSelector = "#" + id + "[x-apple-data-detectors], #" + id + " [x-apple-data-detectors]";
                $(appleDataSelector).attr("x-apple-data-detectors", "false");
            }
        });
    }

    Appery.CurrentScreen = 'CRUNCHBASE_search';

    /*
     * Nonvisual components
     */
    var datasources = [];

    getPermalinkPeople = new Appery.DataSource(CRUNCHBASE_searchPermalinkPeople, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Pages.push("CRUNCHBASE_search", "");
            Helper.navigateToSearchResultPage();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['permalink'],
            'ID': '___local_storage___',
            'ATTR': 'selectedPermalink'
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/people/permalink?first_name={firstName}&last_name={lastName}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928427'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585841'
        }]
    });

    datasources.push(getPermalinkPeople);

    getPermalinkExceptPeople = new Appery.DataSource(CRUNCHBASE_searchPermalinkExceptPeople, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Pages.push("CRUNCHBASE_search", "");
            Helper.navigateToSearchResultPage();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['permalink'],
            'ID': '___local_storage___',
            'ATTR': 'selectedPermalink'
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['entity'],
            'TYPE': 'STRING',
            'ID': 'mobileradiogroup_searchEntity',
            'ATTR': 'value'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': 'mobiletextinput_searchQuery',
            'ATTR': 'value',
            'TRANSFORMATION': function(value) {
                return value.trim();
            }
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/{entity}/permalink?name={query}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928430'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585840'
        }]
    });

    datasources.push(getPermalinkExceptPeople);

    searchCompany = new Appery.DataSource(CRUNCHBASE_searchCompany, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Helper.setSearchAllSuccess();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['results'],
            'ID': 'mobilelistitem_searchResult',
            'SET': [{
                'PATH': ['name'],
                'ID': 'mobilelabel_resultName',
                'ATTR': '@'
            }, {
                'PATH': ['permalink'],
                'ID': 'mobilelabel_resultPermalink',
                'ATTR': '@'
            }]
        }, {
            'PATH': ['total'],
            'ID': '___local_storage___',
            'ATTR': 'totalSearchPages',
            'TRANSFORMATION': function(value, element) {
                return Helper.getTotalOfSearchPages(value);
            }
        }, {
            'PATH': ['total'],
            'ID': 'mobilelabel_numberOfResults',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return Helper.getNewValue2('', value, ' results');
            }
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': 'mobiletextinput_searchQuery',
            'ATTR': 'value',
            'TRANSFORMATION': function(value) {
                return value.trim();
            }
        }, {
            'PATH': ['resultPage'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'resultPage'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/search.js?query={query}&entity=company&page={resultPage}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928434'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585843'
        }]
    });

    datasources.push(searchCompany);

    searchFinancialOrg = new Appery.DataSource(CRUNCHBASE_searchFinancialOrg, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Helper.setSearchAllSuccess();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['results'],
            'ID': 'mobilelistitem_searchResult',
            'SET': [{
                'PATH': ['name'],
                'ID': 'mobilelabel_resultName',
                'ATTR': '@'
            }, {
                'PATH': ['permalink'],
                'ID': 'mobilelabel_resultPermalink',
                'ATTR': '@'
            }]
        }, {
            'PATH': ['total'],
            'ID': 'mobilelabel_numberOfResults',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return Helper.getNewValue2('', value, ' results');
            }
        }, {
            'PATH': ['total'],
            'ID': '___local_storage___',
            'ATTR': 'totalSearchPages',
            'TRANSFORMATION': function(value, element) {
                return Helper.getTotalOfSearchPages(value);
            }
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': 'mobiletextinput_searchQuery',
            'ATTR': 'value',
            'TRANSFORMATION': function(value) {
                return value.trim();
            }
        }, {
            'PATH': ['resultPage'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'resultPage'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/search.js?query={query}&entity=financial_org&page={resultPage}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928443'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585845'
        }]
    });

    datasources.push(searchFinancialOrg);

    searchPerson = new Appery.DataSource(CRUNCHBASE_searchPerson, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Helper.setSearchAllSuccess();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['results'],
            'ID': 'mobilelistitem_searchResult',
            'SET': [{
                'PATH': ['first_name'],
                'ID': 'mobilelabel_resultName',
                'ATTR': '@'
            }, {
                'PATH': ['last_name'],
                'ID': 'mobilelabel_resultName2',
                'ATTR': '@'
            }, {
                'PATH': ['permalink'],
                'ID': 'mobilelabel_resultPermalink',
                'ATTR': '@'
            }]
        }, {
            'PATH': ['total'],
            'ID': 'mobilelabel_numberOfResults',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return Helper.getNewValue2('', value, ' results');
            }
        }, {
            'PATH': ['total'],
            'ID': '___local_storage___',
            'ATTR': 'totalSearchPages',
            'TRANSFORMATION': function(value, element) {
                return Helper.getTotalOfSearchPages(value);
            }
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': 'mobiletextinput_searchQuery',
            'ATTR': 'value',
            'TRANSFORMATION': function(value) {
                return value.trim();
            }
        }, {
            'PATH': ['resultPage'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'resultPage'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/search.js?query={query}&entity=person&page={resultPage}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928451'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585842'
        }]
    });

    datasources.push(searchPerson);

    searchProduct = new Appery.DataSource(CRUNCHBASE_searchProduct, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Helper.setSearchAllSuccess();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['results'],
            'ID': 'mobilelistitem_searchResult',
            'SET': [{
                'PATH': ['name'],
                'ID': 'mobilelabel_resultName',
                'ATTR': '@'
            }, {
                'PATH': ['permalink'],
                'ID': 'mobilelabel_resultPermalink',
                'ATTR': '@'
            }]
        }, {
            'PATH': ['total'],
            'ID': 'mobilelabel_numberOfResults',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return Helper.getNewValue2('', value, ' results');
            }
        }, {
            'PATH': ['total'],
            'ID': '___local_storage___',
            'ATTR': 'totalSearchPages',
            'TRANSFORMATION': function(value, element) {
                return Helper.getTotalOfSearchPages(value);
            }
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': 'mobiletextinput_searchQuery',
            'ATTR': 'value',
            'TRANSFORMATION': function(value) {
                return value.trim();
            }
        }, {
            'PATH': ['resultPage'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'resultPage'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/search.js?query={query}&entity=product&page={resultPage}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928458'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585844'
        }]
    });

    datasources.push(searchProduct);

    searchServiceProvider = new Appery.DataSource(CRUNCHBASE_searchServiceProvider, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_search");
        },
        'onSuccess': function(data) {
            Helper.setSearchAllSuccess();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setRecordNotFoundLabel();
        },
        'responseMapping': [{
            'PATH': ['results'],
            'ID': 'mobilelistitem_searchResult',
            'SET': [{
                'PATH': ['name'],
                'ID': 'mobilelabel_resultName',
                'ATTR': '@'
            }, {
                'PATH': ['permalink'],
                'ID': 'mobilelabel_resultPermalink',
                'ATTR': '@'
            }]
        }, {
            'PATH': ['total'],
            'ID': 'mobilelabel_numberOfResults',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                return Helper.getNewValue2('', value, ' results');
            }
        }, {
            'PATH': ['total'],
            'ID': '___local_storage___',
            'ATTR': 'totalSearchPages',
            'TRANSFORMATION': function(value, element) {
                return Helper.getTotalOfSearchPages(value);
            }
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': 'mobiletextinput_searchQuery',
            'ATTR': 'value',
            'TRANSFORMATION': function(value) {
                return value.trim();
            }
        }, {
            'PATH': ['resultPage'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'resultPage'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/search.js?query={query}&entity=provider&page={resultPage}'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928464'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585846'
        }]
    });

    datasources.push(searchServiceProvider);

    /*
     * Events and handlers
     */

    // Before Show
    CRUNCHBASE_search_beforeshow = function() {
        Appery.CurrentScreen = "CRUNCHBASE_search";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_2C1D_onLoad = CRUNCHBASE_search_onLoad = function() {
        screen_2C1D_elementsExtraJS();
        Helper.loadStartPage();

        // TODO fire device events only if necessary (with JS logic)
        CRUNCHBASE_search_deviceEvents();
        CRUNCHBASE_search_windowEvents();
        screen_2C1D_elementsEvents();
    }

    // screen window events
    screen_2C1D_windowEvents = CRUNCHBASE_search_windowEvents = function() {

        $('#CRUNCHBASE_search').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    CRUNCHBASE_search_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_2C1D_elementsExtraJS = CRUNCHBASE_search_elementsExtraJS = function() {
        // screen (CRUNCHBASE_search) extra code

        /* mobilelist_searchResult */

        listView = $("#CRUNCHBASE_search_mobilelist_searchResult");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#CRUNCHBASE_search_mobilelist_searchResult .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_searchResult */

    }

    // screen elements handler
    screen_2C1D_elementsEvents = CRUNCHBASE_search_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CRUNCHBASE_search_mobilecontainer [name="mobilebutton_search"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.startSearch();

                }
            },
        });
        $('#CRUNCHBASE_search_mobilecontainer [name="mobileradiogroup_searchEntity"]').die().live({
            change: function() { //Helper.setSearchByRadioValue();
            },
        });

        $('#CRUNCHBASE_search_mobilecontainer [name="mobilelistitem_searchResult"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Pages.push('CRUNCHBASE_search', '');
                    setVar_('selectedPermalink', 'CRUNCHBASE_search_mobilelabel_resultPermalink', 'text', '', this);
                    Helper.navigateToSearchResultPage();

                }
            },
        });

        $('#CRUNCHBASE_search_mobilecontainer [name="mobilebutton_previous"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.searchPreviousPage();

                }
            },
        });

        $('#CRUNCHBASE_search_mobilecontainer [name="mobilebutton_next"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.searchNextPage();

                }
            },
        });

    }

    $("#CRUNCHBASE_search").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CRUNCHBASE_search_beforeshow();
    });

    if (runBeforeShow) {
        CRUNCHBASE_search_beforeshow();
    } else {
        CRUNCHBASE_search_onLoad();
    }

}

$("#CRUNCHBASE_search").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CRUNCHBASE_search_js();
});