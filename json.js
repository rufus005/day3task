<html>
    <head>
        <title>Guvi zen class</title>
    </head>
    <body>
   <h1>Hello guvi</h1>
   <h2> this is for examples xml http request </h2>

   <script>
 console.log("welcome to html")

 function handleData(){
    let data = JSON.parse(this.responseText)
    console.log(data)

    // for(let  i=0;i<data.length;i++)
    // {
    //   console.log(data[i].name.common,data [i].population)
    // }


  //  for(i in data)
  //  {
  //   console.log(data[i].name.common)
  //  } 

//   for (e of data)
//  {
//   console.log(e.name.common,e.population)
//  } 
}
 

 const req = new XMLHttpRequest();
 req.addEventListener('load',handleData)
 req.open("GET","https://restcountries.com/v3.1/all")
 req.send()

   </script>
</body>
    </html>

    <!-- output
    
    -->