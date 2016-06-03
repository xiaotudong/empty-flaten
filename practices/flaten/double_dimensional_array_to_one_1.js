'use strict';

function double_to_one(collection) {
  var array = get_array(collection);
  var new_collection = output_array(array);
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
  var new_collection = [];

  for (var i = 0; i < array.length; i++) {
   if (!isNaN(array[i])) {
      new_collection.push(parseInt(array[i]));
    }
  }
  return new_collection;
}

module.exports = double_to_one;
