/**
 * @file
 * Javascript for ninesixtyrobots theme.
 */
(function ($) {

// Prefill the search box with Search... text.
Drupal.behaviors.vincent = {
  attach: function (context) {

    jQuery('.featured .individual-ad, .listings-content .individual-ad, .rand-ads').hover(function (e) {
      if (e.type === 'mouseenter') {
        jQuery('.adv-hover', this).css('display', 'block');
        //jQuery('.fa', this).attr('style', 'border-color: #1dd2af');
      }
      if (e.type === 'mouseleave') {
        jQuery('.adv-hover', this).css('display', 'none');
        //jQuery('.fa', this).attr('style', 'border-color: #ffffff');
      }
    });

    // Add form-inline class to subscribe form element
    jQuery('#subscribe-form div').addClass('form-inline');
    //jQuery('#edit-field-category :first-child').attr('selected', 'selected');

    jQuery('.page-facet .facets-widget-checkbox h2').click(function() {
        jQuery(this).siblings('ul').toggle();
        //var sib = jQuery(this).siblings('ul');
        //console.log('passed');
    });

//    jQuery('.listings-pager li.pager-next a').text('>');
//    jQuery('.listings-pager li.pager- a').text('<');

  }
};

})(jQuery);
