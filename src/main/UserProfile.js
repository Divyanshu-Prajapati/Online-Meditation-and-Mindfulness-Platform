// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get modal elements
    const editProfileForm = document.querySelector('#editProfileForm');
    const avatarInput = document.querySelector('#avatarInput');
    const userName = document.querySelector('#userName');
    const userEmail = document.querySelector('#email');
    const userPhone = document.querySelector('#phone');
    const userDob = document.querySelector('#dob');
    const userBio = document.querySelector('#bio');
    const avatarImg = document.querySelector('.profile-img');
    const saveAvatarBtn = document.querySelector('#saveAvatarBtn');

    // Handle profile editing
    editProfileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Update profile fields with the form input values
        userName.innerText = document.querySelector('#editName').value;
        userEmail.innerText = document.querySelector('#editEmail').value;
        userPhone.innerText = document.querySelector('#editPhone').value;
        userDob.innerText = document.querySelector('#editDob').value;
        userBio.innerText = document.querySelector('#editBio').value;

        // Close the modal after saving changes
        const modal = new bootstrap.Modal(document.getElementById('editProfileModal'));
        modal.hide();

        alert('Profile updated successfully!');
    });

    // Handle avatar change
    saveAvatarBtn.addEventListener('click', () => {
        const file = avatarInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                // Update the avatar image source
                avatarImg.src = e.target.result;
                const modal = new bootstrap.Modal(document.getElementById('changeAvatarModal'));
                modal.hide();
                alert('Avatar changed successfully!');
            };

            reader.readAsDataURL(file);
        } else {
            alert('No file selected!');
        }
    });
});