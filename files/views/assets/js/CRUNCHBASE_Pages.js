var PagesStack = {
    
    stackElement : function(page, permalink) {
        this.permalink = permalink;                    
        this.page = page;
    },            
   
    stack : function() {                  			
		var elements;
		
		this.push = function(page, permalink) {

            if (elements === undefined) {			
				elements = [];   
			}       
            
			var newElement = new PagesStack.stackElement(page, permalink); 
			elements.push(newElement);
		}
		
		this.pop = function() {
            if (elements.length != 0) {
				return elements.pop();
            }
		}
		
		this.stackTop = function() {
			return elements[elements.length - 1];
		}
		
		this.clear = function() {
			elements = undefined;
		}
	}
};
    
var Pages = new PagesStack.stack();