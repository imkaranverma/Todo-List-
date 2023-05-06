const infolist = document.querySelector("#addednote")
var turn = false;




console.log("working 2")

function addlist() {

   addinglist()
}

function addinglist() {

    turn = true;
//  console.log("working")
 let listoftodo = document.createElement('listoftodo');
 
//  console.log("working")
 listoftodo.classList.add("todo-lists")
 
//  console.log("working")
 listoftodo.innerHTML= ` 
 <div><form>
 <div class="date-info" id="date-info">DD/MM/YYYY</div>
 <input class="list1" type="checkbox" id="todolist1" name="todolist1">
 <label for="todolist1">Sample text</label>
 </form> 
 </div>`
 
//  console.log("working")
 console.log(listoftodo)
//  console.log("working")
 
 infolist.appendChild(listoftodo);
//  console.log("working")
}



