/**
 *      
 *       0 1 2 3y
 *     0 > O 1 O
 *     1 O O O O
 *     2 O O 1 O
 *     3 O 1 ! O
 *     x
 * 
 *             (x-1, y)
 *     (x, y-1) (x, y) (x, y+1)
 *             (x+1, y)
 */

function makeMaze( x, y ) {
  let maze = new Array( x*y )

  for( let i = 0; i < x; i++ ) {
    maze[ i ] = []
    for( let j = 0; j < y; j++ ) {
      maze[ i ][ j ] = 0
    }
  }

  return maze
}

function setWalls( maze, walls ) {
  for( let i = 0, wall; wall = walls[i++]; ) {
    maze[ wall[0] ][ wall[1] ] = 1
  }

  return maze
}


const m = 5, n = 4
// [ [x,y] ]
const walls = [ [1,3], [1,3], [0,2] ]

const maze = setWalls( makeMaze(m,n), walls )

const end = [ 3, 1 ]

let minStep = m * n

const searched = {}

function search( x, y, step ) {
  if( x === end[0] && y === end[1] ) {
    if( step < minStep ) {
      minStep = step
    }
    return
  }

  const directions = [
    [ 0, 1 ],  // right
    [ 1, 0 ],  // down
    [ 0, -1 ],  // left
    [ -1, 0 ]  // up
  ]

  for( let i = 0, direction; direction = directions[i++]; ) {
    let nextX = x + direction[ 0 ],
        nextY = y + direction[ 1 ]

    // m-1: m means all x, x is count as 1,2,3,4
    // but maze[x] means that x is count as 0,1,2,3
    // eg: m = 5, the biggst nextX is 5
    // maze[ nextX ] === maze[ 5 ], but maze[ m-1 ] === maze[ 4 ] is the biggst index
    // fuck doc
    if( nextX < 0 ||
        nextX > m-1 ||
        nextY < 0 ||
        nextY > n-1 ) {
      continue
    }

    // translate nextX and nextY into index for searched
    // by whatever rule if index is only
    let searchedMark = 'mark' + nextX * 2 + nextY

    if( !maze[nextX][nextY] && !searched[searchedMark] ) {
      searched[ searchedMark ] = 1
      search( nextX, nextY, step+1 )
      searched[ searchedMark ] = 0
    }
  }
}

search( 0, 0, 0 )

console.log( minStep )
