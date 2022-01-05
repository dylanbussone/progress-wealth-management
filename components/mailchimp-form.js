import React from 'react';

// this is dumb
const mailchimpHTML = `<link href="//cdn-images.mailchimp.com/embedcode/classic-10_7_dtp.css" rel="stylesheet" type="text/css">
<style type="text/css">#mc_embed_signup{ clear:left; }</style>
<div id="mc_embed_signup">
   <form action="https://progresswealthmanagement.us20.list-manage.com/subscribe/post?u=d063239887670d00857b9e34d&amp;id=c1e2f08c39" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
      <div id="mc_embed_signup_scroll">
         <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
         <div class="mc-field-group"><label for="mce-EMAIL">Email Address <span class="asterisk">*</span></label><input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"></div>
         <div class="mc-field-group"><label for="mce-FNAME">First Name </label><input type="text" value="" name="FNAME" class="" id="mce-FNAME"></div>
         <div class="mc-field-group"><label for="mce-LNAME">Last Name </label><input type="text" value="" name="LNAME" class="" id="mce-LNAME"></div>
         <div class="mc-field-group size1of2">
            <label for="mce-BIRTHDAY-month">Birthday </label>
            <div class="datefield"><span class="subfield monthfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="MM" size="2" maxlength="2" name="BIRTHDAY[month]" id="mce-BIRTHDAY-month"></span> / <span class="subfield dayfield"><input class="birthday " type="text" pattern="[0-9]*" value="" placeholder="DD" size="2" maxlength="2" name="BIRTHDAY[day]" id="mce-BIRTHDAY-day"></span> <span class="small-meta nowrap">( mm / dd )</span></div>
         </div>
         <div id="mce-responses" class="clear foot">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
         </div>
         <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_d063239887670d00857b9e34d_c1e2f08c39" tabindex="-1" value=""></div>
         <div class="optionalParent">
            <div class="clear foot">
               <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
               <p class="brandingLogo"><a href="http://eepurl.com/hRo4jL" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>
            </div>
         </div>
      </div>
   </form>
</div>
<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($){window.fnames=new Array(); window.ftypes=new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';fnames[6]='COMPANY';ftypes[6]='text';}(jQuery));var $mcj=jQuery.noConflict(true);</script>`;

const MailchimpForm = () => (
    <div
        dangerouslySetInnerHTML={{
            __html: mailchimpHTML,
        }}
    />
);

export default MailchimpForm;
