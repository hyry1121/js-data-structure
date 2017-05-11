const _ = require( './utils' )

class Node {
  constructor( data ) {
    this.data = data
    this.next = null
  }
}


class LinkedList {
  constructor() {
    // length of list is on this.head.data exclude head
    this.head = new Node( 0 )
  }

  _length( method ) {
    switch( method ) {
      case 1: return this.head.data++
      case -1: return this.head.data--
      default: return this.head.data
    }
  }

  getNode( index ) {
    _.assert( 1 <= index <= this._length(),
              "index out of link-list's length" )

    let node = this.head

    for( let i = 1; i <= index; i++ ) {
      node = node.next
    }

    return node
  }

  insert( data, index=this._length()+1 ) {
    const before = this.getNode( index-1 )
    const newNode = new Node( data )

    newNode.next = before.next
    before.next = newNode

    this._length( 1 )
  }

  del( index=this._length() ) {
    const before = this.getNode( index-1 )

    before.next = before.next.next

    this._length( -1 )
  }

  getLen() {
    return this._length()
  }
}


module.exports = LinkedList