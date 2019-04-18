// #########################
// ###### CDN #######
// ##########################
// helps speed up website by caeching content on multiple servers (cloudfare/ cloudfront (aws))
// they go to cloudfare first
// goes to the edge servr then the origin server. Once the edge server has the content
// it will not long hit the origin server speeding it up
// can handle higher traffic loads
// block spammers
// sometimes load balancing
// it is really secure
// the problem is latency ()phyical distance between a user and the serer that the content is on

// #########################
// ###### GZIP #######
// ##########################
// make html and css and js gzip file compression on the server
// all the content that is sent to the client will be gzip
// ngix can do this as well
// google created broadly by google

// #########################
// ###### DATABASE SCALING #######
// ##########################
// idenfiy ineficient queries (only request what you need or indexes)
// increase memory
// vertical scaling  (redis)


// #########################
// ###### CHACING #######
// ##########################
// CPU (brain of computer)
// RAM (random actess memory)
// HARDDISK (phyical disk drive)
// chacing can happen anywhere.
// chacing on the broswer
// chacing on the server
// chacing on the database
// use redis to chacing database requests
// set headers to api request to chace content for certian amount of time 304 etag


// #########################
// ###### NGINX #######
// ##########################
// just serves single page
// html css js
// always a load blancers
