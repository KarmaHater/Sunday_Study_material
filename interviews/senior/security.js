// #########################
// ###### SECURITY #######
// ##########################

// INJECTIONS
// ##########################
// inject third party code injects.
//  SQL injections
// inline scripts
// innerHtml is bad don't use it because if you get the content from an input they can add unwanted scripts to you page. (create textNode instead)
// only let a user enter data of a certian type
// sanitizes it.

// THIRD PARTY LIBARAIES
// ##########################
// tools to check you third parties libraries
// - nsp
// - snky

// LOGGING
// ##########################
// able to tracking bad people in your app faster.
// npm morgan -- loger
// npm cors
// npm winston -- loger

// HTTPS
// ##########################
// letsencrtyp.org

// XXS & CSRF
// ##########################
// try to add js scripts to your page React does this by defualt
// they can redirict and steal cookies so they can login into accounts later
// need to set this in the headers
// resizeBy.set({'Content-Security-Policy: 'srcipt source self google"})
// httpOnly & secure cookies

// CODE SECRETS
// ##########################
// .env

// HEADERS
// ##########################
// npm helmet

// ACCESS CONTROL / RIGHTS
// ##########################
