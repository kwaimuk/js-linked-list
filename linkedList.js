/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
 function linkedListGenerator(){
  var head = null;
  var tail = null;
  var getHead = function(){

    return head;
  };

  var getTail = function(){
    return tail;
  };

  var add = function(vari){
    var newNode = {
      value: vari,
      next: null
    };


    if (head === null && tail === null){
      head = newNode;
      tail = newNode;
      return newNode;
      }

      tail.next = newNode;
      tail = newNode;

  };



  var remove = function(){

  };

  var get = function(){

  };

  var insert = function(){

  };

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    remove: remove,
    get: get,
    insert: insert
  };
}

