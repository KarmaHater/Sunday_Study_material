// #########################
// ###### PERFORMANCE #######
// ##########################

// NETWORK LATANENCY
// ##########################
// + optimise number of files and there size
// + optimise images

// CRITICAL RENDER PATH (FRONTEND)
// ##########################
// https://medium.com/@luisvieira_gmr/understanding-the-critical-rendering-path-rendering-pages-in-1-second-735c6e45b47a    
// + css is render blocking.  The DOM will not load until it is done.
// + delay rendering css that is not used until after the DOM is loaded
// + JS script pause dom constructions.
// + Anyc of defer  JS file that are not important so they do not block the critical render path.

// The page will only load once the html, css and js is loaded. Just then will it create the rendered tree and lastly create the layout and be painted.
// https://www.udemy.com/the-complete-junior-to-senior-web-developer-roadmap/learn/v4/t/lecture/10208324?start=0

// DOM -> CCSDOM -> render tree -> layout -> paint

// js need css and html before it can run

// YOUR FRAMEWORK (FRONTEND)
// ##########################
// shouldComponentUpdate or dumb components
// dumb components  are not good for complicated data structs. Highlight updates in react console
// Why did up update nom package

// PROGRESSIVE WEB APPS
// ##########################
// A website like acts like a native app
// uses server-workers and browers cache

// https://www.youtube.com/watch?v=5V2Y1-RlNKo


// the 4 most important metrics are:
// - first meaningful paint - this is the first time the browser renders text or images
// - time to interactive - the first time the browser is fully interactive for at least 5 seconds
// - speed index - this is a formula based on visual completeness
// - performance score - also a formula based on a lot of metrics

// what you did might not impact any of these metrics
// the images are still loaded, but at a later time
// I think Lighthouse means image deferring as only loading them when the user scrolls down
