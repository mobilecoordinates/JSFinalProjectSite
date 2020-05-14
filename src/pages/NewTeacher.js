import firebaseInstance from "../../firebase_config";

const NewTeacher = function () {

    document
    .getElementById("app")
    .innerHTML = ''; 

    const newTeacherFormHtml = `
    <div class="flex-container form-box">
    <form id="new-teacher-form">
        <div class="form-group">
            <label>First Name</label>
            <input name="firstName" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Last Name</label>
            <input name="lastName" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>School</label>
            <input name="school" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>City</label>
            <input name="city" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>State</label>
            <input name="state" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Subjects</label>
            <input name="subjects" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>Hobbies</label>
            <input name="hobbies" type="text" class="form-control"/>
        </div>
        <div class="form-group">
            <label>About</label>
            <textarea name="about" class="form-control"></textarea>
        </div>
        <div class="form-group">
            <label>Profile Picture</label>
            <input name="img" type="text" class="form-control"/> 
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    `


    document
    .getElementById("app")
    .innerHTML = newTeacherFormHtml; 


    document
    .getElementById("new-teacher-form")
    .addEventListener("submit", (event) => {
        event.preventDefault();

        var newTeacher = {
            firstName: document.querySelector("input[name='firstName']").value,
            lastName: document.querySelector("input[name='lastName']").value,
            school: document.querySelector("input[name='school']").value,
            city: document.querySelector("input[name='city']").value,
            state: document.querySelector("input[name='state']").value,
            subjects: document.querySelector("input[name='subjects']").value,
            hobbies: document.querySelector("input[name='hobbies']").value,
            about: document.querySelector("textarea[name='about']").value,
            img: document.querySelector("input[name='img']").value       
        };

        firebaseInstance.ref("teachers").push(newTeacher);

        document.querySelector("#new-teacher-form").reset;

        window.location.hash = '/list';
    });

}

export default NewTeacher;