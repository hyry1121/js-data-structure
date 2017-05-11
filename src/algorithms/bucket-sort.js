/**
 * 桶排序
 */

const _ = require( './../utils' )

module.exports = arr => {
  const maxLen = 900
  const books = new Array( maxLen+1 )
  const sortedArr = []

  for( let i = 0; i < arr.length; i++ ) {
    let arg = arr[ i ]

    _.assert( arg <= maxLen, '要排序的数字中存在大于900的数' )

    if( typeof books[arg] === 'undefined' ) {
      books[ arg ] = 1
    } else {
      books[ arg ]++
    }
  }

  for( let i = maxLen; i >= 0; i-- ) {
    if( typeof books[i] === 'undefined' ) {
      continue;
    }
    for( let j = 1; j <= books[i]; j++ ) {
      sortedArr.push( i )
    }
  }

  return sortedArr
}