// $(function(){
//     $.get('https://jsonplaceholder.typicode.com/comments',function(data,status){
//         let table=''
//         data.forEach(element => {
//             table+=`     <thead>
//             <tr class="comment">
//               <th scope="col">${element.postId}</th>
//               <th scope="col">${element.id}</th>
//               <td scope="col">${element.name}</td>
//               <td scope="col">${element.email}</td>
//               <td scope="col">${element.body}</td>
//             </tr>
//           </thead>`
//         });
//         $('.tables1').html(table)
//     })
// })

$(function(){
    $.get('https://jsonplaceholder.typicode.com/posts',function(data,status){
        let table=''
        data.forEach(element => {
            table+=`     <thead>
            <tr class="comment">
              <th scope="col">${element.userId}</th>
              <th scope="col">${element.id}</th>
              <td scope="col">${element.title}</td>
              <td scope="col">${element.body}</td>
            </tr>
          </thead>`
        });
        $('.tables1').html(table)
    })
})