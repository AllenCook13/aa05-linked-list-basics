const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/
const N = 100000
let linkedList = new LinkedList();

let startHeadSingle = Date.now()
for(let i = 0; i < N; i++) {
    linkedList.addToHead(i)
}
let endHeadSingle = Date.now()
//************************************

linkedList = new DoublyLinkedList();

let startHeadDouble = Date.now()
for(let i = 0; i < N; i++) {
    linkedList.addToHead(i)
}
let endHeadDouble = Date.now()
//*************************************

linkedList = new LinkedList();

let startTailSingle = Date.now()
for(let i = 0; i < N; i++) {
    linkedList.addToTail(i)
}
let endTailSingle = Date.now()
//**************************************

linkedList = new DoublyLinkedList();

let startTailDouble = Date.now()
for(let i = 0; i < N; i++) {
    linkedList.addToTail(i)
}
let endTailDouble = Date.now()

console.log(`AddHeadSingle: ${endHeadSingle - startHeadSingle}ms`)
console.log(`AddHeadDouble: ${endHeadDouble - startHeadDouble}ms`)
console.log(`AddTailSingle: ${endTailSingle - startTailSingle}ms`)
console.log(`AddTailDouble: ${endTailDouble - startTailDouble}ms`)
