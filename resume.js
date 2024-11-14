function generateResume() {
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fatherName').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var school = document.getElementById('school').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    var photo = document.getElementById('photo').files[0];
    document.getElementById('nameDisplay').textContent = name;
    document.getElementById('fatherNameDisplay').textContent = fathername;
    document.getElementById('phoneNumberDisplay').textContent = phoneNumber;
    document.getElementById('emailDisplay').textContent = email;
    document.getElementById('educationDisplay').textContent = "".concat(degree, " from ").concat(school);
    document.getElementById('workExperienceDisplay').textContent = workExperience;
    document.getElementById('skillsDisplay').textContent = skills;
    if (photo) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.createElement('img');
            img.src = e.target.result;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.borderRadius = '50%';
            document.getElementById('resumeContainer').prepend(img);
        };
        reader.readAsDataURL(photo);
    }
    document.getElementById('resumeContainer').style.display = 'block';
}
function downloadResume() {
    window.print();
}
