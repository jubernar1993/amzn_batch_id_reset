const api_root = "https://e2k77lalf6.execute-api.us-east-1.amazonaws.com/dev/"; // Set your API endpoint here

// Load the user table from the API
function loadTable() {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", api_root + "/users");
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log(this.responseText);
                let trHTML = '';
                const objects = JSON.parse(this.responseText);

                for (const user of objects["users"]) {
                    trHTML += '<tr>';
                    trHTML += `<td>${user['id']}</td>`;
                    trHTML += `<td><img width="50px" src="${user['avatar']}" class="avatar"></td>`;
                    trHTML += `<td>${user['fname']}</td>`;
                    trHTML += `<td>${user['lname']}</td>`;
                    trHTML += `<td>${user['username']}</td>`;
                    trHTML += `<td>
                        <button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox(${user['id']})">Edit</button>
                        <button type="button" class="btn btn-outline-danger" onclick="userDelete(${user['id']})">Del</button>
                    </td>`;
                    trHTML += "</tr>";
                }

                document.getElementById("mytable").innerHTML = trHTML;
            } else {
                console.error('Error loading users: ' + this.status);
                // Handle error accordingly (e.g. display an error message)
            }
        }
    };
}

// Show the user edit box
function showUserEditBox(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("GET", api_root + "/users/" + id);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                const user = JSON.parse(this.responseText);
                // Populate edit form fields with user data
                document.getElementById("edit_id").value = user.id;
                document.getElementById("edit_fname").value = user.fname;
                document.getElementById("edit_lname").value = user.lname;
                document.getElementById("edit_username").value = user.username;
                document.getElementById("edit_avatar").src = user.avatar; // Assuming you have an img element for avatar
                // Optionally show the edit modal here
            } else {
                console.error('Error loading user data: ' + this.status);
            }
        }
    };
}

// Edit user
function userEdit() {
    const id = document.getElementById("edit_id").value;
    const userData = {
        fname: document.getElementById("edit_fname").value,
        lname: document.getElementById("edit_lname").value,
        username: document.getElementById("edit_username").value,
        // Include other fields as necessary
    };

    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT", api_root + "/users/" + id);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send(JSON.stringify(userData));

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log('User updated successfully');
                loadTable(); // Reload the table to reflect changes
            } else {
                console.error('Error updating user: ' + this.status);
            }
        }
    };
}

// Delete user
function userDelete(id) {
    const xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", api_root + "/users/" + id);
    xhttp.send();

    xhttp.onreadystatechange = function() {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log('User deleted successfully');
                loadTable(); // Reload the table to reflect changes
            } else {
                console.error('Error deleting user: ' + this.status);
            }
        }
    };
}

// Create new user
function createUser() {
    const userData = {
        fname: document.getElementById("new_fname").value,
        lname: document.getElementById("new_lname").value,
        username: document.getElementById("new_username").value,
        // Include