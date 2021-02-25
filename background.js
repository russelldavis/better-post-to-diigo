chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.executeScript({
    // From https://www.diigo.com/tools/post_to_diigo
    code: `(function(){
      var url = location.href;
      var title = document.title || url;
      var desc = (window.getSelection ? window.getSelection().toString() : document.getSelection ? document.getSelection()  : document.selection.createRange().text);
      ww=window.open(
          'https://www.diigo.com/post?url=' + encodeURIComponent(url) +
              '&title=' + encodeURIComponent(title.replace(/"/g, '&quot;')) +
              '&desc=' + encodeURIComponent(desc.replace(/"/g, '&quot;')) +
              '&client=simplelet#main',
          '_blank',
          'menubar=no,height=580,width=608,toolbar=no,scrollbars=no,status=no'
      );
    })();`
  });
});
