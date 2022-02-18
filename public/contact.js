const submitMsg = (msg) => {
  $.ajax({
    url: "/msg",
    contentType: "application/json",
    data: JSON.stringify(msg), //access in body
    type: "POST",
    success: function (result) {
      alert("Message Sent");
    },
    error: function (err) {
      console.log("An error occurred.");
      console.log(err);
    },
  });
};

//Adding a new msg (from contact.html)...
const newMsg = () => {
  let name = $("#name").val();
  let email = $("#email").val();
  let message = $("#message").val();

  let submit = { name, email, message };
  console.log("New msg created by " + submit.name);
  submitMsg(submit);
};

//script to run in the About Page...
$(document).ready(function () {
  $(".modal").modal();

  //Calling in Function to request for projects
  newMsg();
});
