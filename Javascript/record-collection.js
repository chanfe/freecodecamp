// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value !== ""){
    if(prop === "artist" || prop === "album") {
      collection[id][prop] = value
    }

    else if (prop === "tracks") {
      try{
        collection[id][prop].push(value)
      }
      catch{
        collection[id][prop] = []
        collection[id][prop].push(value)
      }
    }
  }
  else{
    delete collection[id][prop]
  }
  

  return collection;
}

updateRecords(5439, "artist", "ABBA");
