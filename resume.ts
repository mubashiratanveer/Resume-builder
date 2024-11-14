
function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername=(document.getElementById('fatherName') as HTMLInputElement).value;
    const phoneNumber = (document.getElementById('phoneNumber') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const degree = (document.getElementById('degree') as HTMLInputElement).value;
    const school = (document.getElementById('school') as HTMLInputElement).value;
    const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const photo = (document.getElementById('photo') as HTMLInputElement).files![0];

    (document.getElementById('nameDisplay') as HTMLHeadingElement).textContent = name;
    (document.getElementById('fatherNameDisplay') as HTMLSpanElement).textContent= fathername;
    (document.getElementById('phoneNumberDisplay') as HTMLSpanElement).textContent = phoneNumber;
    (document.getElementById('emailDisplay') as HTMLSpanElement).textContent = email;
    (document.getElementById('educationDisplay') as HTMLDivElement).textContent = `${degree} from ${school}`;
    (document.getElementById('workExperienceDisplay') as HTMLDivElement).textContent = workExperience;
    (document.getElementById('skillsDisplay') as HTMLDivElement).textContent = skills;

    if (photo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = (e.target as FileReader).result as string;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.borderRadius = '50%';
            document.getElementById('resumeContainer')!.prepend(img);
        };
        reader.readAsDataURL(photo);
    }

    document.getElementById('resumeContainer')!.style.display = 'block';
}

function downloadResume() {
    window.print();
}

