function Posts() {
  $.get("https://jsonplaceholder.typicode.com/posts", function (data, status) {
    let table = "";
    data.forEach((element) => {
      table += `     <thead>
            <tr class="comment">
              <th scope="col">${element.userId}</th>
              <th scope="col">${element.id}</th>
              <td scope="col">${element.title}</td>
              <td scope="col">${element.body}</td>
            </tr>
          </thead>`;
    });
    $(".tables1").html(table);
   
  });
};

function Comments() {
  $.get("https://jsonplaceholder.typicode.com/comments",
    function (data, status) {
      let table = "";
      data.forEach((element) => {
        table += `     <thead>
            <tr class="comment">
              <th scope="col">${element.postId}</th>
              <th scope="col">${element.id}</th>
              <td scope="col">${element.name}</td>   
              <td scope="col">${element.email}</td>
              <td scope="col">${element.body}</td>
            </tr>
          </thead>`;
      });
      $(".tables1").html(table);
      
    });
};

function Albums() {
  $.get("https://jsonplaceholder.typicode.com/albums",
    function (data, status) {
      let table = "";
      data.forEach((element) => {
        table += `     <thead>
        <tr class="comment">
        <th scope="col">${element.userId}</th>
        <th scope="col">${element.id}</th>
        <td scope="col">${element.title}</td>   
        </tr>
        </thead>`;
        
      });
      $(".tables1").html(table);
      
    });
};

function Photos() {
  $.get("https://jsonplaceholder.typicode.com/photos",
    function (data, status) {
      let table = "";
      data.forEach((element) => {
        table += `     <thead>
        <tr class="comment">
        <th scope="col">${element.albumId}</th>
        <th scope="col">${element.id}</th>
        <td scope="col">${element.title}</td>   
        <td scope="col">${element.url}</td>   
        <td scope="col">${element.thumbnailUrl}</td>   
        </tr>
        </thead>`;
        
      });
      $(".tables1").html(table);
      
    });
};

function Todos() {
  $.get("https://jsonplaceholder.typicode.com/todos",
    function (data, status) {
      let table = "";
      data.forEach((element) => {
        table += `     <thead>
        <tr class="comment">
        <th scope="col">${element.userId}</th>
        <th scope="col">${element.id}</th>
        <td scope="col">${element.title}</td>   
        <td scope="col">${element.completed}</td>      
        </tr>
        </thead>`;
        
      });
      $(".tables1").html(table);
      
    });
};

function Users() {
  $.get("https://jsonplaceholder.typicode.com/users",
    function (data, status) {
      let table = "";
      data.forEach((element) => {
        table += `     <thead>
        <tr class="comment">
        <th scope="col">${element.id}</th>
        <th scope="col">${element.name}</th>
        <td scope="col">${element.username}</td>   
        <td scope="col">${element.email}</td>      
        <th scope="col">${element.address}</th>      
        <th scope="col">${element.street}</th>      
        <th scope="col">${element.suite}</th>      
        <th scope="col">${element.city}</th>      
        <th scope="col">${element.zipcode}</th>      
        <th scope="col">${element.geo}</th>      
        <th scope="col">${element.lat}</th>      
        <th scope="col">${element.lng}</th>      
        </tr>
        </thead>`;
        
      });
      $(".tables1").html(table);
      
    });
};


$('.select_val').click(()=>{
  let value=$('.select_val').val();
  GetValue(value)
})
function GetValue(value) {
  if(value=="1"){
    Posts()
  }
  else if(value=="2"){
    Comments()
  }
  else if(value=="3"){
    Albums()
  }
  else if(value=="4"){
    Photos()
  }
  else if(value=="5"){
    Todos()
  }
  else if(value=="6"){
    Users()
  }


  // console.log("adil");
  }
