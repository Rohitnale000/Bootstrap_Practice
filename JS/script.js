
const myFun =async()=>{
   const data =await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
   let a = await data.json()
   a = JSON.stringify(a)
   console.log(a)
   alert(a)
   // console.log(await data.json())
}



