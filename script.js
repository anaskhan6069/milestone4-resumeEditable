    let isMoreEducation = false;
    let isMoreExperience = false;

    let company2
    let companyCity2
    let companyYear2
    let college2
    let collegeCity2
    let collegeYear2

    // Adding more education if user clicks on add education button
    document.querySelector('.add-education').addEventListener('click', () => {
        isMoreEducation = true;
        console.log(isMoreEducation);
        const educationContainer = document.getElementById('education-section');

        const newEducationDiv = document.createElement('div');
        newEducationDiv.classList.add('education-section2');

        newEducationDiv.innerHTML = `
        <label for="college2">College/University</label>
            <input type="text" name="college2" id="college2" required>
            
            <label for="college-city2">City of your college/university</label>
            <input type="text" name="college-city2" id="college-city2" required>
            
            <label for="year2">Year From - to</label>
            <input type="text" placeholder="ex- 2022 - 2026" name="college-year2" id="college-year2" required>

            <button type="button" class="delete-education">Delete Education</button>
            `;

        educationContainer.appendChild(newEducationDiv);

        newEducationDiv.querySelector('.delete-education').addEventListener('click', () => {
            isMoreEducation = false;
            console.log(isMoreEducation);
            educationContainer.removeChild(newEducationDiv);
        });
    });

    // Adding more experience if user clicks on add experience button
    document.querySelector('.add-experience').addEventListener('click', () => {
        isMoreExperience = true
        const experienceContainer = document.getElementById('experience-section');

        const newExperienceDiv = document.createElement('div');
        newExperienceDiv.classList.add('experience-section2');

        newExperienceDiv.innerHTML = `
            <label for="company2">Company Name</label>
            <input type="text" name="company2" id="company2" required>

            <label for="company-city2">City of your company</label>
            <input type="text" name="company-city2" id="company-city2" required>

            <label for="year2">Year From - to</label>
            <input type="text" placeholder="ex- 2022 - 2026" name="company-year2" id="company-year2" required>

            <button type="button" class="delete-experience">Delete Experience</button>
        `;
        

        experienceContainer.appendChild(newExperienceDiv);

        newExperienceDiv.querySelector('.delete-experience').addEventListener('click', () => {
            isMoreExperience = false
            experienceContainer.removeChild(newExperienceDiv);
        });
    });

    // Generate Resume Button
    document.querySelector('.generate-btn').addEventListener('click', function (e) {
        const form = document.querySelector('form');

        if (!form.checkValidity()) {
            form.reportValidity();
        } else {
            e.preventDefault(); // Prevent form submission

            // =========== Getting user input values  ========
            const fullName = document.getElementById('full-name').value;
            const profession = document.getElementById('profession').value;
            const contact = document.getElementById('contact').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const about = document.getElementById('about').value;
            const skills = document.getElementById('skills').value.split(',');

            const college = document.getElementById('college').value;
            const collegeCity = document.getElementById('college-city').value;
            const collegeYear = document.getElementById('college-year').value;

            const company = document.getElementById('company').value;
            const companyCity = document.getElementById('company-city').value;
            const companyYear = document.getElementById('company-year').value;

            
            // ========== Getting user input values of additional education & experience fields ====
        if(isMoreEducation){   
            college2 = document.getElementById('college2').value;
            collegeCity2 = document.getElementById('college-city2').value;
            collegeYear2 = document.getElementById('college-year2').value;
        }
        if(isMoreExperience){
            company2 = document.getElementById('company2').value;
            companyCity2 = document.getElementById('company-city2').value;
            companyYear2 = document.getElementById('company-year2').value;
        }


            // Hide the form and main heading
            document.querySelector('.main-container').style.display = 'none';
            document.querySelector(".main-heading").style.display = "none";

            // Create the resume template with user input
            const resume = `
                <div class="resume">
                    <div class="col1">
                        <div class="profile">
                            <img src="profile.png" alt="Profile photo">
                        </div>
                        <div class="personal-info">
                            <h2>CONTACT</h2>
                            <p contenteditable="false"><i class="fa-solid fa-phone icon"></i>${contact}</p>
                            <p contenteditable="false"><i class="fa-solid fa-envelope icon"></i>${email}</p>
                            <p contenteditable="false"><i class="fa-solid fa-location-dot icon"></i>${address}</p>
                        </div>
                        <div class="skills">
                            <h2>SKILLS</h2>
                            <ul contenteditable="false">
                                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="col2">
                        <div class="name">
                            <h1 contenteditable="false">${fullName}</h1>
                            <p contenteditable="false"><i class="fa-solid fa-user-tie icon"></i>${profession}</p>
                        </div>
                        <div class="about">
                            <h2>ABOUT ME</h2>
                            <p class="about-para" contenteditable="false">${about}</p>
                        </div>
                        <div class="education">
                            <h2>Education</h2>
                            <p contenteditable="false" class="college-title">${college}</p>
                            <p contenteditable="false">${collegeCity}</p>
                            <p contenteditable="false">${collegeYear}</p>

                            ${isMoreEducation ?
                    `<div class="more-education">
                            <p class="college-title college-title2" contenteditable="false">${college2}</p>
                        <p contenteditable="false">${collegeCity2}</p>
                        <p contenteditable="false">${collegeYear2}</p>
                        </div>`
                    : ``}
                        </div>
                        <div class="experience">
                            <h2>Experience</h2>
                            <p class="experience-title">${company}</p>
                            <p>${companyCity}</p>
                            <p>${companyYear}</p>

                            ${isMoreExperience ?
                    `<div class="more-experience">
                        <p class="experience-title experience-title2" contenteditable="false">${company2}</p>
                    <p contenteditable="false">${companyCity2}</p>
                    <p contenteditable="false">${companyYear2}</p>
                    </div>` : ``}
                        </div>
                    </div>
                    
                    
                </div>

            `;
            const editButton = '<button class="edit-btn" id="edit-button" >EDIT RESUME</button>'

            // ==== Creating a new div for the resume and button
            const resumeContainer = document.createElement('div');
            const editButtonContainer = document.createElement('div');
            resumeContainer.classList.add('resume-container');
            editButtonContainer.classList.add('edit-button-div');
            resumeContainer.innerHTML = resume;
            editButtonContainer.innerHTML = editButton

            // Append the new resume container to the body
            document.body.appendChild(resumeContainer);
            document.body.appendChild(editButtonContainer);



            
            // ============ EDIT RESUME BUTTON FUNCTIONALITY ===========

            const editResumeButton = document.getElementById("edit-button");

            editResumeButton.addEventListener("click", () => {
                editResumeButton.classList.toggle("edit-btn-clicked");

                  

                if(isMoreEducation){
                    var more_college_title = document.querySelector('.college-title2');
                var more_college_city = document.querySelector('.college-title2 + p');
                var more_college_year = document.querySelector('.college-title2 + p + p');

                
                }
                if(isMoreExperience){
                    var more_experience_title = document.querySelector('.experience-title2');
                var more_experience_city = document.querySelector('.experience-title2 + p');
                var more_experience_year = document.querySelector('.experience-title2 + p + p');
                }
               
                

                const contact_p = document.querySelectorAll('.personal-info p')[0];
                const email_p = document.querySelectorAll('.personal-info p')[1];
                const address_p = document.querySelectorAll('.personal-info p')[2];

                const skills_ul = document.querySelector('.skills ul');


                const name_h1 = document.querySelector('.name h1');
                const profession_p = document.querySelector('.name p');

                const about_para = document.querySelector('.about-para');

                const collegeTitle = document.querySelector('.college-title');
                const collegeCity = document.querySelector('.college-title + p');
                const collegeYear = document.querySelector('.college-title + p + p');

                const companyTitle = document.querySelector('.experience-title');
                const companyCity = document.querySelector('.experience-title + p');
                const companyYear = document.querySelector('.experience-title + p + p');

                if (editResumeButton.textContent === "EDIT RESUME") {
                    editResumeButton.textContent = "DONE";

                    if(isMoreEducation){
                        
                        more_college_title.contentEditable = "true";
                        more_college_title.classList.add("editingOn");
                        more_college_city.contentEditable = "true";
                        more_college_city.classList.add("editingOn");
                        more_college_year.contentEditable = "true";
                        more_college_year.classList.add("editingOn");
                    }
                    if(isMoreExperience){
                        more_experience_title.contentEditable = "true";
                        more_experience_title.classList.add("editingOn");
                        more_experience_city.contentEditable = "true";
                        more_experience_city.classList.add("editingOn");
                        more_experience_year.contentEditable = "true";
                        more_experience_year.classList.add("editingOn");
                    }
                    
                
                    
                    contact_p.contentEditable = "true";
                    contact_p.classList.add("editingOn");
                    email_p.contentEditable = "true";
                    email_p.classList.add("editingOn");
                    address_p.contentEditable = "true";
                    address_p.classList.add("editingOn");

                    skills_ul.contentEditable = "true";
                    skills_ul.classList.add("editingOn");

                    name_h1.contentEditable = "true";
                    name_h1.classList.add("editingOn");
                    profession_p.contentEditable = "true";
                    profession_p.classList.add("editingOn");

                    about_para.contentEditable = "true";
                    about_para.classList.add("editingOn");

                    collegeTitle.contentEditable = "true";
                    collegeCity.contentEditable = "true";
                    collegeYear.contentEditable = "true";
                    collegeTitle.classList.add("editingOn");
                    collegeCity.classList.add("editingOn");
                    collegeYear.classList.add("editingOn");

                    companyTitle.contentEditable = "true";
                    companyCity.contentEditable = "true";
                    companyYear.contentEditable = "true";
                    companyTitle.classList.add("editingOn");
                    companyCity.classList.add("editingOn");
                    companyYear.classList.add("editingOn");


                } else {
                    editResumeButton.textContent = "EDIT RESUME";


                    if(isMoreEducation){
                        more_college_title.contentEditable = "false";
                    more_college_title.classList.remove("editingOn");
                    more_college_city.contentEditable = "false";
                    more_college_city.classList.remove("editingOn");
                    more_college_year.contentEditable = "false";
                    more_college_year.classList.remove("editingOn");
                    }
                    if(isMoreExperience){
                        more_experience_title.contentEditable = "false";
                    more_experience_title.classList.remove("editingOn");
                    more_experience_city.contentEditable = "false";
                    more_experience_city.classList.remove("editingOn");
                    more_experience_year.contentEditable = "false";
                    more_experience_year.classList.remove("editingOn");
                    }

                    contact_p.contentEditable = "false";
                    contact_p.classList.remove("editingOn");
                    email_p.contentEditable = "false";
                    email_p.classList.remove("editingOn");
                    address_p.contentEditable = "false";
                    address_p.classList.remove("editingOn");

                    skills_ul.contentEditable = "false";
                    skills_ul.classList.remove("editingOn");

                    name_h1.contentEditable = "false";
                    name_h1.classList.remove("editingOn");
                    profession_p.contentEditable = "false";
                    profession_p.classList.remove("editingOn");

                    about_para.contentEditable = "false";
                    about_para.classList.remove("editingOn");

                    collegeTitle.contentEditable = "false";
                    collegeCity.contentEditable = "false";
                    collegeYear.contentEditable = "false";
                    collegeTitle.classList.remove("editingOn");
                    collegeCity.classList.remove("editingOn");
                    collegeYear.classList.remove("editingOn");

                    companyTitle.contentEditable = "false";
                    companyCity.contentEditable = "false";
                    companyYear.contentEditable = "false";
                    companyTitle.classList.remove("editingOn");
                    companyCity.classList.remove("editingOn");
                    companyYear.classList.remove("editingOn");
                }
            });

        }
    });




