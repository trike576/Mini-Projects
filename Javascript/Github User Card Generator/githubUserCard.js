// User search
const usernameInputElement = document.querySelector("#usernameInput")
const searchUserButtonElement = document.querySelector("#searchUser")
const feedbackElement = document.querySelector("#feedback")

const searchUser = function () {
    const xhr = new XMLHttpRequest();
    const username = usernameInputElement.value.trim()
    if (username.trim() === "") {
        feedbackElement.style.display = "block"
        feedbackElement.innerText = "Please enter valid username"
        return
    }
    let data;

    xhr.open('GET', `https://api.github.com/users/${username}`)

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status == 200) {
                data = JSON.parse(xhr.responseText);

                const userAvatarElement = document.querySelector("#userAvatar")
                const usernameElement = document.querySelector("#username")
                const idElement = document.querySelector("#id")
                const bioElement = document.querySelector("#bio")
                const locationElement = document.querySelector("#location")
                const accountCreationDateElement = document.querySelector("#accountCreationDate")
                const publicReposElement = document.querySelector("#publicRepos")
                const profileURLElement = document.querySelector("#profileURL")
                const companyElement = document.querySelector("#company")
                const followersElement = document.querySelector("#followers")
                const followingElement = document.querySelector("#following")

                userAvatarElement.src = data.avatar_url

                setText(usernameElement, "Username", data.login);
                setText(idElement, "ID", data.id);
                setText(bioElement, "Bio", data.bio)
                setText(locationElement, "Location", data.location)
                setText(accountCreationDateElement, "Account Creation Date", new Date(data.created_at).toLocaleDateString())
                setText(publicReposElement, "Public Repos", data.public_repos)
                profileURLElement.innerHTML = `<a href="${data.html_url}" target = "_blank">Visit Profile</a>`
                setText(companyElement, "Company", data.company);
                setText(followersElement, "Followers", data.followers);
                setText(followingElement, "Following", data.following);

                feedbackElement.style.display = "none";
                feedbackElement.innerText = "";
            }
            else if (xhr.status == 404) {
                feedbackElement.style.display = "block"
                feedbackElement.innerText = "This username doesn't belong to any user"
            }
        }

    }

    xhr.send()


}

// Function to set values in card
function setText(element, label, value) {
    element.innerText =
        `${label}: ${value ?? "N/A"}`;
}

searchUserButtonElement.addEventListener('click', searchUser);
usernameInputElement
    .addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                searchUser();

            }
        }
    );