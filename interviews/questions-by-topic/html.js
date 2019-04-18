// What does a doctype do?
// #############################################################################################
// it is an instruction to the web browser about what version of the markup language the page is written in.
// DOCTYPEs are required for legacy reasons.

// #############################################################################################
// How do you serve a page with content in multiple languages?
// #############################################################################################
    // The below tags only support one lang
    {/* <meta http-equiv="content-language" content="en" /> */}
    {/* <html lang="en"></html> */}

    // can solve the problem by using divs

    {/* <div lang="fr-CA" xml:lang="fr-CA">
    Canadian French content...
    </div>
    <div lang="en-CA" xml:lang="en-CA">
    Canadian English content...
    </div>
    <div lang="nl-NL" xml:lang="nl-NL">
    Netherlands, Dutch content...
    </div> */}

// #############################################################################################
// What kind of things must you be wary of when design or developing for multilingual sites?
// #############################################################################################

// #############################################################################################
// What are data- attributes good for?
// #############################################################################################
// The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.


// #############################################################################################
// Consider HTML5 as an open web platform. What are the building blocks of HTML5?
// #############################################################################################
    // Building blocks of HTML5 are mentioned below :
    // more semantic text markup
    // new form elements
    // vedio and audio
    // new javascript API
    // canvas and SVG
    // new communication API
    // geolocation API
    // web worker API
    // new data storage

// #############################################################################################
// Describe the difference between a cookie, sessionStorage and localStorage.
// #############################################################################################
    // LocalStorage
        // Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data
        // Storage limit is the maximum amongst the three

    // SessionStorage
        // The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed.
        // Data is never transferred to the server.

    // Cookie
        // Stores data that has to be sent back to the server with subsequent requests.
        // Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
        // Cookies are primarily for server-side reading (can also be read on client-side), localStorage and sessionStorage can only be read on client-side.

// #############################################################################################
// Describe the difference between <script>, <script async> and <script defer>.
// #############################################################################################
// Normal execution <script>
    // Parsing of the HTML code pauses while the script is executing. For slow servers and heavy scripts this means that displaying the webpage will be delayed.
// Deferred execution <script defer>
    // Simply put: delaying script execution until the HTML parser has finished. However, since not every browser supports defer yet, don’t rely on it!
// Asynchronous execution <script async>
    // Don’t care when the script will be available? Asynchronous is the best of both worlds: HTML parsing may continue and the script will be executed as soon as it’s ready.

// #############################################################################################
// What is progressive rendering?
// #############################################################################################
    // Progressive rendering is the name given to techniques used to render content for display as quickly as possible.

    // Examples of such techniques :
    // Lazy loading of images where (typically) some javascript will load an image when it comes into the browsers viewport instead of loading all images at page load.
    // Prioritizing visible content (or above the fold rendering) where you include only the minimum css/content/scripts necessary for the amount of page that would be
    // rendered in the users browser first to display as quickly as possible, you can then use deferred javascript (domready/load) to load in other resources and content.

// #############################################################################################
// Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
// #############################################################################################
//  allows you to specify different kind of images for different screen-sizes/orientation/display-types.

// #############################################################################################
// Have you used different HTML templating languages before?
// #############################################################################################
// Mustache
