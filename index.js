var colorcode = $('.colorcode');
var saveBtnEl = $('.save');
var input = $('');
var hour = $("#Time");
var container = $('.container');
var calendar;

//call all functions
function init(){
    getInfo();
    timeblock();
     storeInfo();
     
};

    // Timer setup
 var reformatDate = moment();
 $("#Time").text(reformatDate);


//Timeblock creates row for each hour
function timeblock() {
var now = moment().format("H");
calendar.forEach(function(ele,index){
    var rowDiv = document.createElement("div");
    if(ele.hour > now) {
        rowDiv.classList.add("future")
    } else if(ele.hour < now) {
        rowDiv.classList.add("past")
    } else {
        rowDiv.classList.add("present")
    }
// created row in function so it would be more dynamic
    var row = `<div class="row">
<div class="col-2 text-right p-3"> ${ele.hour} </div>
<input data-index="${index}" id="${ele.hour}" type="text" value="${ele.task}" class="bg-secondary col border p-3 note colorcode">
<button data-index="${index}" class="btn-sm btn-success col-2 p-3 save">
    <i class="far fa-save"></i>
</button>
</div>`;
rowDiv.innerHTML = row;
$(ele.hour).val(ele.task);
console.log(ele.task)
container.append(rowDiv);
}
)};

// eventlistener fxn to create save button
container.on('click', "button", function(event) {
    console.log("click")
    // event.PreventDefault();
    var target = $(event.currentTarget)
    var index = $(target).attr("data-index");
console.log(index)
    saveText(index);
   
});

// fxn to actually save text within that input row
function saveText(index) {
    calendar[index]["task"]=$(".note").eq(index).val();
    console.log($(".note").eq(index).val())
    console.log(calendar)
    storeInfo();
};

// storing input placed by user
function storeInfo() {
    localStorage.setItem("storedInfo", JSON.stringify(calendar));
 };

//  retrieving info save by user, if first time being used, it provides blank planner
 function getInfo() {
    calendar = JSON.parse(localStorage.getItem("storedInfo"));
    if(!calendar) {
        calendar = [
            {
            hour: 9,
            task: "",
            },
            {
             hour: 10,
            task: "",
            },
            {
            hour: 11,
            task: "",
             },
            {
             hour: 12,
            task: "",
             },
             {
            hour: 13,
            task: "",
             },
            {
            hour: 14,
            task: "",
            },
            {
             hour: 15,
            task: "",
            },
            {
             hour: 16,
            task: "",
            },
            {
             hour: 17,
            task: "",
             }
        ];
    }
     
 }


init();
