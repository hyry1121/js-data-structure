class Position {
  constructor( x, y ) {
    this.x = x
    this.y = y
  }
}


/**
 *  0. take start position into queue
 *  1. when loop start, take out the first one of queue as current position,
 *     it means start position
 *  2. use current position to calculate the next position with directions
 *  3. take the next position that match conditions successfuly into queue
 *      (in)
 *  4. in the next loop, take out the first one of queue as current position
 *      (out)
 *  5. set next position to searched
 *  6. to 2. step
 */
class Queue {
  constructor() {
    this.body = []
  }

  into( position ) {
    this.body.push( position )
  }

  out() {
    return this.body.shift()
  }
}


function search( start, end ) {
  const searched = {}

  function setSearch( position ) {
    const searchedMark = 'mark' + position.x * 2 + position.y
    searched[ searchedMark ] = true
  }

  function isInMaze( position ) {
    return (
      position.x > 0 &&
      position.x <= 10 &&
      position.y > 0 &&
      position.y <= 10
    ) ? true : false
  }

  function isWall( position ) {

  }

  function isSearched( position ) {
    const searchedMark = 'mark' + position.x * 2 + position.y
    return searched[ searchedMark ] === true ? true : false
  }

  const queue = new Queue()

  // del with start position
  queue.into( start )
  setSearch( start )

  const directions = [
    [ 0, 1 ],  // right
    [ 1, 0 ],  // down
    [ 0, -1 ],  // left
    [ -1, 0 ]  // up
  ]

  // 'while' del with current position
  let t = 200
  while( true ) {
    let current = queue.out()
    

    // 'for' del with next position
    for( let i = 0, direction; direction = directions[i++]; ) {
      let x = current.x + direction[ 0 ],
          y = current.y + direction[ 1 ]

      let next = new Position( x, y )

      if( next.x === end.x && next.y === end.y ) {
        return console.log( 'found', next )
      }

      if( isInMaze(next) && !isSearched(next) ) {
        console.log( next )
        setSearch( next )
        queue.into( next )
        setTimeout( () => {
          document.querySelector( '#td-'+current.x+current.y ).style.backgroundColor = 'black'
        }, t )
        
        setTimeout( () => {
          document.querySelector( '#td-'+x+y ).style.backgroundColor = 'blue'
        }, t )
        t += 500
      }
    }
  }
}

const start = new Position( 2, 2 )
      end = new Position( 9, 9 )

search( start, end )