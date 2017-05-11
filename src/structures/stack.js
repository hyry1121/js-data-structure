const SqList = require( './../sequential-list' )


class Stack extends SqList {
  constructor( size ) {
    super( size )
  }

  push( el ) {
    this.insert( el )
  }

  pop() {
    this.del()
  }
}


const s = new Stack( 4 )
s.push( 'a' )
s.push( 'b' )
s.push( 'c' )
s.pop()
console.log( s )