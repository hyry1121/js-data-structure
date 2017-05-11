const _ = require( './utils' )

/**
 *    +-------container--------+    size
 *    |                        |
 *    [ L, 2, 3, 4, x, x, x, x ]
 *      |        |
 *      +--data--+    len
 */
class SequentialList {
  constructor( size ) {
    this.size = size
    this.container = new Array( size )
    for( let i = 0; i < size; i++ ) {
      this.container[ i ] = null
    }
    // length of list is equal this.container[ 0 ]
    this.container[ 0 ] = 0
  }

  getNode( index ) {
    _.assert( this._length() > 0, 'linear-list is empty' )
    _.assert( 1 <= index <= this.size,
              "index out of linear-list's size" )

    return this.container[ index ]
  }

  insert( data, index=this._length()+1 ) {
    const len = this._length()
    const afterLastIndex = len + 1

    _.assert( len < this.size, 'linear-list is full' )
    _.assert( 1 <= index <= afterLastIndex,
              "index out of linear-list's range" )

    for( let i = afterLastIndex; i > index; i-- ) {
      this.container[ i ] = this.container[ i-1 ]
    }

    this.container[ index ] = data

    this._length( 1 )
  }

  del( index=this._length() ) {
    const len = this._length()

    _.assert( 1 <= index <= len,
              "index out of linear-list's range" )

    for( let i = index; i <= len; i++ ) {
      this.container[ i ] = this.container[ i+1 ] || null
    }

    this._length( -1 )
  }

  _length( method ) {
    switch( method ) {
      case 1: return this.container[ 0 ]++
      case -1: return this.container[ 0 ]--
      default: return this.container[ 0 ]
    }
  }
}

module.exports = SequentialList