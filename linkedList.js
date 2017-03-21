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



  var remove = function(gaga){
    // console.log("HEAD",head);
    // console.log("TAIL",tail);
    var find =get(gaga);

    var previous = get(gaga - 1);
    var section = get(gaga + 1 );


    if(find === false){
      console.log("find",find);
      return false;
    } else if(section === false){
      previous.next = null;
      tail = previous;
    } else if(gaga===0){
      head=section;
    } else if(find === false){
      console.log("find",find);
      return false;
    }



//edge case if node delete itself
    // if(previous === false && section === false){
    //   head = null;
    //   tail = null;
    // }



    previous.next = section;

    console.log("HEAD2",head);
    console.log("TAIL2",tail);
    console.log("gaga2",get(2));

  };

  var get = function(dada){

    var currentNode = head;
    for(var i =0; i < dada;i++){
      if(currentNode.next === null){
        return false;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
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
};

