const {createRandomizer} = require('./util');
const prompt = require('prompt-sync')();

// helper function, don't modify
function createRandomMap(seed) {
  let rand = createRandomizer(seed);
  let map = [];
  for (let i=0; i<8;i++) {
    let row = [];
    for (let j=0; j<8;j++) {
      row.push(Math.floor(rand()*4))
    }
    map.push(row);
  }
  return map;
}

function printMap(map) {
  let buffer = "";
  for (let r of map) {
    for (let c of r) {
      buffer+=` ${c} `
    }
    buffer += "\n"
  }
  console.log(buffer);
}

function simulate(map) {
  // make a deep copy of map and store in temp
  let temp = JSON.parse(JSON.stringify(map));

  for (let r =0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      
      // find the number of adjacents houses
      let adjacent = 0;

      // UP
      if (checkBoundary(r-1,c) && map[r-1][c] > 0) {
        adjacent++;
      }
      // DOWN
      if (checkBoundary(r+1,c) && map[r+1][c] > 0) {
        adjacent++;
      }
      // LEFT
      if (checkBoundary(r, c-1) && map[r][c-1] > 0) {
        adjacent++;
      }
      // RIGHT
      if (checkBoundary(r,c+1) && map[r][c+1] > 0) {
        adjacent++;
      }
      // UP LEFT 
      if (checkBoundary(r-1,c-1) && map[r-1][c-1]>0) {
        adjacent++;
      }
      // UP RIGHT
      if (checkBoundary(r-1,c+1) && map[r-1][c+1]>0) {
        adjacent++;
      }
      // DOWN LEFT
      if (checkBoundary(r+1,c-1) && map[r+1[c-1]>0]) {
        adjacent ++;
      }
      // DOWN RIGHT
      if (checkBoundary(r+1, c+1) && map[r+1[c+1]> 0]) {
        adjacent++;
      }
    //  console.log("Adjacent for",r,c,"=",adjacent);

      if (map[r][c] > 0) {
        if (adjacent < 2) {
          temp[r][c] = Math.max(0, map[r][c]-1);
        } else if (adjacent >= 2 && adjacent<= 3) {
          temp[r][c] = Math.min(3, map[r][c]+1) 
        } else if (adjacent > 3) {
          temp[r][c] = Math.max(0, map[r][c]-1);
        } else {
          temp[r][c] = map[r][c];
        }
      } else {
        if (adjacent==3) {
          temp[r][c] = 1;
        }
      }

    }
  }
  // HINT: run the simulation on the `map` array, but store the 
  // results in the `temp` array. This ensures the simulation logic
  // runs correctly

  return temp;
}

function checkBoundary(r, c) {
  if (r < 0 || r > 7) {
    return false;
  }
  if (c < 0 || c > 7) {
    return false;
  }
  return true;
}


let map = createRandomMap(1403);
while (true) {
  printMap(map)
  let c = prompt("Continue the simulation for one more year? ")
  if (c[0].toLowerCase() == 'n') {
    break;
  }
  map = simulate(map);
}