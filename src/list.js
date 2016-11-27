const _ = require('./utils')

/**
 * 区分两个概念：数组长度、线性表长度
 * 区分两个下标起始：数组下标从0开始、线性表下标从1开始
 * 数组是线性表的容器，即container
 * 线性表长度就是数组里面存放的元素的总个数
 * 线性表长度 <= 数组长度   超出即内存溢出
 * 线性表： a1 a2 a3 ...  an   空闲空间
 * 数组下标：0  1  2  ... n-1  ...maxLen
 */
class List {
	constructor() {
		// 模拟申请固定的内存空间，将存放线性表的数组的长度固定，线性表的长度不能超过数组长度
		this.maxLen = 5
		// 线性表容器，固定长度，maxLen === container.length
		this.container = new Array( this.maxLen )
		// 线性表长度
		this.len = 0
	}

	getElem( index ) {
		_.assert( this.len > 0, '线性表不存在' )
		_.assert( index <= this.maxLen, '插入位置不在线性表范围内' )
		const elemPostion = index - 1
		return this.container[ elemPostion ]
	}
	
	/**
	 * 线性表插入
	 * 不能使用push，push会让元素在数组后面追加，使得数组长度大于maxLen
	 * @param  {Number} index 线性表的位置，从1开始数
	 * @param  {Any} elem  待插入元素	
	 * @return {Any} 成功插入的元素	
	 */
	insert( index, elem ) {
		_.assert( index >= 1 && index <= this.maxLen, '插入位置不在线性表范围内' )
		// 如果用 <= 就会造成 this.len === this.maxLen 的时候也通过，还能继续插入，造成溢出而不发生异常
		// 因为 this.len 是用 this.len++的方式递增，所以总会有 this.len === this.maxLen，就不能再插入
		_.assert( this.len !== this.maxLen, '线性表已满，无法插入' )
		// 如果插入的元素不在线性表末尾，而是在线性表体中插入
		// 先将待插入位置后面的所有元素往后移动一位
		//      | 插入elem
		// [ 1, 2, 3, x, x ]
		//      2, 3 往后移动一位
		// [ 1, {2}, 2, 3, x ]
		if( index <= this.len ) {
			// 倒序遍历进行移动元素
			for( let i = this.len - 1; i >= index - 1; i-- ) {
				this.container[ i+1 ] = this.container[ i ]
			}
		}
		// 插入元素
		// [ 1, elem, 2, 3, x ]
		this.container[ index - 1 ] = elem
		// 改变线性表长度
		this.len++
		// 返回插入成功的元素
		return elem
	}
}

const list = new List()


list.insert( 1, 1 )

console.log( list )