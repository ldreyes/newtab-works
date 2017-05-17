$('body').on('click', '*', function(event) {
    window.alert(' ID of element- testing');
    // window.alert(' ID of element=' + $(this).attr('id'));  // Get ID attribute
    // window.alert(' ID of Parent element=' + $(this).parent().attr('id'));
    // var newURL = "https://waterlooworks.uwaterloo.ca/myAccount/co-op/coop-postings.html";
    var newURL = "https://google.com";
    chrome.tabs.create({ url: newURL });
});
