function harf() {
  return parseInt( Math.random()*10 ) % 2
}

function dubo() {
  let a = 20,
      b = 20

  let t = 0

  let base = 5

  let win = base + 1,
      lose = base
  
  while( true ) {
    if( a <= 0 ) {
      console.log( 'b win' )
      console.log( t )
      break
    }

    if( b <= 0 ) {
      console.log( 'a win' )
      console.log( t )
      break
    }
    
    if( harf() === 1 ) {
      a += base
      b -= lose
    } else {
      a -= win
      b += win
    }

    t++
  }
}