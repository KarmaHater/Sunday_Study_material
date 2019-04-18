// ##################################
// Data Structures
// ##################################

// Array
// ##################################
// 1) you need indexed/random access to elements
// 2)you know the number of elements in the array ahead
// of time so that you can allocate the correct amount of memory for the array
// 3) memory is a concern. Filled arrays take up less memory than linked lists.
// Each element in the array is just the data. Each linked list node requires
// the data as well as one (or more) pointers to the other elements in the linked list.
// 4) Arrays have O(1) random access, but are really expensive to add stuff onto or remove stuff from.
// O(1) means that it takes a constant

// Single LinkList
// ##################################
// 1) You don't know how many items will be in the list.
// With arrays, you may need to re-declare and copy memory if the array grows too big
// 2) You need constant-time insertions/deletions from the list (0)n
// O(n) means it takes an amount of time linear with the size of the set,
// 3) you don't need random access to any elements
// 4) you want to be able to insert items in the middle of the list (such as a priority queue)
// 5) You need to make lots of insertions and/or deletions into the middle of your list
// 6) Whenever there are an unknown number of elements at run-time.
// BIG0:
// insertion 0(1)
// removal 0(1) (depends 0(1) head || 0(N) tail)
// searching 0(N)
// searching 0(N)

// ##################################
// Double LinkList
// ##################################
// If you are going to delete an element in a linked list,
// you will need to link the previous element to the next element.
// With a doubly linked list you have ready access to both elements because you have links to both of them.
// This assumes that you already have a pointer to the element you need to delete and there is no
// searching involved.
// two pointers next and pervious making it easier for removal or reverse it but it takes up more memory.
// start from the end and work backward like your browsers history back and next.
// -----------
// BIG0:
// -----------
// insertion 0(1)
// removal 0(1)
// searching 0(N)
// searching 0(N)

// ##################################
// Stack and Queues
// ##################################
// 1) Use a queue when you want to get things out in the order that you put them in.
// 2) Use a stack when you want to get things out in the reverse order than you put them in.
// 3) Use a list when you want to get anything out, regardless of when you put them in (and
// when you don't want them to automatically be removed).

// STACKS: undo and redo, history stack
// QUEUES: background tasks, uploading resources, printing task
// -----------
// BIG0:
// -----------
// insertion 0(1)
// removal 0(1)
// searching 0(N)
// searching 0(N)

// ##################################
// Tree's (many different types)
// ##################################
// have nodes but are in the parent  child(optional) tree relationship
// list are linear trees are non linear
// UseCases: Html DOM; Network Routing; Decision trees; Folders are modeled in your computer, JSON(tree structure)

// ##################################
// Binary Search Tree (good at searching) (can only have two children)
// ##################################
// Every node to the left is less then the parent and everything to the right is great then the parent
// 10;
// 6 | 11;
// -----------
// BIG0: 0(log n) insertion and searching "good" (only works with sorted data) is not guarantee
// could have one path and not splitting
// -----------
// insertion 0( long b)
// removal
// searching
// searching

// ##################################
// Binary Heaps (another category of heaps) (min and max heaps) (should come back )
// ##################################
// 1) Is a binary tree structure but in max parents are always larger then the child min parents are always smaller then the children
// they can only have to children but there is not order from the left to the right. They just have to be smaller or bigger.
// 2) it is compact are possible it can not keep going like a binary tree. The left is always filled out first. No implied ordering between siblings
// use for graph traversal and priority queue
// BIG0: 0(log n)
// -----------
// insertion
// removal
// searching

// ##################################
// Hash Tables // Map
// ##################################
// 1) Don't care about order
// 2) easy add, find, removing
// 3) Key value pairs
// BIG0: 0(1) constant time
// if you know the key if you don't know the key it is (n)
// -----------
// insertion
// removal
// searching

// ##################################
// Graphs
// ##################################
// used it social networks
// trees are a special kind of tree
// collections of node with a set of nodes with connections
// these connections are not as constricting  as trees or lists
// mapping, routing, locations
// creates clusters eg storing friends connections
// a bunch or roads they are connected in many different ways
// recommendations engines nodes that connect movies (space, future, sci-fi) which ones share the most nodes.
// directed graph and undirected graph
// weighted graph and unweighted graph (edges have values)

// ##################################
// Graphs Traversal
// ##################################
