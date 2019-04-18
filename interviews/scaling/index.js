// small applications are nice because
// - build times are fast
// - you understand the whole thing as a whole
// - can mangage with a smaller team
// - fewer dependencies
// -  not much tech debt
// - go time to experiement

// BUT IT DOES NOT STAY THAT WAY.

// - microservices are a way.
// - easy to rewrite and when you wait
// - backend has an advantage because users don't see it.
// - when you start splitting this on the frontend id directly effects the user

// how can we do this on the frontend what they do on the backend?

// where do you split?

// -  kept separeate products separate (kept you blog separate)
// - think with in those products where you can split things
// - where is a screen refresh is acceptable to our users.
// - this about stuff that is shared everywhere NavBar

// LET's GET TECHNICAL

// creating apps has to be easy have a good appilcation generator
// has to be easy to build it
// need to own your build
// how to run multiple apps at the same time (symbotic links suck)

// CONSITANCY
// style guide ()
// prettier
// eslint
// libraies are a pain and hard to share in many application (sometimes it is better to copy paste code)
// versionsing marjor and minor only

//  

// if they have tech debt in a small place it is easy to fix or replace
// cross team is difficult

//some times the costs is just to high and you can't split

// PIT FALLS
//- show appications have biolerplate they do not need
// - some apps become overly complicated
// - some times applications are split the "wrong way" and they no longer meet bussiness needs
// - pages refresh
// - there is repeated code
// - workflow people don't know
// - not much community support
