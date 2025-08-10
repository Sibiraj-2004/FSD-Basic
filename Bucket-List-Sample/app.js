let Bucketlist=JSON.parse(localStorage.getItem("Bucketlist"))|| [];
let filtercategory="All";   
let editIndex=null;


function additem(){
    const description=document.getElementById("description").value;
    const category=document.getElementById("category").value;
    const  targetdate=document.getElementById("target-date").value;

    if(description&&category&&targetdate){
        if(editIndex!==null){
            Bucketlist[editIndex]={description,category,targetdate,completed:Bucketlist[editIndex].completed}
        }
        else{
        Bucketlist.push({description,category,targetdate,completed:false})
        }
        localStorage.setItem("Bucketlist",JSON.stringify(Bucketlist));
        clearInput();
        updateUI();
    }    
        
}

function clearInput(){
    document.getElementById("description").value="";
     document.getElementById("category").value="";
      document.getElementById("target-date").value="";
}


function updateUI(){
    const bucketlistcontainer=document.getElementById("Bucket-List");
    bucketlistcontainer.innerHTML="";
    let completed_count=0;

    const filteredlist= filtercategory === "All"?Bucketlist:Bucketlist.filter(function(item){
        return item.category === filtercategory;
    })

     filteredlist.forEach(function(item,index){
        const itemelement=document.createElement("li");
        itemelement.classList="p-4  border border-gray-200 rounded-lg mb-4 flex justify-between items-center bg-gradient-to-r from-blue-50 to-indigo-50";
        itemelement.innerHTML = 
            "<div> <p class='font-semibold'>" + item.description + "</p>" +
            "<p>" + item.category + " — Target: " + item.targetdate + "</p></div>" +
            "<div><button onclick='editItem(" + index + ")' class='px-2 py-1 bg-yellow-300 text-white rounded'>Edit</button>" +
            "<button onclick='togglecompletion(" + index + ")' class='mx-2 px-2 py-1 rounded " + 
            (item.completed ? "bg-green-500 text-white" : "bg-red-400 text-white") + "'>" +
            (item.completed ? "Achieved" : "Pending") + "</button>"+"<button onclick='deleteItem(" + index + ")' class='px-2 py-1 bg-red-500 text-white rounded'>Delete</button></div>";

            if(item.completed){
                completed_count++;
            }

        bucketlistcontainer.appendChild(itemelement);   
    })  
   
    const progresspercentage=(completed_count/Bucketlist.length)* 100 || 0;
    document.getElementById("progress-bar").style.width=progresspercentage + "%";
    document.getElementById("completed-count").innerHTML=completed_count;
    document.getElementById("total-count").innerHTML=Bucketlist.length;
}

function togglecompletion(index){
    Bucketlist[index].completed=!Bucketlist[index].completed;
     localStorage.setItem("Bucketlist",JSON.stringify(Bucketlist));
     updateUI();
}

function deleteItem(index){
    Bucketlist.splice(index,1);
     localStorage.setItem("Bucketlist",JSON.stringify(Bucketlist));
     updateUI();
}

function filteritem(category){
    filtercategory=category;
    updateUI();
}

function editItem(index){
    document.getElementById("description").value=Bucketlist[index].description;
    document.getElementById("category").value=Bucketlist[index].category;
    document.getElementById("target-date").value=Bucketlist[index].targetdate;

    editIndex=index;

}

updateUI()
