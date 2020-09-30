chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  alert("I am popup!");
  sendResponse({
      data: "I am fine, thank you. How is life in the background?"
  }); 
});