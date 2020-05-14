import firebaseInstance from "../../firebase_config";

const List = function () {

    document
    .getElementById("paypal-module")
    .innerHTML = '';

    document
    .getElementById("app")
    .innerHTML = ''; 
    
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

        if (document.getElementById("teachers-table") !== null) {

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
                    <td><a id=${teacherId} href="#/profile" class="btn btn-success view-profile-button">View</a></td>
                    </tr>
                    `;
                };

                renderedTable.innerHTML += renderTeacherRow(teacher); 
                
                //add onclick for the profile view button
                document.addEventListener('click', (event) => {
                    if (event.target.classList.contains('view-profile-button')) {
        
                        event.preventDefault();
        
                        window.localStorage.setItem('teacherId', event.target.id);
                    
                        window.location.hash = '/profile';
                    };
                });

            }
        }
    });

}

export default List;