const _ = require('./utils')

/**
 * 链表节点
 * data 数据域
 * next 下一个节点的“指针”
 */
class Node {
	constructor( data ) {
		this.data = data
		this.next = null
	}
}

/**
 * 单链表
 * head 头节点
 * len 链表长度
 */
class LinkList {
	constructor() {
		this.head = new Node( 'HEAD' )
		// 头结点不算入链表长度
		this.len = 1
	}

	/**
	 * 获取第index个元素思路
	 * 如果链表长度为0，则该链表为空链表，直接返回null
	 * 如果链表拥有了长度，但是index大于链表长度，则报错：'获取范围超出链表长度'
	 * 声明一个临时变量tempNode用来存储第一个节点，一般为头结点。
	 * for循环遍历链表，循环条件i<index，让tempNode向后移动，i++不断指向下一个节点。
	 * 循环结束之后tempNode就存储着链表中第index个元素
	 *
	 * @param  {Number} index 查找元素的位置
	 * @return {Node || null} 返回查找成功的元素
	 */
	getElem( index ) {
		// 头结点不算入链表长度
		--index

		if( this.len === 0 ) {
			return null
		}

		_.assert( index >= 0 && index <= this.len, '获取范围超出链表长度' )

		let tempNode = this.head

		for( let i = 0; i < index; i++ ) {
			tempNode = tempNode.next
		}

		return tempNode
	}

	/**
	 * 在第index个位置插入元素思路
	 * 调用getElem来获取第index个元素
	 * 定义一个befortInsertNode变量来存储获取到的第index个元素，作为插入前的一个元素
	 * 若befortInsertNode为null，则说明第index个元素不存在，则报错：'第index个元素不存在，无法插入'
	 * 若查找成功，befortInsertNode就存储已经找到的节点
	 * 声明一个变量newNode用来存储新的等待插入的节点，数据存放于newNode.data
	 * 单链表插入标准语句：
	 * 	newNode.next = befortInsertNode.next
	 * 	befortInsertNode.next = newNode
	 *
	 * @param  {Number} index 插入元素的位置
	 * @param  {Any} data 插入元素的数据
	 * @return {Node} 返回插入成功的元素
	 */
	insert( index, data ) {
		const befortInsertNode = this.getElem( index )
		_.assert( befortInsertNode !== null, `第${index}个元素不存在，无法插入` )
		
		const newNode = new Node( data )

		newNode.next = befortInsertNode.next
		befortInsertNode.next = newNode

		this.len++

		return newNode
	}

	/**
	 * 与插入相反
	 */
	del( index ) {
		_.assert( index >= 0 && index <= this.len, '删除范围超出链表长度' )

		const beforeDelNode = this.getElem( index )
		let delNode = beforeDelNode.next
		_.assert( beforeDelNode.next !== null, `第${index}个元素之后的元素不存在，无法删除` )

		beforeDelNode.next = delNode.next
		this.len--

		return delNode
	}
}

module.exports = LinkList
