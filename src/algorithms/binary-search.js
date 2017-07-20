function binSearch( target, arr ) {
  let low = 0,
      height = arr.length - 1
  
  if( target < arr[low] || target > arr[height] ) {
    return -1
  }

  while( low <= height ) {
    let mid = Math.ceil( low+(height-low)/2 )
    let midItem = arr[ mid ]

    if( target < midItem ) {
      height = mid - 1
    } else if( target > midItem ) {
      low = mid + 1
    } else {
      return mid
    }
  }

  return -1
}

function search( target, arr ) {
  for( let i = 0; i < arr.length; i++ ) if( arr[i] === target ) {
    return i
  }

  return -1
}


let arr = []
for( let i = 0; i < 10000000; i++ ) {
  arr[ i ] = i
}

console.time( 'binsearch' )
binSearch( 89888, arr )
console.timeEnd( 'binsearch' )

console.time( 'search' )
search( 89888, arr )
console.timeEnd( 'search' )