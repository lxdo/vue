const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:3,
        name:'《编程珠玑》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:1,
        name:'《代码大全》',
        date:'2006-9',
        price:85.00,
        count:1
      }
    ]
  },
  // vue过滤器 Vue会自动将过滤数据当做参数传入过滤器方法
  filters: {
    showPrice(price){
      return '￥'+price.toFixed(2)
    }
  },
  methods: {
    decrement(index){
      console.log('decrement',index)
      this.books[index].count--
    },
    increment(index){
      console.log('increment',index) 
      this.books[index].count++
    },
    // 移除
    remove(index){
      this.books.splice(index,1)
    }
  },
  // 计算总价
  computed: {
    totalPrice(){
      // reduce计算数组元素和
      return this.books.reduce(function(preValue,item){
        return preValue+item.price*item.count
      },0)
    }
  }
})

