class Node {
  constructor( data ) {
    this.data = data
    this.parent = null
    this.left = null
    this.right = null
  }
}

class BinTree {
  constructor( data ) {
    this.body = new Node( data )
  }

  insert( data ) {
    const newNode = new Node( data )
    let tmpNode = this.body

    while( true ) {
      if( newNode.data < tmpNode.data ) {
        if( tmpNode.left === null ) {
          tmpNode.left = newNode
          newNode.parent = tmpNode
          return
        } else {
          tmpNode = tmpNode.left
        }
      } else {
        if( tmpNode.right === null ) {
          tmpNode.right = newNode
          newNode.parent = tmpNode
          return
        } else {
          tmpNode = tmpNode.right
        }
      }
    }

    tmpNode = newNode = null
  }
}


const bt = new BinTree( 50 )
bt.insert( 32 )
bt.insert( 53 )
bt.insert( 9 )

console.log( bt )