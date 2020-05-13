import firebaseInstance from "../../firebase_config";

const List = function () {
    const initialListHtml = `
    <table id="teachers-table">
    <tr>
    <th>Name</th>
    <th>School</th>
    <th>City</th>
    <th>State</th>
    <th></th>
    </tr>
    </table>

    <br>

    `
    document
    .getElementById("app")
    .innerHTML = initialListHtml; 

    firebaseInstance
	.ref("teachers")
	.on("value", (results) => {

        const teachers = results.val();

        for (let property in teachers) {

            const teacherId = property;

            const teacher = teachers[property];

            const renderedTable = document.getElementById("teachers-table");

            const renderTeacherRow = (teacherObj) => { 
                return `
                <tr>
                <td>${teacherObj.firstName} ${teacherObj.lastName}</td>
                <td>${teacherObj.school}</td>
                <td>${teacherObj.city}</td>
                <td>${teacherObj.state}</td>
                <td><a id=${teacherId} href="#/profile" class="btn btn-success">View</a></td>
                </tr>
                `;
            };

            renderedTable.innerHTML += renderTeacherRow(teacher);            

        }
    });

}

export default List;