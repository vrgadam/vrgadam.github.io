( function() {
  function loadScript(url, callback) {
    var script = document.createElement("script")
    script.type = "text/javascript";

    script.onload = function() {
      callback();
    };
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  function createElement(type, className, id, text) {
    return $('<' + type + '/>', {
      class: className,
      id: id,
      text: text
    });
  }

  $(document).ready(function() {
    // var codes = $('code');
    // codes.each(function(i, code) {
    //   var id = 'code_' + i;
    //   $(code).attr('id', id);
    //   $(code).parent().parent().append(createElement('button', 'btn', null, 'Copy').attr('data-clipboard-target', id));
    // });

    // loadScript('/clipboard.js', function() {
    //   new Clipboard('.btn');
    // });
  });
} )();
