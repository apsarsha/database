const connectionUrl = "https://sheet.best/api/sheets/f3e3eb42-eac6-4e26-b792-5d9ff0b87a99";


const btnSubmit = $("#btnSubmit");


btnSubmit.addEventListener("click", () => {

    const firstName = $("#Firstname").value;
    const lastName = $("#Lastname").value;
    
    
    const age = $("#Age").value;

    if (firstName && lastName && age) {

        const postData = {
            firstName: firstName,
            lastName: lastName,                
            age: age,
        }

        axios.post(connectionUrl, postData).then(response => {
            console.log(response);
            $("#Firstname").value = '';
            $("#Lastname").value = ''; 
            $("#Age").value = '';
        });
        console.log("Submit...", postData)
    } else {
        console.log("SOrry we can't submit...")
    }
});
function $(selector) {
    return document.querySelector(selector);
  }
  