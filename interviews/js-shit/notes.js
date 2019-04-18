// #######################################
// ########################## EVENT LOOP ##################################################################
// #######################################
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// The event loops allows you to do concurrancy
// 1) Looks at the stack and looks at the callback queue
// 2) If the stack is empty is takes a look at the callbak queue and pushes it on the stack.
// #######################################
// ########################## CALL STACK ##################################################################
// #######################################
// https://www.youtube.com/watch?v=W8AeMrVtFLY
// Why does it matter?
// helpful for debugging chrome has debugging tools
// What is the call stack ?
// + kind of like a to do list
// + js can mainly do one thing at a time and it is single threaded
// + the call stack is a stack where function wait in line to be executed
// + one thing is happening at a time and this it the way js stores it
// + it has a last in first out structure
// [stack] main -> multiply -> something (something is the first thing to pop off)
// [stack frame] is a function added to the stack (it contains the name, the parameters, and current line number)

// const first = () => {};
// const second = () => {
//   return first();
// };

// second();

// [stack] second -> first // second is added to the stack. then first, then first pops off, then second

// const first = () => {
//   return first();
// };
// const second = () => {
//   return first();
// };

// second();

// maximum call stack size exceeced
// because nothing is being called in the case it just keeps adding functions to the call stack.
// (recursion often causes this problem)

// #######################################
// ########################## Callback Queue #################################################
// #######################################

// #######################################
// ########################## MEMORY LEAK IS JS ##############################################
// #######################################
// + what causes them?
// + what are they?

// #######################################
// ########################## BLOCKING ##############################################
// #######################################
// What happens when things are slow? blocking behaviour
// image slow, network requests are slow
// don't want to block the stack because then the browers is stuck.
// solutions are acsync callbacks
// +
