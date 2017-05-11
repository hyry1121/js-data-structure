/**
 * 快速排序
 * 每一轮都是将基准数归位
 */

/**
 *   pivot = arr[ 0 ] -> 3
 * 
 *   { x<3 } | { x>3 }
 * 
 *     i           j
 *   [ 3, 1, 2, 5, 4 ]  由于基准数在数组左边取，所以就让右边的j先走，j++，然后i++
 * 
 *        i      j
 *   [ 3, 1, 2, 5, 4 ]  i<3，j>3 符合条件，继续j++，i++。如果任何一个不符合条件，那个就
 * 停止，另一个继续走，直到不符合条件就停下来（在i不等于j的情况下），
 * 
 *           ij
 *   [ 3, 1, 2, 5, 4 ]  ij相遇，将这个地方和基准数交换
 * 
 *           ij
 *   [ 2, 1, 3, 5, 4 ]
 * 
 *   再对3左右的进行递归
 * 
 */

function quickSort( arr, left=0, right=arr.length-1 ) {
  if( left > right ) {
    return
  }
  let pivot = arr[ left ]
  let i = left
  let j = right
  while( i !== j ) {
    while( arr[j] >= pivot && i < j ) {
      j--
    }
    while( arr[i] <= pivot && i < j ) {
      i++
    }
    if( i < j ) {
      let t = arr[ i ]
      arr[ i ] = arr[ j ]
      arr[ j ] = t
    }
  }

  arr[ left ] = arr[ i ]
  arr[ i ] = pivot

  quickSort( arr, left, i-1 )
  quickSort( arr, i+1, right )
}



const arr = [1,3,2,4,3,5]
quickSort( arr )
console.log( arr )