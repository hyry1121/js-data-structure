/**
 * 选择排序
 * 每一轮都找到(选择)最小的元素，将其归位(放到前面)
 */

module.exports = arr => {
  const len = arr.length

  for( let i = 0; i < len-1; i++ ) {
    let minIndex = i

    for( let j = i+1; j < len; j++ ) {
      if( arr[j] < arr[minIndex] ) {
        minIndex = j
      }
    }

    [ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ]
  }

  return arr
}