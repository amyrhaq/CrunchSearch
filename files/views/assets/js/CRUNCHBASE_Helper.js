var Helper = {

    noOverviewInfo : true,    
    noContactsInfo : true,
    fromListPage : false,
    
    
    getNewValue : function(value, newValue) {
        
    	return newValue + value;
	},
    
    
    getNewValue2 : function(value, newValueBefore, newValueAfter) {
        
    	return newValueBefore + value + newValueAfter;
	},
     
    
    getImage : function(value, element) {

        if( (value != null) && (value != "") && (value.length > 0) ){
  			element.show(); 
            
  			var url = value[1];
            
  			element.attr("src", "http://crunchbase.com/" + url);            
    		$(element).width(value[0][0]);
    		$(element).height(value[0][1]);
            
  			return "http://crunchbase.com/" + url;
            
		} else { 
            element.show(); 
		}
    },
    
    
    // FUNCTIONS FOR MAP
    
        
    isCoordinatesGiven : function() {
        
        var longitude = localStorage.getItem('current_longitude');
        var latitude = localStorage.getItem('current_latitude');

        if ( (longitude != "") && (longitude != "null") && (longitude != null) 
           && (latitude != "") && (latitude != "null") && (latitude != null) ) 
            return true;
        
        return false;
    },
    
    
    setMap : function() {
        
        if (this.isCoordinatesGiven()) {
            
            Appery('mobilelabel_noCoordinates').hide();
            
			var map = Appery('googlemap_officeLocation');
            
			map.options['address'] = '';
			map.options['latitude'] = localStorage.getItem('current_latitude');
			map.options['longitude'] = localStorage.getItem('current_longitude');
            
            //map.refresh(); //"Cannot refresh, map is not initialized!" will be if you will uncomment this string 
            
		} else {
            
    		Appery('mobilelabel_noCoordinates').show();
            Appery('googlemap_officeLocation').hide();
		}
        
        this.resizeMap();
    },   
    
    
    resizeMap : function() {
        
        $('.googleMap').width('100%');
        $('.googleMap').height($(window).height()-80);
    },

    
    // FUNCTIONS FOR VISIBILITY
    
    
    setElementVisibility : function(value, element) {

		if ( (value != "") && (value != "null") && (value != null) ){
  			element.show();
		} else {
  			element.hide();
		}

	},
    
    
    setElementAndTextVisibility : function(value, element, labelElement) {

    	if ( (value != "") && (value != "null") && (value != null) ){
            Appery(labelElement).show();
    		element.show();
		} else {
    		element.hide();
  			Appery(labelElement).hide();
		}
	},
    
    setNoInformationVisibility : function(value, labelName) {
        
        if ( (value != "") && (value != "null") && (value != null) ){
  			Appery(labelName).hide();
		}
    },
    
    
    setNoInformationState : function(value, labelName) {
        
        switch (labelName) {
                
            case 'mobilelabel_noInformationOverview':
                
                if ( (value != "") && (value != "null") && (value != null) ){
                	this.noOverviewInfo = false;
        		}
                break;
                
            case 'mobilelabel_noInformationContacts':
                
                if ( (value != "") && (value != "null") && (value != null) ){
                	this.noContactsInfo = false;
        		}
                break;
        }       
    },
    
    
    setNoInformationVisibilityByState : function() {
        
        if (this.noOverviewInfo){
  			Appery('mobilelabel_noInformationOverview').show();
		} else {
            Appery('mobilelabel_noInformationOverview').hide();
        }
        
        if (this.noContactsInfo){
  			Appery('mobilelabel_noInformationContacts').show();
		} else {
            Appery('mobilelabel_noInformationContacts').hide();
        }
    },    
    
    
    setCompanyInfoInvisibility : function() {
        
        this.noOverviewInfo = true;
		this.noContactsInfo = true;
        
        Appery('mobilelink_companyName').text('');
        Appery('mobileimage_company').hide();
        Appery('mobilelabel_category').hide();
        Appery('mobilelabel_descriptionCompany').hide();
        Appery('mobilegroupedbuttons_companyInfo').hide();
        
        Appery('mobilelabel_contactsText').hide();
        Appery('mobilelabel_phoneNumber').hide();
        Appery('mobilelabel_email').hide();
        Appery('mobilelink_blog').hide();
        Appery('mobilelink_twitter').hide();
        
        Appery('mobilelabel_overviewText').hide();
        Appery('mobilelabel_foundedYear').hide();
        Appery('mobilelabel_deadpooledCompanyYear').hide();
        Appery('mobilelabel_numberOfEmployees').hide();
        Appery('mobilelabel_overview').hide();
        
        Appery('mobilelabel_noInformationOverview').hide();
        Appery('mobilelabel_noInformationContacts').hide();
	},
    
    
    setFinancialOrgInfoInvisibility : function() {
        
        this.noOverviewInfo = true;
		this.noContactsInfo = true;
        
        Appery('mobilelink_name').text('');
        Appery('mobileimage_financial').hide();
        Appery('mobilelabel_descriptionFinancialOrg').hide();
        Appery('mobilecollapsibleset_organizationInfo').hide();
        
        Appery('mobilelabel_noInformationOverview').show();
        Appery('mobilelabel_noInformationContacts').show();
        Appery('mobilelabel_noInformationOffices').show();
        Appery('mobilelabel_noInformationPeople').show();
        Appery('mobilelabel_noInformationInvestments').show();
	},
    
    
    setServiceProvaderInfoInvisibility : function() {
        
        this.noOverviewInfo = true;
		this.noContactsInfo = true;
        
        Appery('mobilelink_name').text('');
        Appery('mobileimage_serviceProvider').hide();
        Appery('mobilelabel_phoneNumber').hide();
        Appery('mobilelabel_emailAddress').hide();
        Appery('mobilecollapsibleset_serviceProvInfo').hide();      
                        
        Appery('mobilelabel_noInformationOverview').show();
        Appery('mobilelabel_noInformationContacts').show();
        Appery('mobilelabel_noInformationProviderships').show();
	},
    
    
    setProductInfoInvisibility : function() {

        this.noOverviewInfo = true;
		this.noContactsInfo = true;
        
        Appery('mobilelink_productName').text('');
        Appery('mobileimage_product').hide();
        Appery('mobilelink_blog').hide();
        Appery('mobilelink_twitter').hide();
        Appery('mobilelink_companyName').hide();
        Appery('mobilelabel_launchedYear').hide();
        Appery('mobilelabel_deadpooledYear').hide();
        Appery('mobilelabel_overview').hide();
        
        Appery('mobilelabel_noInformationOverview').hide();
        Appery('mobilelabel_noInformationContacts').hide();
        
        Appery('mobilelabel_contactsText').hide();
        Appery('mobilelabel_overviewText').hide();
	},
    
    
    setPersonInfoInvisibility : function() {

        this.noOverviewInfo = true;
		this.noContactsInfo = true;
        
        Appery('mobilelabel_firstName').text('');
        Appery('mobilelabel_lastName').text('');
        Appery('mobileimage_person').hide();
        Appery('mobilelabel_bornYear').hide();
        Appery('mobilelink_homepage').hide();
        Appery('mobilelink_twitter').hide();
        Appery('mobilelink_blog').hide();
        Appery('mobilelabel_birthplace').hide();
        Appery('mobilelabel_affiliationName').hide();
        Appery('mobilecollapsibleset_personInfo').hide();
        
        Appery('mobilelabel_noInformationOverview').show();
        Appery('mobilelabel_noInformationDegrees').show();
        Appery('mobilelabel_noInformationRelationships').show();
        Appery('mobilelabel_noInformationContacts').show();
	},
    
    
    setPersonListItemVisibility : function(value, element) {
        
        if ( (value.title == "") && 
            (value.person.first_name == "") &&
           	(value.person.last_name == "") ) {
            
            element.hide();
        }
    },
    
    
    setProductListItemVisibility : function(value, element) {
        
        if (value.name == "") {
            
            element.hide();
        }
    },
    
    
    setOfficeListItemVisibility : function(value, element) {
        
        if ( (value.description == "") && 
            (value.address1 == "") &&
           	(value.address2 == "") &&
           	(value.zip_code == "") &&
           	(value.city == "") &&
           	(value.state_code == "") &&
           	(value.country_code == "")  ) {
            
            element.hide();
        }
    },
        
        
    setCompetitorListItemVisibility : function(value, element) {
        
        if (value.competitor.name == "") {
            
            element.hide();
        }
    },
        
    setMilestonesListItemVisibility : function(value, element) {
        
        if ( (value.description == "") && 
            (value.stoned_year == "") &&
           	(value.source_url == "")  ) {
            
            element.hide();
        }
    },
    
    
    // FUNCTIONS FOR LINKS
    
    
    setLinksInText : function(labelName) {
        
        $('div[dsid="'+labelName+'"] a').each(function(i, a) {

            a.style.color = '#2489ce';
            //a.style.fontStyle = 'italic';
            a.style.textDecoration = 'underline';
            
            if ( ~a.href.indexOf('http://appery.io/') 
                || ~a.href.indexOf('http://www.crunchbase.com')) {
            
                a.onclick = function(event) {
                    
                    event.preventDefault();
                    
                    var link = this.href;                                  
                    
                    if ( ~link.indexOf('/company/') ) {
                        Helper.navigateToPageFromLink('company', link);
                    }
                    
                    if ( ~link.indexOf('/financial-organization/') ) {
                       Helper.navigateToPageFromLink('financial-organization', link);
                    }
                    
                    if ( ~link.indexOf('/service-provider/') ) {
                       Helper.navigateToPageFromLink('service-provider', link);
                    }
                    
                    if ( ~link.indexOf('/person/') ) {
                       Helper.navigateToPageFromLink('person', link);
                    }
                    
                    if ( ~link.indexOf('/product/') ) {
                        Helper.navigateToPageFromLink('product', link);
                    }
                };
                
        	} else {
                
                a.target = '_blank';
            }
		});
    },
    
    
    // FUNCTIONS FOR DATES
    
    
    correctDayOrMonth : function(value) {
        
        if ( (value == 'null') || (value == null) ) {
            return '';
        }
            
        if (value != '') {
            value += '.';
       	}
        
        if (value.length == 2) {
            value = '0' + value;
        }
        return value;
    },
    
    
    setDateLabel : function(labelDay, labelMonth, labelYear, text) {
        
    	var year = Appery(labelYear).text();
		var month = this.correctDayOrMonth(Appery(labelMonth).text());
		var day = this.correctDayOrMonth(Appery(labelDay).text());
        
		if ( (year != '')  && (year != 'null')  && (year != null)  ) {
            Appery(labelYear).text(text + day + month + year).show();
		} else {
    		Appery(labelYear).hide();
		}
	},
    
    
    setDateLabelsInList : function(listName, labelDay, labelMonth, labelYear, text) {
        
        var labelsDays = $('ul[dsid="'+listName+'"] li div[dsid="'+labelDay+'"]');
		var labelsMonths = $('ul[dsid="'+listName+'"] li div[dsid="'+labelMonth+'"]');
        var labelsYears = $('ul[dsid="'+listName+'"] li div[dsid="'+labelYear+'"]');

		for(var i = 0; i < labelsYears.length; i++) {
            
            var year = labelsYears[i].innerHTML;
			var month = this.correctDayOrMonth(labelsMonths[i].innerHTML);
			var day = this.correctDayOrMonth(labelsDays[i].innerHTML);
            
            if  ( (year != '')  && (year != 'null')  && (year != null) ) {
                labelsYears[i].innerHTML = text + day + month + year;
            } else {
                labelsYears[i].innerHTML = '';
                labelsYears[i].style.display='none';
            }
            
            labelsMonths[i].innerHTML = '';
            labelsMonths[i].style.display='none';
            labelsDays[i].innerHTML = '';
            labelsDays[i].style.display='none';
		}
    },
    
    
    // FUNCTIONS FOR FIRST AND LAST NAMES
    
    
    setNamesOfPeopleInList : function(listName) {
        
        var firstNames = $('ul[dsid="'+listName+'"] li div[dsid="mobilelabel_firstName"]');
		var lastNames = $('ul[dsid="'+listName+'"] li div[dsid="mobilelabel_lastName"]');

		for(var i = 0; i < lastNames.length; i++) {
            
            var firstName = firstNames[i].innerHTML;
			var lastName = lastNames[i].innerHTML;
            
            if  ( (lastName != '')  && (lastName != 'null')  && (lastName != null) ) {
                lastNames[i].innerHTML = firstName + ' ' + lastName;
            } else {
                lastNames[i].innerHTML = '';
                lastNames[i].style.display='none';
            }
            
            firstNames[i].innerHTML = '';
            firstNames[i].style.display='none';
		}
    },
    
    
    // FUNCTIONS FOR LOADING
    
    
    setLoadingState : function(buttonName, labelName) {
        
        Appery(labelName).text('Loading, please wait...').show();
        Appery(buttonName).hide();
    },
    
    
    setLoadingSuccessState : function(buttonName, labelName, groupedbuttonsName, textLabelName1, textLabelName2) {
        
        Appery(labelName).hide();
        Appery(buttonName).hide();
        
        if (groupedbuttonsName !== undefined) {
    		Appery(groupedbuttonsName).show();
  		}
        
        if (textLabelName1 !== undefined) {
    		Appery(textLabelName1).show();
  		}
        
        if (textLabelName2 !== undefined) {
    		Appery(textLabelName2).show();
  		}
    },
    
    
    setLoadingCompanySuccessState : function() {
        
        this.setDateLabel('mobilelabel_foundedDay', 
                          'mobilelabel_foundedMonth', 
                          'mobilelabel_foundedYear', 
                          'Founded: ');

        this.setDateLabel('mobilelabel_deadpooledCompanyDay', 
                          'mobilelabel_deadpooledCompanyMonth', 
                          'mobilelabel_deadpooledCompanyYear', 
                          'Deadpooled: ');

        this.setLoadingSuccessState('mobilebutton_retry', 
                                    'mobilelabel_loadingText', 
                                    'mobilegroupedbuttons_companyInfo',
                                    'mobilelabel_overviewText',
                                    'mobilelabel_contactsText');

        this.setLinksInText('mobilelabel_overview');

		this.setNoInformationVisibilityByState();       
    },
    
    
    setLoadingServiceProvidarsSuccessState : function() {
        
        this.setLoadingSuccessState('mobilebutton_retry', 
                              'mobilelabel_loadingText', 
                              'mobilecollapsibleset_serviceProvInfo');

		this.setLinksInText('mobilelabel_overview');
        
        this.setNoInformationVisibilityByState(); 
    },
    
    
    setLoadingPersonSuccessState : function() {
        
        this.setDateLabel('mobilelabel_bornDay', 
                            'mobilelabel_bornMonth', 
                            'mobilelabel_bornYear', 
                            'Date of birth: ');

        this.setLoadingSuccessState('mobilebutton_retry', 
                                      'mobilelabel_loadingText', 
                                      'mobilecollapsibleset_personInfo');

		this.setLinksInText('mobilelabel_overview');
        
        this.setNoInformationVisibilityByState();       
    },
    
    
    setLoadingProductSuccessState : function() {
        
        this.setDateLabel('mobilelabel_launchedDay', 
                          'mobilelabel_launchedMonth', 
                          'mobilelabel_launchedYear', 
                          'Launched: ');

        this.setDateLabel('mobilelabel_deadpooledDay', 
                          'mobilelabel_deadpooledMonth', 
                          'mobilelabel_deadpooledYear', 
                          'Deadpooled: ');

        this.setLoadingSuccessState('mobilebutton_retry', 
                                    'mobilelabel_loadingText');

        this.setLinksInText('mobilelabel_overview');
        
        Appery('mobilelabel_contactsText').show();
        Appery('mobilelabel_overviewText').show();
        
        this.setNoInformationVisibilityByState();       
    },
    
    
    setLoadingFinancialOrgSuccessState : function() {
        
        this.setDateLabel('mobilelabel_foundedDayFO', 
                          'mobilelabel_foundedMonthFO', 
                          'mobilelabel_foundedYearFO', 
                          'Founded: ');

        this.setDateLabelsInList('mobilelist_investments', 
                                 'mobilelabel_fundedDay', 
                                 'mobilelabel_fundedMonth', 
                                 'mobilelabel_fundedYear', 
                                 'Date: ');

        this.setLoadingSuccessState('mobilebutton_retry', 
                                    'mobilelabel_loadingText', 
                                    'mobilecollapsibleset_organizationInfo');

		this.setLinksInText('mobilelabel_overview');
        
        this.setNoInformationVisibilityByState();       
    },
    
    
    setLoadingFailedState : function(buttonName, labelName) {
        
        Appery(labelName).text('Loading failed!').show();
        Appery(buttonName).show();
    },
    
    
    loadStartPage : function() {
        
        Pages.clear();

        Appery('mobilebutton_next').hide();
        Appery('mobilebutton_previous').hide();
    },
    
    
    loadCompanyPage : function() {       
        
        if (this.fromListPage) {
            
            getCompanyInfo.updateComponents(this.getJsonObject());
            this.setLoadingCompanySuccessState();
            
            
        } else {
            
            this.setCompanyInfoInvisibility();
            this.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
            getCompanyInfo.execute({});
        }	
        
        this.fromListPage = false;
        localStorage.setItem('currentEntity', 'company');
    },
      
    
    // FUNCTIONS FOR SEARCH
    
    
    getSearchEntity : function() {
        
        return $('input:radio[name=mobileradiogroup_searchEntity]:checked').val();
    },
        
    
    getTotalOfSearchPages : function(total) {
        
        return Math.ceil(total / 10); // 1 page contains 10 results
    },
        
    
    setRecordNotFoundLabel : function() {
        
        Appery('mobilelabel_searchRemark')
            .text('Sorry, we could not find the record you were looking for.')
            .show();
        
        this.hideSearchElements();
	},
    
    
    setEmptySearchQueryLabel : function() {
        
        Appery('mobilelabel_searchRemark')
            .text('Search word is not entered!')
            .show();
        
        this.hideSearchElements();
	},
    
    
    hideSearchElements : function() {
        
        Appery('mobilelist_searchResult').hide();
        Appery('mobilelabel_resultsShown').hide();
        Appery('mobilelabel_numberOfResults').hide();
        Appery('mobilebutton_previous').hide();
        Appery('mobilebutton_next').hide();
	},
    
    
    isInputFieldEmpty : function(field) {
        
        if (Appery(field).val() == '') return true;
        
        return false;
    },
    
    
    startSearch : function() {

        if (Appery('mobiletextinput_searchQuery').val() == '') {
            
            this.setEmptySearchQueryLabel();
        } else {
            Appery('mobilelabel_searchRemark').hide();       
        	localStorage.setItem('resultPage', 1);
        	this.searchAll();
        }               
    },
    
        
    searchNextPage : function() {
        
        var currentResultPage = localStorage.getItem('resultPage');
        localStorage.setItem('resultPage', +currentResultPage + 1);
        
        this.searchAll();
    },

    
    searchPreviousPage : function() {
        
        var currentResultPage = localStorage.getItem('resultPage');
        localStorage.setItem('resultPage', +currentResultPage - 1);
        
        this.searchAll();
    },
        
    
    searchAll : function() {
        
        var entity = this.getSearchEntity();
        
        localStorage.setItem('currentEntity', entity);
        
        switch (entity) {									
		               
            case 'companies':
            	searchCompany.execute({});
				break;
                	
			case 'financial-organizations':
            	searchFinancialOrg.execute({});                
				break;
			
			case 'people': 
            	searchPerson.execute({});
				break;
				  
			case 'products': 
            	searchProduct.execute({});
				break;                

			case 'service-providers': 
            	searchServiceProvider.execute({});
				break;
                
            default:
                return;
		}
    },
    
    
    setSearchAllSuccess : function() {
        
        var resultPage = +localStorage.getItem('resultPage');
        var totalPages = +localStorage.getItem('totalSearchPages');
        
        if (totalPages == 0) {            
            this.setRecordNotFoundLabel();
            return;
        }
        
        Appery('mobilelist_searchResult').show();

        this.setPrevButtonVisibility(resultPage);
        this.setNextButtonVisibility(resultPage, totalPages);  
        
        Appery('mobilelabel_resultsShown').text('page ' + resultPage + ' of ' + totalPages).show();
        Appery('mobilelabel_numberOfResults').show();
    },
    
    
    setPrevButtonVisibility : function(resultPage) {
        
        if (resultPage > 1) {
        	Appery('mobilebutton_previous').show();
        } else {
            Appery('mobilebutton_previous').hide();
        }
    },
    
    
    setNextButtonVisibility : function(resultPage, totalPages) {
               
        if (resultPage < totalPages) {
        	Appery('mobilebutton_next').show();
        } else {
            Appery('mobilebutton_next').hide();
        }
    },
    
    
    // FUNCTIONS FOR NAVIGATION    
    
    
    navigateToPage : function(page, permalink) {
	
		localStorage.setItem('selectedPermalink', permalink);
        
		Appery.navigateTo(page, {});
	},
    
    
    navigateToPageFromLink : function(entity, link) {
               
        var str = '/' + entity + '/';
        var pos = link.indexOf(str);
        var len = ('/' + entity + '/').length;

        var index = pos + len;       
        var permalink = link.substr(index);
        
        var currentPageName = Helper.getCurrentPageNameByEntity();
		                    
        Pages.push(currentPageName, localStorage.getItem('selectedPermalink'));
        localStorage.setItem('selectedPermalink', permalink);
        Helper.navigateToNextPage(entity, currentPageName);
        
        this.fromListPage = false;
    },
    
    
    updateCurrentPage : function(page, permalink) {
    
        localStorage.setItem('selectedPermalink', permalink);
        
    	switch (page) {									
		               
            case 'CRUNCHBASE_companyInfo':               
            	this.updateCompanyPage();               
				break;
                	
			case 'CRUNCHBASE_financialOrgInfo':               
            	this.updateFinancialOrgPage();                  
				break;
			
			case 'CRUNCHBASE_serviceProviderInfo': 
            	this.updateServiceProvaderPage();                 
				break;		
                

			case 'CRUNCHBASE_personInfo':                
            	this.updatePersonPage();             
				break;
                
            case 'CRUNCHBASE_productInfo':                 
            	this.updateProductPage();                 
				break;
		}
    },
    
         
    updateCompanyPage : function() {
        
        this.setCompanyInfoInvisibility();
        this.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
        
        getCompanyInfo.execute({});
    },
        
        
    updateFinancialOrgPage : function() {
        
        this.setFinancialOrgInfoInvisibility();
        this.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
        
        getFinancialOrgInfo.execute({});
    },
        
        
    updateServiceProvaderPage : function() {
        
        this.setServiceProvaderInfoInvisibility();
        this.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
        
        getServiceProviderInfo.execute({});
    },    
    
    
    updateProductPage : function() {
        
        this.setProductInfoInvisibility();
        this.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
        
        getProductInfo.execute({});
    },    
        
            
    updatePersonPage : function() {
        
        this.setPersonInfoInvisibility();
        this.setLoadingState('mobilebutton_retry', 'mobilelabel_loadingText');
        
        getPersonInfo.execute({});
    },            
                
                
    navigateToSearchResultPage : function() {
	
		var entity = localStorage.getItem('currentEntity');
        
        this.fromListPage = false;

		switch (entity) {									
		
			case 'companies':                
                Appery.navigateTo('CRUNCHBASE_companyInfo', {});
				break;
				
			case 'financial-organizations': 
                Appery.navigateTo('CRUNCHBASE_financialOrgInfo', {});
				break;
				
			case 'service-providers': 
                Appery.navigateTo('CRUNCHBASE_serviceProviderInfo', {});
				break;
				
			case 'products': 
                Appery.navigateTo('CRUNCHBASE_productInfo', {});
				break;
				
			case 'people': 
                Appery.navigateTo('CRUNCHBASE_personInfo', {});
				break;
		}	
    },
    
        
    navigateToNextPage : function(entity, currentPage) {
        
        this.fromListPage = false;
        
		switch (entity) {									
		               
            case 'company':
            case 'companies':
                if (currentPage == 'CRUNCHBASE_companyInfo') {                    
                    this.updateCompanyPage();                    
                } else {
                    Appery.navigateTo('CRUNCHBASE_companyInfo', {});
                }                
				break;
                
			case 'financial-organization': 	
			case 'financial-organizations': 
                if (currentPage == 'CRUNCHBASE_financialOrgInfo') {
                    this.updateFinancialOrgPage();                    
                } else {
                	Appery.navigateTo('CRUNCHBASE_financialOrgInfo', {});
                }
				break;
			
            case 'service-provider': 
			case 'service-providers': 
                if (currentPage == 'CRUNCHBASE_serviceProviderInfo') {                    
                    this.updateServiceProvaderPage();                    
                } else {
                	Appery.navigateTo('CRUNCHBASE_serviceProviderInfo', {});
                }
				break;
				
            case 'product':     
			case 'products': 
                if (currentPage == 'CRUNCHBASE_productInfo') {                    
                    this.updateProductPage();                    
                } else {
                	Appery.navigateTo('CRUNCHBASE_productInfo', {});
                }
				break;
                
			case 'person':	
			case 'people': 
                if (currentPage == 'CRUNCHBASE_personInfo') {                    
                    this.updatePersonPage();                    
                } else {
                	Appery.navigateTo('CRUNCHBASE_personInfo', {});
                }
				break;
		}	
    },
    
        
    navigateToNextListPage : function(page) {

        this.fromListPage = true;
        
        Appery.navigateTo(page, {});
    },
        
                
    goBack : function(oldPage) {				
	
        this.fromListPage = false;
        
		var pageInfo = Pages.pop();
		var page = pageInfo.page;
		var permalink = pageInfo.permalink; 
       
        if (oldPage == page) {
            this.updateCurrentPage(page, permalink);
        }
        else {
            this.navigateToPage(page, permalink);
        }
        
        if (page == 'CRUNCHBASE_search') {
            this.searchAll();
        }
    },
     
        
    goHome : function() {
        
        Pages.clear(); 
        
        this.fromListPage = false;
        
        this.navigateToPage('CRUNCHBASE_search', '');
        
        Appery('mobiletextinput_searchQuery').val('');
        Appery('mobilelabel_searchRemark').hide();
        Appery('mobilelist_searchResult').hide();
        Appery('mobilelabel_resultsShown').hide();
        Appery('mobilelabel_numberOfResults').hide();
        Appery('mobilebutton_previous').hide();
        Appery('mobilebutton_next').hide();        
    },
        
        
    getCurrentPageNameByEntity : function() {
        
        var entity = localStorage.getItem('currentEntity');
                
		switch (entity) {									
		               
            case 'company':
            case 'companies':
                return 'CRUNCHBASE_companyInfo';
                
			case 'financial-organization': 	
			case 'financial-organizations': 
                return 'CRUNCHBASE_financialOrgInfo';
			
            case 'service-provider': 
			case 'service-providers': 
                return 'CRUNCHBASE_serviceProviderInfo';
				
            case 'product':     
			case 'products': 
                return 'CRUNCHBASE_productInfo';
                
			case 'person':	
			case 'people': 
                return 'CRUNCHBASE_personInfo';
                
            default:
                console.log('Helper.getCurrentPageNameByEntity - unknown entity: ' + entity);
		}
    },    
        
        
    saveResponse : function(data) {
        
        var response = JSON.stringify(data);
        localStorage.setItem('json_response', response);
    },
        
        
    getJsonObject : function() {
        
        var str = localStorage.getItem('json_response');
        var parsedJSON = JSON.parse(str);
        
        return parsedJSON;
    }

}