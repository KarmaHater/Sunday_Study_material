// https://www.restapitutorial.com/lessons/whatisrest.html

// What is rest?
// a design pattern that focus on resources on resource with verbs to depriving mean from a request.
// hypermedia: hyperLinks from resources // graphQL? HATEOAS

// easy to use or maintain
// best for resources and not very goo for procedures.

// URI DESIGN
// ###########################
// use nouns not verb /users/:id
// /users/:any-key (date 2033-01-24) must refer to the same item
// http verbs (get, post(new), put (update), delete)

// get -> resource -> get status code
// post -> create new resource -> return that item -> turn error if the are trying to update -> get status code
// put -> update resource -> return that item -> get status code
// delete -> remove resource -> return status code

// content-type: what form of data that will be given to the server and you can reuse the same end points

// #########################
// http
// #########################
// status code 200 -500 need about three - ten
// 304 not modified when you are returning a cached item

// #########################
// associations
// #########################
// use the uri as navigation
// if you have more complex needs consider using query parameters
// customers?country=US

// #########################
// formating results
// #########################
// use accept header to hint at what format they can expect; have a fall back
// or use a query parameter to request format

// when returning arrays wrap it in an object therefore you can send other information around the collection

// E-tags deal with server caching weak and strong tag loose equal or byte by byte
// deals with the if-none-match header if they match they return the cache else they get the new result
// import with PUT

