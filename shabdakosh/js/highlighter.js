(function ($, Drupal) {
    Drupal.behaviors.koshHighlighter = {
      attach: function (context, settings) {
          //highlight function is written in jquery.highlight-5.js
//console.log('hello');
        $('p', context).highlight($('#edit-shodh').val());

      }
    };
  })(jQuery, Drupal);