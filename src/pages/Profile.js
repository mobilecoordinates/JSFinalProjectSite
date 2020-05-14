import firebaseInstance from "../../firebase_config";

const Profile = function () {
  
  firebaseInstance
  .ref("teachers")
  .child(window.localStorage.getItem("teacherId"))
  .on("value", (result) => {

    const teacherObj = result.val();

    document
    .getElementById("app")
    .innerHTML = `
    <div class="flex-container">
    <div class="flex-box">
      <div id="left-profile">
        <img src="${teacherObj.img}">
      </div>
    </div>
    <div class="flex-box">
      <div id="right-profile">
        <table id="contact-card">
              <tr>
                <td><b>Name</b></td>
                <td>${teacherObj.firstName} ${teacherObj.lastName}</td>
              </tr>
              <tr>
                <td><b>School:</b></td>
                <td>${teacherObj.school}</td>
              </tr>
              <tr>
                <td><b>Subject(s) Taught:</b></td>
                <td>${teacherObj.subjects}</td>
              </tr>
              <tr>
                <td><b>Hobbies:</b></td>
                <td>${teacherObj.hobbies}</td>
              </tr>
              <tr>
                <td><b>About Me:</b></td>
                <td>${teacherObj.about}</td>
              </tr>
        </table>
      </div>
      <form id="tip-submit">
        <input type="text" id="tip-input" value="0">
        <input type="submit" class="btn tip-button btn-success navbuttons" value="TIP!"></input>
        <a href="#/list" class="btn btn-dark navbuttons">Back</a>
      </form>
    </div>
  </div>
    `;

  });
    
	document
	.querySelector("#tip-submit")
	.addEventListener("submit", function(event) {

    event.preventDefault();

    const tipAmount = document.querySelector("#tip-input").value

    if (tipAmount == 0) {
      alert("Please input a value");
    } else {

    document
    .getElementById("app")
    .innerHTML = "";
      
    paypal.Buttons({
      createOrder: function(data, actions) {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: tipAmount
              }
            }]
          });
        },
        onApprove: function(data, actions) {

          // This function captures the funds from the transaction.
          return actions.order.capture().then(function(details) {
            //capture time  
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const timeStamp = date+' '+time;

            //capture id

            const teacherId = window.localStorage.getItem("teacherId")

            //create obj

            var transaction = {
              time: timeStamp,
              teacherId: teacherId,
              amount: tipAmount
            }

            //push to firebase

            firebaseInstance.ref("transactions").push(transaction);

            // This function shows a transaction success message to your buyer.
            alert('Thank you ' + details.payer.name.given_name + `, your generosity has made a difference in someone's life.`);

            window.location.hash = '/list';
          });
        }
      }).render('#paypal-module');

    }

    });
}

export default Profile;