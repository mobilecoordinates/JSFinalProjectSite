import firebaseInstance from "../../firebase_config";

const Profile = function () {

    const initalProfileHtml = `
    <div class="flex-container">
    <div class="flex-box">
      <div id="left-profile">
        <img src="http://mosley.aurorak12.org/wp-content/uploads/sites/181/2015/05/Kristin-Tousley.jpg" alt="profile image" id="profile-img">
      </div>
      <a href="#/list" class="btn btn-dark navbuttons">Back</a>
    </div>
    <div class="flex-box">
      <div id="right-profile">
        <table id="contact-card">
              <tr>
                <td><b>Name</b></td>
                <td>Kristin Tousley</td>
              </tr>
              <tr>
                <td><b>School:</b></td>
                <td>ABC Elementary School</td>
              </tr>
              <tr>
                <td><b>Grade(s) Taught:</b></td>
                <td>2nd and 3rd</td>
              </tr>
              <tr>
                <td><b>Subject(s) Taught:</b></td>
                <td>Math, English, Social Studies</td>
              </tr>
              <tr>
                <td><b>Hobbies:</b></td>
                <td>Jogging, Hiking, Spending time with family</td>
              </tr>
              <tr>
                <td><b>About Me:</b></td>
                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</td>
              </tr>
        </table>
      </div>
      <form id="tip-submit">
        <input type="text" id="tip-input" value="0">
        <input type="submit" class="btn tip-button btn-success navbuttons" value="TIP!"></input>
      </form>
    </div>
  </div>

    `;

  document
  .getElementById("app")
  .innerHTML = initalProfileHtml;  
    
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

            //capture amount

            //push to firebase

            // This function shows a transaction success message to your buyer.
            alert('Thank you ' + details.payer.name.given_name);
          });
        }
      }).render('#paypal-module');

    }

    });
}

export default Profile;