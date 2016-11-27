const expect = require('chai').expect
const List = require('./../src/list')

describe( '线性表最大长度测试', () => {
	const maxLen = 5
	const list = new List( maxLen )
	it( `线性表最大长度是 ${ maxLen }`, () => {
		expect( list.container.length === list.maxLen ).to.be.ok
	})
})

describe( '取出元素测试', () => {
	const list = new List( 10 ),
				insertPosition = 2,
				insertElem = 5

	it( '线性表长度为0（未初始化）的时候，取出元素应该会出发异常', () => {
		expect( () => { list.getElem(5) } ).to.throw('线性表为空')
	})

	it( '线性表有了长度之后，取出位置不在线性表范围内，取出元素应该会出发异常', () => {
		expect( () => { 
			list.insert( insertPosition, insertElem )
			list.getElem( 20 )
		}).to.throw('取出位置不在线性表范围内')
	})

	it( `应该正常取出线性表第 ${ insertPosition } 个元素，应该是 ${ insertElem }`, () => {
		expect( list.getElem(insertPosition) ).to.equal( insertElem )
	})

})