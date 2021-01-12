
  //fetching data from text file  
    // document.getElementById('btn1').addEventListener('click',fun);
    // function fun(){
    //     let xhr = new XMLHttpRequest();
    //     xhr.open('GET','data.txt',true);
    //     xhr.onreadystatechange = function(){
    //         if(this.status === 200 && this.readyState === 4){
    //             console.log(this.responseText);
    // document.getElementById('container').innerHTML = this.responseText;
    //         }
    //     }
    //     xhr.send();  
    // }


//fetching data from json file 
// document.getElementById('btn3').addEventListener('click',fun);
// function fun(){
//    fetch('data.json').then(function(res){
//     return res.json();
//    }).then(function(data){
//        console.log(data);
//        let output = '';
//        data.forEach(function(jokes){
//            output += `<li>${jokes.id}</li>
//            <li>${jokes.name}</li>`;
//        }); 

//     //    console.log(output);
//     document.getElementById('container').innerHTML = output;
//    }).catch(function(e){
//        console.log(e);
//    });
// }

//fetching data from An API
// document.getElementById('btn2').addEventListener('mouseup',fun);
// function fun(){
//     fetch('http://api.icndb.com/jokes/rando').then(function(data){
//         return data.json();
//     }).then(function(info){
//         console.log(info);
//         var output = "";
//         info.forEach(function(jokes){
//             output += `<li>${jokes.id}</li>
//             <li>${jokes.joke}</li>`
//         })
//         document.getElementById('container').innerHTML = output;
//     }).catch(function(e){
//         console.log(e);
//     })
// }
