'use strict';

function double_to_one(collection) {
  var array = get_array(collection);
  var new_array = output_array(array);
  var new_collection = output_new_collection(new_array);
  return new_collection;
}

function get_array(collection) {
  var array = [];
  collection = collection.toString();
  collection = collection.split();
  array = collection.join();

  return array;
}

function output_array(array) {

  var new_array = [];
  for (var i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      new_array.push(parseInt(array[i]));
    }
  }
  return new_array;
}

function output_new_collection(newarray) {
  var new_collection = [];

  for (var i = 0; i < newarray.length; i++) {
    if (new_collection.indexOf(newarray[i]) == -1) {
      new_collection.push(newarray[i]);
    }
  }

  return new_collection;
}
module.exports = double_to_one;
