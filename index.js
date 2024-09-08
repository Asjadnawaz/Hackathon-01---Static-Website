"use strict";
// Toggle Skills Visibility with Animation
const toggleSkillsBtn = document.getElementById('toggle-skills-btn');
const skillsSection = document.getElementById('skills');
toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.opacity = '0';
        skillsSection.style.display = 'block';
        setTimeout(() => skillsSection.style.opacity = '1', 100); // fade in effect
    }
    else {
        skillsSection.style.opacity = '0'; // fade out effect
        setTimeout(() => skillsSection.style.display = 'none', 700);
    }
});
