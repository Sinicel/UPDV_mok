chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse){
       localStorage["total_elements"] = request.total_elements;
    }
    
);
console.log(localStorage)