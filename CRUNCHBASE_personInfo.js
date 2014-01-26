/*
 * JS for CRUNCHBASE_personInfo generated by Appery.io
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

CRUNCHBASE_personInfo_js = function(runBeforeShow) { /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_back': 'CRUNCHBASE_personInfo_mobilebutton_back',
        'mobilebutton_home': 'CRUNCHBASE_personInfo_mobilebutton_home',
        'mobilegrid_nameAndImage': 'CRUNCHBASE_personInfo_mobilegrid_nameAndImage',
        'mobilegridcell_name': 'CRUNCHBASE_personInfo_mobilegridcell_name',
        'mobilelabel_firstName': 'CRUNCHBASE_personInfo_mobilelabel_firstName',
        'mobilelabel_lastName': 'CRUNCHBASE_personInfo_mobilelabel_lastName',
        'mobilelabel_bornYear': 'CRUNCHBASE_personInfo_mobilelabel_bornYear',
        'mobilelabel_bornMonth': 'CRUNCHBASE_personInfo_mobilelabel_bornMonth',
        'mobilelabel_bornDay': 'CRUNCHBASE_personInfo_mobilelabel_bornDay',
        'mobilegridcell_image': 'CRUNCHBASE_personInfo_mobilegridcell_image',
        'mobileimage_person': 'CRUNCHBASE_personInfo_mobileimage_person',
        'mobilelabel_affiliationName': 'CRUNCHBASE_personInfo_mobilelabel_affiliationName',
        'mobilelabel_birthplace': 'CRUNCHBASE_personInfo_mobilelabel_birthplace',
        'mobilecollapsibleset_personInfo': 'CRUNCHBASE_personInfo_mobilecollapsibleset_personInfo',
        'mobilecollapsblock_Overview': 'CRUNCHBASE_personInfo_mobilecollapsblock_Overview',
        'mobilecollapsblockheader_Overview': 'CRUNCHBASE_personInfo_mobilecollapsblockheader_Overview',
        'mobilecollapsblockcontent_overview': 'CRUNCHBASE_personInfo_mobilecollapsblockcontent_overview',
        'mobilelabel_overviewText': 'CRUNCHBASE_personInfo_mobilelabel_overviewText',
        'mobilelabel_overview': 'CRUNCHBASE_personInfo_mobilelabel_overview',
        'mobilelabel_noInformationOverview': 'CRUNCHBASE_personInfo_mobilelabel_noInformationOverview',
        'mobilelabel_contactsText': 'CRUNCHBASE_personInfo_mobilelabel_contactsText',
        'mobilelabel_noInformationContacts': 'CRUNCHBASE_personInfo_mobilelabel_noInformationContacts',
        'mobilelink_homepage': 'CRUNCHBASE_personInfo_mobilelink_homepage',
        'mobilelink_twitter': 'CRUNCHBASE_personInfo_mobilelink_twitter',
        'mobilelink_blog': 'CRUNCHBASE_personInfo_mobilelink_blog',
        'mobilecollapsblock_degrees': 'CRUNCHBASE_personInfo_mobilecollapsblock_degrees',
        'mobilecollapsblockheader_degrees': 'CRUNCHBASE_personInfo_mobilecollapsblockheader_degrees',
        'mobilecollapsblockcontent_degrees': 'CRUNCHBASE_personInfo_mobilecollapsblockcontent_degrees',
        'mobilelabel_noInformationDegrees': 'CRUNCHBASE_personInfo_mobilelabel_noInformationDegrees',
        'mobilelist_degrees': 'CRUNCHBASE_personInfo_mobilelist_degrees',
        'mobilelistitem_degree': 'CRUNCHBASE_personInfo_mobilelistitem_degree',
        'mobilelistitembutton_30': 'CRUNCHBASE_personInfo_mobilelistitembutton_30',
        'mobilelabel_degreeType': 'CRUNCHBASE_personInfo_mobilelabel_degreeType',
        'mobilelabel_institution': 'CRUNCHBASE_personInfo_mobilelabel_institution',
        'mobilelabel_subject': 'CRUNCHBASE_personInfo_mobilelabel_subject',
        'mobilelabel_graduatedYear': 'CRUNCHBASE_personInfo_mobilelabel_graduatedYear',
        'mobilecollapsblock_relationships': 'CRUNCHBASE_personInfo_mobilecollapsblock_relationships',
        'mobilecollapsblockheader_relationships': 'CRUNCHBASE_personInfo_mobilecollapsblockheader_relationships',
        'mobilecollapsblockcontent_relationships': 'CRUNCHBASE_personInfo_mobilecollapsblockcontent_relationships',
        'mobilelabel_noInformationRelationships': 'CRUNCHBASE_personInfo_mobilelabel_noInformationRelationships',
        'mobilelist_relationships': 'CRUNCHBASE_personInfo_mobilelist_relationships',
        'mobilelistitem_relationship': 'CRUNCHBASE_personInfo_mobilelistitem_relationship',
        'mobilelistitembutton_54': 'CRUNCHBASE_personInfo_mobilelistitembutton_54',
        'mobilelabel_title': 'CRUNCHBASE_personInfo_mobilelabel_title',
        'mobilelabel_isPast': 'CRUNCHBASE_personInfo_mobilelabel_isPast',
        'mobilelabel_firmName': 'CRUNCHBASE_personInfo_mobilelabel_firmName',
        'mobilelabel_firmPermalink': 'CRUNCHBASE_personInfo_mobilelabel_firmPermalink',
        'mobilelabel_typeOfEntity': 'CRUNCHBASE_personInfo_mobilelabel_typeOfEntity',
        'mobilelabel_loadingText': 'CRUNCHBASE_personInfo_mobilelabel_loadingText',
        'mobilebutton_retry': 'CRUNCHBASE_personInfo_mobilebutton_retry'
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

    Appery.CurrentScreen = 'CRUNCHBASE_personInfo';

    /*
     * Nonvisual components
     */
    var datasources = [];

    getPersonInfo = new Appery.DataSource(CRUNCHBASE_getPerson, {
        'onComplete': function(jqXHR, textStatus) {

            $t.refreshScreenFormElements("CRUNCHBASE_personInfo");
        },
        'onSuccess': function(data) {
            Helper.setLoadingPersonSuccessState();
        },
        'onError': function(jqXHR, textStatus, errorThrown) {
            Helper.setLoadingFailedState('mobilebutton_retry', 'mobilelabel_loadingText');
        },
        'responseMapping': [{
            'PATH': ['image', 'available_sizes', '[0]', '.'],
            'ID': 'mobileimage_person',
            'ATTR': 'src',
            'TRANSFORMATION': function(value, element) {
                return Helper.getImage(value, element);
            }
        }, {
            'PATH': ['degrees'],
            'ID': 'mobilelistitem_degree',
            'SET': [{
                'PATH': ['degree_type'],
                'ID': 'mobilelabel_degreeType',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationDegrees');
                }
            }, {
                'PATH': ['subject'],
                'ID': 'mobilelabel_subject',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationDegrees');
                }
            }, {
                'PATH': ['institution'],
                'ID': 'mobilelabel_institution',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationDegrees');
                }
            }, {
                'PATH': ['graduated_year'],
                'ID': 'mobilelabel_graduatedYear',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    Helper.setElementVisibility(value, element);
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationDegrees');
                    return Helper.getNewValue(value, "Graduated at ");
                }
            }]
        }, {
            'PATH': ['relationships'],
            'ID': 'mobilelistitem_relationship',
            'SET': [{
                'PATH': ['firm', 'name'],
                'ID': 'mobilelabel_firmName',
                'ATTR': '@',
                'TRANSFORMATION': function(value, element) {
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationRelationships');
                }
            }, {
                'PATH': ['firm', 'permalink'],
                'ID': 'mobilelabel_firmPermalink',
                'ATTR': '@'
            }, {
                'PATH': ['firm', 'type_of_entity'],
                'ID': 'mobilelabel_typeOfEntity',
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
                    Helper.setNoInformationVisibility(value, 'mobilelabel_noInformationRelationships');
                }
            }]
        }, {
            'PATH': ['first_name'],
            'ID': 'mobilelabel_firstName',
            'ATTR': '@'
        }, {
            'PATH': ['last_name'],
            'ID': 'mobilelabel_lastName',
            'ATTR': '@'
        }, {
            'PATH': ['homepage_url'],
            'ID': 'mobilelink_homepage',
            'ATTR': 'href',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                Helper.setNoInformationState(value, 'mobilelabel_noInformationContacts');
            }
        }, {
            'PATH': ['birthplace'],
            'ID': 'mobilelabel_birthplace',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                return Helper.getNewValue(value, "Birthplace: ");
            }
        }, {
            'PATH': ['twitter_username'],
            'ID': 'mobilelink_twitter',
            'ATTR': 'href',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                Helper.setNoInformationState(value, 'mobilelabel_noInformationContacts');
                return Helper.getNewValue(value, "http://twitter.com/");
            }
        }, {
            'PATH': ['blog_url'],
            'ID': 'mobilelink_blog',
            'ATTR': 'href',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                Helper.setNoInformationState(value, 'mobilelabel_noInformationContacts');
            }
        }, {
            'PATH': ['affiliation_name'],
            'ID': 'mobilelabel_affiliationName',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                return Helper.getNewValue(value, "Affiliation name: ");
            }
        }, {
            'PATH': ['born_year'],
            'ID': 'mobilelabel_bornYear',
            'ATTR': '@'
        }, {
            'PATH': ['born_month'],
            'ID': 'mobilelabel_bornMonth',
            'ATTR': '@'
        }, {
            'PATH': ['born_day'],
            'ID': 'mobilelabel_bornDay',
            'ATTR': '@'
        }, {
            'PATH': ['overview'],
            'ID': 'mobilelabel_overview',
            'ATTR': '@',
            'TRANSFORMATION': function(value, element) {
                Helper.setElementVisibility(value, element);
                Helper.setNoInformationState(value, 'mobilelabel_noInformationOverview');
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
            'ATTR': 'http://api.crunchbase.com/v/1/person/{query}.js'
        }, {
            'PATH': ['appery-transformation'],
            'HEADER': true,
            'ATTR': 'checkTunnel'
        }, {
            'PATH': ['appery-key'],
            'HEADER': true,
            'ATTR': '1390718929301'
        }, {
            'PATH': ['appery-rest'],
            'HEADER': true,
            'ATTR': '2585832'
        }]
    });

    datasources.push(getPersonInfo);

    /*
     * Events and handlers
     */

    // Before Show
    CRUNCHBASE_personInfo_beforeshow = function() {
        Appery.CurrentScreen = "CRUNCHBASE_personInfo";
        for (var idx = 0; idx < datasources.length; idx++) {
            datasources[idx].__setupDisplay();
        }
    }

    // On Load
    screen_9C28_onLoad = CRUNCHBASE_personInfo_onLoad = function() {
        screen_9C28_elementsExtraJS();
        Helper.setPersonInfoInvisibility();
        Helper.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
        getPersonInfo.execute({});
        localStorage.setItem('currentEntity', 'person');

        // TODO fire device events only if necessary (with JS logic)
        CRUNCHBASE_personInfo_deviceEvents();
        CRUNCHBASE_personInfo_windowEvents();
        screen_9C28_elementsEvents();
    }

    // screen window events
    screen_9C28_windowEvents = CRUNCHBASE_personInfo_windowEvents = function() {

        $('#CRUNCHBASE_personInfo').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    }

    // device events
    CRUNCHBASE_personInfo_deviceEvents = function() {

        document.addEventListener("deviceready", function() {

        });
    }

    // screen elements extra js
    screen_9C28_elementsExtraJS = CRUNCHBASE_personInfo_elementsExtraJS = function() {
        // screen (CRUNCHBASE_personInfo) extra code

        /* mobilecollapsblock_Overview */

        $("#CRUNCHBASE_personInfo_mobilecollapsblock_Overview .ui-collapsible-heading-toggle").attr("tabindex", "1");

        /* mobilecollapsblock_degrees */

        $("#CRUNCHBASE_personInfo_mobilecollapsblock_degrees .ui-collapsible-heading-toggle").attr("tabindex", "2");

        /* mobilelist_degrees */

        listView = $("#CRUNCHBASE_personInfo_mobilelist_degrees");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#CRUNCHBASE_personInfo_mobilelist_degrees .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_degree */

        /* mobilecollapsblock_relationships */

        $("#CRUNCHBASE_personInfo_mobilecollapsblock_relationships .ui-collapsible-heading-toggle").attr("tabindex", "4");

        /* mobilelist_relationships */

        listView = $("#CRUNCHBASE_personInfo_mobilelist_relationships");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#CRUNCHBASE_personInfo_mobilelist_relationships .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_relationship */

    }

    // screen elements handler
    screen_9C28_elementsEvents = CRUNCHBASE_personInfo_elementsEvents = function() {

        $("a :input,a a,a fieldset label").live({
            click: function(event) {
                event.stopPropagation();
            }
        });

        $('#CRUNCHBASE_personInfo_mobileheader [name="mobilebutton_back"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.goBack('CRUNCHBASE_personInfo');

                }
            },
        });
        $('#CRUNCHBASE_personInfo_mobileheader [name="mobilebutton_home"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.goHome();

                }
            },
        });

        $('#CRUNCHBASE_personInfo_mobilecontainer [name="mobilelistitem_relationship"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Pages.push('CRUNCHBASE_personInfo', localStorage.getItem('selectedPermalink'));
                    setVar_('selectedPermalink', 'CRUNCHBASE_personInfo_mobilelabel_firmPermalink', 'text', '', this);
                    setVar_('currentEntity', 'CRUNCHBASE_personInfo_mobilelabel_typeOfEntity', 'text', '', this);
                    Helper.navigateToNextPage(localStorage.getItem('currentEntity'), 'CRUNCHBASE_personInfo');

                }
            },
        });

        $('#CRUNCHBASE_personInfo_mobilecontainer [name="mobilebutton_retry"]').die().live({
            click: function() {
                if (!$(this).attr('disabled')) {
                    Helper.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
                    getPersonInfo.execute({});

                }
            },
        });

    }

    $("#CRUNCHBASE_personInfo").die("pagebeforeshow").live("pagebeforeshow", function(event, ui) {
        CRUNCHBASE_personInfo_beforeshow();
    });

    if (runBeforeShow) {
        CRUNCHBASE_personInfo_beforeshow();
    } else {
        CRUNCHBASE_personInfo_onLoad();
    }

}

$("#CRUNCHBASE_personInfo").die("pageinit").live("pageinit", function(event, ui) {
    Appery.processSelectMenu($(this));
    CRUNCHBASE_personInfo_js();
});