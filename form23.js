const studentform = JSON.parse(localStorage.getItem("studentform")) || [];

const deleterecord = (index) => {
    studentform.splice(index,1);
    console.log("delete===",studentform);
    rendertable()
}
const editdata = (index) => {
    const editrecord = studentform.find((item,index1) => {return index1===index});
    console.log(editrecord);
    document.getElementById("fname").value = editrecord.fname;
    document.getElementById("lname").value = editrecord.lname;
    document.getElementById("age").value = editrecord.age;
    document.getElementById("phone").value = editrecord.phone;
    document.getElementById("pass").value = editrecord.pass;

    rendertable()  
}
function formfunction(){
    const studentfname = document.getElementById("fname").value;
    console.log(studentfname);
    const studentlname = document.getElementById("lname").value;
    console.log(studentlname);
    const studentage = document.getElementById("age").value;;
    console.log(studentage);
    const studentpassword = document.getElementById("pass").value;
    console.log(studentpassword);
    const studentphone = document.getElementById("phone").value;
    console.log(studentphone);
    let studentgender = "";
    if (document.getElementById("male").checked) {
        studentgender += document.getElementById("male").value;
    }
    if (document.getElementById("female").checked) {
        studentgender += document.getElementById("female").value;
    }
    console.log(studentgender);
    let studenthobby = "";
    if (document.getElementById("swim").checked) {
        studenthobby += document.getElementById("swim").value;
    }
    if (document.getElementById("read").checked) {
        studenthobby += document.getElementById("read").value
    }
    console.log(studenthobby);

    const objectdata = { fname: studentfname, lname: studentlname, age: studentage, password: studentpassword, phone: studentphone, gender: studentgender, hobby: studenthobby}
    console.log(objectdata);
    studentform.push(objectdata);
    console.log(studentform);
    localStorage.setItem("studentform", JSON.stringify(studentform));
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("male").checked = "";
    document.getElementById("female").checked = "";
    document.getElementById("swim").checked = "";
    document.getElementById("read").checked = "";

rendertable()
}
const rendertable = () => {
    document.getElementById("demo").innerHTML =
        studentform.map((item, index) => {
            return (
                `<tr>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.age}</td>
            <td>${item.password}</td>
            <td>${item.phone}</td>
            <td>${item.gender}</td>
            <td>${item.hobby}</td>
            <td><button type="button" onclick="deleterecord(${index})">delete</button></td>
            <td><button type="button" onclick="editdata(${index})">edit</button></td>
            </tr>`
            )
        }).join(``)
}