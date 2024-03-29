import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-key',
  templateUrl: './key.component.html',
  styleUrls: ['./key.component.css']
})
export class KeyComponent implements OnInit {
  // form: FormGroup;
  // new_key: string;

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    // this.form = new FormGroup({
    //   first_name: new FormControl(null, {
    //     validators: [Validators.required]
    //   }),
    //   last_name: new FormControl(null, {
    //     validators: [Validators.required]
    //   }),
    //   email: new FormControl(null, {
    //     validators: [Validators.required, Validators.email]
    //   }),
    //   api_use: new FormControl(null, {
    //     validators: []
    //   }),
    // });


    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
    window["apiUmbrellaSignupOptions"] = {
      // Pick a short, unique name to identify your site, like 'gsa-auctions'
      // in this example.
      registrationSource: 'nasa-apis',

      // Enter the API key you signed up for and specially configured for this
      // API key signup embed form. (old key: 'epy8fYKbpqJaFjkA01pDp5cvlVLGaCYxIq0Oh7bd')
      apiKey: 'jfr9uihqvncOuii7lda5bDlsvOIDePcKTLWlzLte',


      // Provide an example URL you want to show to users after they signup.
      // This can be any API endpoint on your server, and you can use the
      // special {{api_key}} variable to automatically substitute in the API
      // key the user just signed up for.
      exampleApiUrl: 'https://api.nasa.gov/planetary/apod?api_key={{api_key}}',

      // OPTIONAL: Provide extra content to display on the signup confirmation
      // page. This will be displayed below the user's API key and the example
      // API URL are shown. HTML is allowed. Defaults to ""
      // signupConfirmationMessage: '',

      // OPTIONAL: Provide a URL to your own contact page to link to for user
      // support. Defaults to "https://api.data.gov/contact/"
      contactUrl: 'nasa-data@lists.arc.nasa.gov',

      // OPTIONAL: Set to true to verify the user's e-mail address by only
      // sending them their API key via e-mail, and not displaying it on the
      // signup confirmation web page. Defaults to false.
      verifyEmail: true,

      // OPTIONAL: Set to false to disable sending a welcome e-mail to the
      // user after signing up. Defaults to true.
      // sendWelcomeEmail: false,

      // OPTIONAL: Provide the name of your developer site. This will appear
      // in the subject of the welcome e-mail as "Your {{siteName}} API key".
      // Defaults to "api.data.gov".
      siteName: 'Open NASA',

      // OPTIONAL: Provide a custom sender name for who the welcome email
      // appears from. The actual address will be "noreply@api.data.gov", but
      // this will change the name of the displayed sender in this fashion:
      // "{{emailFromName}} <noreply@api.data.gov>". Defaults to "".
      emailFromName: 'NASA Open APIs',

      // OPTIONAL: Provide an extra input field to ask for the user's website.
      // Defaults to false.
      // websiteInput: true,

      // OPTIONAL: Provide an extra checkbox asking the user to agree to terms
      // and conditions before signing up. Defaults to false.
      // termsCheckbox: true,

      // OPTIONAL: If the terms & conditions checkbox is enabled, link to this
      // URL for your API's terms & conditions. Defaults to "".
      // termsUrl: "https://agency.gov/api-terms/",
    };

    /* * * DON'T EDIT BELOW THIS LINE * * */
    (function() {
      var apiUmbrella = document.createElement('script');
      apiUmbrella.type = 'text/javascript';
      apiUmbrella.async = true;
      apiUmbrella.src = 'https://api.data.gov/static/javascripts/signup_embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(apiUmbrella);
      console.log(apiUmbrella);
    })();
  }

  onSubmit() {

    // if (this.form.invalid) {
    //   return;
    // }
    // this.new_key = "DqO0luEtsDO028fNJ41hLhIaHdIuySSHCTLPiH0b";
  }

}
