import firebaseInstance from "../../firebase_config";

const NewTeacher = function () {

    const newTeacherFormHtml = `
    <form id=new-teacher-form>

    Add a new Teacher
    <input name="firstName" type="text" class="form-control" value="First Name"/>
    <input name="lastName" type="text" class="form-control" value="Last Name"/>
    <input name="school" type="text" class="form-control" value="School"/>
    <input name="city" type="text" class="form-control" value="City"/>
    <input name="state" type="text" class="form-control" value="State"/>
    <input name="subjects" type="text" class="form-control" value="Subject(s)"/>
    <input name="hobbies" type="text" class="form-control" value="Hobbies"/>
    <textarea name="about" class="form-control">About</textarea>
    <input name="img" type="text" class="form-control" value="Image (URL)"/> 

    <button type="submit" class="btn btn-primary">Submit</button>

    </form>
    `

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
    });

}

export default NewTeacher;