/*
 * JS for CRUNCHBASE_peopleList generated by Appery.io
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

CRUNCHBASE_peopleList_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_home': 'CRUNCHBASE_peopleList_mobilebutton_home',
        'mobilebutton_back': 'CRUNCHBASE_peopleList_mobilebutton_back',
        'mobilegrid_nameAndImage': 'CRUNCHBASE_peopleList_mobilegrid_nameAndImage',
        'mobilegridcell_name': 'CRUNCHBASE_peopleList_mobilegridcell_name',
        'mobilelink_companyName': 'CRUNCHBASE_peopleList_mobilelink_companyName',
        'mobilegridcell_image': 'CRUNCHBASE_peopleList_mobilegridcell_image',
        'mobileimage_company': 'CRUNCHBASE_peopleList_mobileimage_company',
        'mobilelabel_category': 'CRUNCHBASE_peopleList_mobilelabel_category',
        'mobilelabel_descriptionCompany': 'CRUNCHBASE_peopleList_mobilelabel_descriptionCompany',
        'mobilegroupedbuttons_companyInfo': 'CRUNCHBASE_peopleList_mobilegroupedbuttons_companyInfo',
        'mobilebutton_Overview': 'CRUNCHBASE_peopleList_mobilebutton_Overview',
        'mobilebutton_Offices': 'CRUNCHBASE_peopleList_mobilebutton_Offices',
        'mobilebutton_People': 'CRUNCHBASE_peopleList_mobilebutton_People',
        'mobilebutton_Products': 'CRUNCHBASE_peopleList_mobilebutton_Products',
        'mobilebutton_Competitors': 'CRUNCHBASE_peopleList_mobilebutton_Competitors',
        'mobilebutton_Milestones': 'CRUNCHBASE_peopleList_mobilebutton_Milestones',
        'mobilelabel_people': 'CRUNCHBASE_peopleList_mobilelabel_people',
        'mobilelabel_noInformationPeople': 'CRUNCHBASE_peopleList_mobilelabel_noInformationPeople',
        'mobilelist_people': 'CRUNCHBASE_peopleList_mobilelist_people',
        'mobilelistitem_people': 'CRUNCHBASE_peopleList_mobilelistitem_people',
        'mobilelabel_title': 'CRUNCHBASE_peopleList_mobilelabel_title',
        'mobilelabel_isPast': 'CRUNCHBASE_peopleList_mobilelabel_isPast',
        'mobilelabel_firstName': 'CRUNCHBASE_peopleList_mobilelabel_firstName',
        'mobilelabel_lastName': 'CRUNCHBASE_peopleList_mobilelabel_lastName',
        'mobilelabel_personPermalink': 'CRUNCHBASE_peopleList_mobilelabel_personPermalink',
        'mobilelistitembutton_8': 'CRUNCHBASE_peopleList_mobilelistitembutton_8'
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

    Appery.CurrentScreen = 'CRUNCHBASE_peopleList';

    /*
     * Nonvisual components
     */
    var datasources = [];

    getCompanyPeople = new Appery.DataSource(CRUNCHBASE_getCompany, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_peopleList");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['image', 'available_sizes', '[0]', '.'],
            'ID': 'mobileimage_company',
            'ATTR': 'src',
            'TRANSFORMATION': function(value, element) {
                return Helper.getImage(value, element);
            }
        }, {
            'PATH': ['relationships'],
            'ID': 'mobilelistitem_people',
            'TRANSFORMATION': function(value, element) {
                Helper.setPersonListItemVisibility(value, element);
            },
            'SET': [{
                'PATH': ['person', 'first_name'],
                'ID': 'mobilelabel_firstName',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    //Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationPeople');
                }
            }, {
                'PATH': ['person', 'last_name'],
                'ID': 'mobilelabel_lastName',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    //Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationPeople');
                }
            }, {
                'PATH': ['person', 'permalink'],
                'ID': 'mobilelabel_personPermalink',
                'ATTR': '@'
            }, {
                'PATH': ['is_past'],
                'ID': 'mobilelabel_isPast',
                'ATTR': 'visible'
            }, {
                'PATH': ['title'],
                'ID': 'mobilelabel_title',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationPeople');
                }
            }]
        }, {
            'PATH': ['name'],
            'ID': 'mobilelink_companyName',
            'ATTR': '@'
        }, {
            'PATH': ['homepage_url'],
            'ID': 'mobilelink_companyName',
            'ATTR': 'href'
        }, {
            'PATH': ['category_code'],
            'ID': 'mobilelabel_category',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                return Helper.getNewValue(value, 'Category: ');
            }
        }, {
            'PATH': ['description'],
            'ID': 'mobilelabel_descriptionCompany',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
            }
        }],
        'requestMapping': [{
            'PATH': ['api_key'],
            'TYPE': 'STRING',
            'ATTR': '{api_key}'
        }, {
            'PATH': ['query'],
            'TYPE': 'STRING',
            'ID': '___local_storage___',
            'ATTR': 'selectedPermalink'
        }, {
            'PATH': ['appery-proxy-url'],
            'HEADER': true,
            'ATTR': 'http://api.crunchbase.com/v/1/company/{query}.js'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718928822'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585836'
        }]
    });

    datasources.push(getCompanyPeople);

    /*
     * Events and handlers
     */

    // Before Show
    CRUNCHBASE_peopleList_beforeshow = function() {
        Appery.CurrentScreen = "CRUNCHBASE_peopleList";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_37A9_onLoad = CRUNCHBASE_peopleList_onLoad = function() {
        screen_37A9_elementsExtraJS();
        getCompanyPeople.updateComponents(Helper.getJsonObject());
        Helper.setNamesOfPeopleInList('mobilelist_people');

        // TODO fire device events only if necessary (with JS logic)
        CRUNCHBASE_peopleList_deviceEvents();
        CRUNCHBASE_peopleList_windowEvents();
        screen_37A9_elementsEvents();
    }

    // screen window events
    screen_37A9_windowEvents = CRUNCHBASE_peopleList_windowEvents = function() {

        $('#CRUNCHBASE_peopleList').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    CRUNCHBASE_peopleList_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_37A9_elementsExtraJS = CRUNCHBASE_peopleList_elementsExtraJS = function() {
        // screen (CRUNCHBASE_peopleList) extra code

        /* mobilelist_people */

        listView = $("#CRUNCHBASE_peopleList_mobilelist_people");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#CRUNCHBASE_peopleList_mobilelist_people .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_people */

    }

    // screen elements handler
    screen_37A9_elementsEvents = CRUNCHBASE_peopleList_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CRUNCHBASE_peopleList_mobileheader [name="mobilebutton_home"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.goHome();

                }
            },
        });
        $('#CRUNCHBASE_peopleList_mobileheader [name="mobilebutton_back"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.goBack('CRUNCHBASE_peopleList');

                }
            },
        });

        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilebutton_Overview"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.navigateToNextListPage('CRUNCHBASE_companyInfo');;

                }
            },
        });
        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilebutton_Offices"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.navigateToNextListPage('CRUNCHBASE_officesList');;

                }
            },
        });
        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilebutton_People"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.navigateToNextListPage('CRUNCHBASE_peopleList');;

                }
            },
        });
        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilebutton_Products"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.navigateToNextListPage('CRUNCHBASE_productsList');;

                }
            },
        });
        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilebutton_Competitors"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.navigateToNextListPage('CRUNCHBASE_competitorsList');;

                }
            },
        });
        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilebutton_Milestones"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.navigateToNextListPage('CRUNCHBASE_milestonesList');

                }
            },
        });

        $('#CRUNCHBASE_peopleList_mobilecontainer [name="mobilelistitem_people"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Pages.push('CRUNCHBASE_companyInfo', localStorage.getItem('selectedPermalink'));
                    setVar_('selectedPermalink', 'CRUNCHBASE_peopleList_mobilelabel_personPermalink', 'text', '', this);
                    Helper.navigateToNextPage('person', 'CRUNCHBASE_peopleList');

                }
            },
        });

    }

    $("#CRUNCHBASE_peopleList").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CRUNCHBASE_peopleList_beforeshow();
    });

    if (runBeforeShow) {
        CRUNCHBASE_peopleList_beforeshow();
    } else {
        CRUNCHBASE_peopleList_onLoad();
    }

}

$("#CRUNCHBASE_peopleList").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CRUNCHBASE_peopleList_js();
});