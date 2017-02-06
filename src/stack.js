const _ = require('./utils')

/**
 * 栈结构
 * 后进先出
 */
class Stack {
	constructor( maxLen ) {
		// 模拟申请固定的内存空间，将栈容器的长度固定，栈元素的长度不能超过栈容器的长度
		this.maxLen = maxLen
		// 栈容器，固定长度，maxLen === container.length
		this.container = new Array( maxLen )
		// 栈元素长度
		this.len = 0
	}

	/**
	 * 入栈
	 * @param  {Any} data 入栈的元素
	 * @return {DataType}      返回成功入栈的元素
	 */
	push( data ) {
		_.assert( this.len < this.maxLen, '栈已满，无法入栈' )
		// 不用push的方法是因为数据小的情况下，用索引方法性能高
		this.container[ this.len++ ] = data

		return data
	}

	/**
	 * 弹出栈顶
	 * @return {Any} 被弹出的元素
	 */
	pop() {
		_.assert( this.len > 0, '栈是空的' )

		// len从1开始算，数组下标从0开始算
		const topIndex = this.len-1
		const top = this.container[ topIndex ]
		delete this.container[ topIndex ]
		this.len--

		return top
	}

	getTop() {
		return this.container[ this.len-1 ]
	}

	clear() {
		for( let i = 0; i <= this.len; i++ ) {
			delete this.container[ i ]
		}
		this.len = 0
	}

	getLength() {
		return this.len
	}
}

module.exports = Stack

const stack = new Stack( 6 )
stack.push( 13 )
stack.push( 18 )
stack.push( 136 )
stack.push( 1666 )


console.log( stack )
stack.pop()
stack.pop()
stack.pop()
stack.pop()
console.log( stack )