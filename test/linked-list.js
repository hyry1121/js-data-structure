const expect = require( 'chai' ).expect
const List = require( './../src/linked-list' )


describe( 'linked-list insert test', () => {
  it( 'insert with index equal without index', () => {
    const l1 = new List(),
          l2 = new List()
    l1.insert( '111' )
    l2.insert( '111', 1 )
    
    expect( l1.head.next.data ).to.equal( l2.head.next.data )
  })
})