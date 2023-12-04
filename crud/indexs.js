const prompt =require('prompt-sync')();

var employee = [];
var id = []
var i = 0;
var date = []
var x;
function page(){
    console.log('\n\tEmployee Management System\t\n')
    console.log('\t\tEmployee list\t\n')
    console.log('\nEmployee name:  \tEmployee ID:  \tDate: \n')
    for(let r = 0; r < employee.length; r++){
        if(x < r){
        console.log(employee[r] +'\t\t\t' + id[x] + '\t\t' + date[r])}else{
            console.log(employee[r] +'\t\t\t' + id[r] + '\t\t' + date[r])
        }
    }  
}
function kk(){
var choice = parseInt(prompt('Press \n1 for add \n2 for remove \n3 for update\nEnter your option:'));

switch(choice){
    case 1:
      create  ()
        break
        case 2:
           remove()
break
        case 3:
        update ()  
        break
        default:
            console.log('Not a choice') 
        
}}
function create(){
    var x = i 
    var j = i;
 
    while(x  == j){
        var x = prompt('Enter your name: ');
        employee[i] = x
        id[j] = i+1
        x++
        j++
        
    }
    var y = prompt('Enter date: ')
    date[i] = y
    
   console.log(employee)
   console.log(id)
}
function remove(){
    x = prompt('Enter the id of the employee you want to delete: ')
    x -= 1
    if(id[x]){
        decreaseEmployeeNumber(id[x]) 
        employee.splice(x, 1)
        id.splice(x, 1)
        date.splice(x,1)
    }else{
        console.log("ID not found")
    }
}
function decreaseEmployeeNumber(deletedId){
    for(let i = 0; i < id.length; i++){
        if(id[i] > deletedId){
            id[i]--;
        }
    }
}
function update(){
    var y = parseInt(prompt('Enter the id of the employee you want update: '))
     y -= 1;
    if(id[y]){
    var x = prompt('Enter the new name: ')
    employee[y] = x
    var d = prompt('Enter new date: ')
    date[y] = d
}else{
        console.log('No employee found')
    }
   
}

function main (){
    do{
        page()
        kk()
        choice = prompt('Press 1 to continue: ')
        i++
    }while(choice == 1)
}
main()