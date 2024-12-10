
//experience

//tcs

function expand_tcs(event){
    var tcs_plus=document.getElementById("tcs-plus");
    var experience_tcs=document.getElementById("experience-tcs");

    var tcs=document.getElementById("tcs");

    var tcs_title_exist=document.getElementById("tcs-title");
    tcs_title_exist.remove();

    var title=document.createElement("div");
    title.setAttribute("class","tcs-title");
    title.setAttribute("id","tcs-title");
    title.innerHTML=`<h1>Assistant System Engineer</h1>
    <i class="fa fa-minus" id="tcs-minus" onclick="shrink_tcs(event)"></i>`;

    var content=document.createElement("div");
    content.setAttribute("class","tcs-content");
    content.setAttribute("id","tcs-content");

    var company=document.createElement("div");
    company.setAttribute("class","tcs-company");
    company.innerHTML=`<p>TATA CONSULTANCY SERVICES, Kochi</p>`;

    var duration=document.createElement("div");
    duration.setAttribute("class","tcs-duration");
    duration.innerHTML=`<i class="fa fa-calendar"></i>
    <p>Duration : Jul 2024 - Present</p>`;

    var ul=document.createElement("ul");
    ul.innerHTML=``;

        content.append(company);
        content.append(duration);
        content.append(ul);

        tcs.append(title);
        tcs.append(content);
        experience_tcs.append(tcs);
}

function shrink_tcs(event){
    var tcs=document.getElementById("tcs");

    var tcs_title_exist=document.querySelector(".tcs-title");
    tcs_title_exist.remove();

    var title=document.createElement("div");
    title.setAttribute("class","tcs-title");
    title.setAttribute("id","tcs-title");
    title.innerHTML=`<h1>Assistant System Engineer</h1>
    <i class="fa fa-plus" id="tcs-plus" onclick="expand_tcs(event)"></i>`;

    tcs.append(title);

    var tcsSection = document.getElementById("tcs-content");
    tcsSection.parentNode.removeChild(tcsSection);
}

//intern

function expand_intern(event){
    var intern_plus=document.getElementById("intern-plus");
    var experience_intern=document.getElementById("experience-intern");

    var intern=document.getElementById("intern");

    var intern_title_exist=document.getElementById("intern-title");
    intern_title_exist.remove();

    var title=document.createElement("div");
    title.setAttribute("class","intern-title");
    title.setAttribute("id","intern-title");
    title.innerHTML=`<h1>Software Intern</h1>
    <i class="fa fa-minus" id="intern-minus" onclick="shrink_intern(event)"></i>`;

    var content=document.createElement("div");
    content.setAttribute("class","intern-content");
    content.setAttribute("id","intern-content");

    var company=document.createElement("div");
    company.setAttribute("class","intern-company");
    company.innerHTML=`<p>NXP SEMICONDUCTORS, Bangalore.</p>`;

    var duration=document.createElement("div");
    duration.setAttribute("class","intern-duration");
    duration.innerHTML=`<i class="fa fa-calendar"></i>
    <p>Duration : Aug 2023 - Jun 2024</p>`;

    var ul=document.createElement("ul");
    ul.innerHTML=`<li><i class="fa fa-check-square-o"></i>Contributed to the development of firmware for an Ultra-Wide-Band (UWB) - FIRA 
    system using C programming. This project broadened my knowledge of UWB technology and firmware development.</li>
<li><i class="fa fa-check-square-o"></i>Worked with diverse systems utilizing industry-standard protocols including SPI, I2C, and UART, ensuring seamless communication.</li>
<li><i class="fa fa-check-square-o"></i>Leveraged strong analytical and problem-solving skills to successfully 
debug and validate complex UWB systems using C programming.</li>
<li><i class="fa fa-check-square-o"></i>Applied keen diagnostic and troubleshooting abilities to enhance UWB system performance by resolving critical issues and implementing optimizations.</li>`;

        content.append(company);
        content.append(duration);
        content.append(ul);

        intern.append(title);
        intern.append(content);
        experience_intern.append(intern);
}

function shrink_intern(event){
    var intern=document.getElementById("intern");

    var intern_title_exist=document.querySelector(".intern-title");
    intern_title_exist.remove();

    var title=document.createElement("div");
    title.setAttribute("class","intern-title");
    title.setAttribute("id","intern-title");
    title.innerHTML=`<h1>Software Intern</h1>
    <i class="fa fa-plus" id="intern-plus" onclick="expand_intern(event)"></i>`;

    intern.append(title);

    var internSection = document.getElementById("intern-content");
    internSection.parentNode.removeChild(internSection);
}


//college

function expand_college(event){

    var college_plus=document.getElementById("college-plus");

    var college=document.querySelector(".college");

    var college_title_exist=document.getElementById("college-title");
    college_title_exist.remove();

    var college_title=document.createElement("div");
    college_title.setAttribute("class","college-title");
    college_title.setAttribute("id","college-title");
    college_title.innerHTML=`<h1>M.Tech Software Engineering</h1>
    <i class="fa fa-minus" id="college-minus" onclick="shrink_college(event)"></i>`;

    var college_name=document.createElement("div");
    college_name.setAttribute("class","college-name");
    college_name.innerHTML=`<p>Vellore Institute of Technology, Vellore.</p>`;

    var college_content=document.createElement("div");
    college_content.setAttribute("class","college-content");
    college_content.innerHTML=`<div class="college-duration">
                                <i class="fa fa-calendar"></i>
                                <p>Duration : Jun 2019 - Jul 2024</p>
                                </div>
                                <p class="college-cgpa"><span>CGPA : </span>9.13</p>`;


    college.append(college_title);
    college.append(college_name);
    college.append(college_content);
}


function shrink_college(event){
    var college=document.querySelector(".college");

    var college_minus=document.getElementById("college-minus");
    var college_title_exist=document.getElementById("college-title");
    college_title_exist.remove();

    var college_title=document.createElement("div");
    college_title.setAttribute("class","college-title");
    college_title.setAttribute("id","college-title");
    college_title.innerHTML=`<h1>M.Tech Software Engineering</h1>
    <i class="fa fa-plus" id="college-plus" onclick="expand_college(event)"></i>`;

    college.append(college_title);

    var c_name=document.querySelector(".college-name");
    c_name.remove();

    var c_content=document.querySelector(".college-content");
    c_content.remove();
}

//secondary school

function expand_second_school(event){

    var secondary_school_plus=document.getElementById("secondary-school-plus");
    var secondary_school=document.querySelector(".secondary-school");

    var secondary_school_title_exist=document.querySelector(".secondary-school-title");
    secondary_school_title_exist.remove();

    var secondary_school_name=document.createElement("div");
    secondary_school_name.setAttribute("class","secondary-school-name");
    secondary_school_name.innerHTML=`<p>Government Girls Higher Secondary School, Ayakkaranpulam.</p>`;

    var secondary_school_content=document.createElement("div");
    secondary_school_content.setAttribute("class","secondary-school-content");
    secondary_school_content.innerHTML=`<div class="secondary-school-duration">
                                <i class="fa fa-calendar"></i>
                                <p>Duration : Jun 2016 - Mar 2017</p>
                                </div>
                                <p class="secondary-school-percentage"><span>Percentage : </span>97.6%</p>`;


    var secondary_school_title=document.createElement("div");
    secondary_school_title.setAttribute("class","secondary-school-title");
    secondary_school_title.innerHTML=`<h1>Secondary Education</h1>
    <i class="fa fa-minus" id="secondary-school-minus" onclick="shrink_second_school(event)"></i>`;

    secondary_school.append(secondary_school_title);
    secondary_school.append(secondary_school_name);
    secondary_school.append(secondary_school_content);
}

function shrink_second_school(event){

    var secondary_school=document.querySelector(".secondary-school");

    var secondary_school_title_exist=document.querySelector(".secondary-school-title");
    secondary_school_title_exist.remove();

    var secondary_school_title=document.createElement("div");
    secondary_school_title.setAttribute("class","secondary-school-title");
    secondary_school_title.innerHTML=`<h1>Secondary Education</h1>
    <i class="fa fa-plus" id="secondary-school-plus" onclick="expand_second_school(event)"></i>`;

    secondary_school.append(secondary_school_title);

    var secondary_school_name=document.querySelector(".secondary-school-name");
    secondary_school_name.remove();

    var secondary_school_content=document.querySelector(".secondary-school-content")
    secondary_school_content.remove();
}

//higher secondary school

function expand_high_school(event){
    var higher_secondary_school_plus=document.getElementById("higher-secondary-school-plus");
    var higher_secondary_school=document.querySelector(".higher-secondary-school");

    var higher_secondary_school_title_exist=document.querySelector(".higher-secondary-school-title");
    higher_secondary_school_title_exist.remove();

    var higher_secondary_school_name=document.createElement("div");
    higher_secondary_school_name.setAttribute("class","higher-secondary-school-name");
    higher_secondary_school_name.innerHTML=`<p>Government Girls Higher Secondary School, Ayakkaranpulam.</p>`;

    var higher_secondary_school_content=document.createElement("div");
    higher_secondary_school_content.setAttribute("class","higher-secondary-school-content");
    higher_secondary_school_content.innerHTML=`<div class="higher-secondary-school-duration">
                <i class="fa fa-calendar"></i>
                <p>Duration : Jun 2018 - Mar 2019</p>
            </div>
            <p class="higher-secondary-school-percentage"><span>Percentage : </span>87.83%</p>`;


    var higher_secondary_school_title=document.createElement("div");
    higher_secondary_school_title.setAttribute("class","higher-secondary-school-title");
    higher_secondary_school_title.innerHTML=`<h1>Higher Secondary Education</h1>
    <i class="fa fa-minus" id="higher-secondary-school-minus" onclick="shrink_high_school(event)"></i>`;

    higher_secondary_school.append(higher_secondary_school_title);
    higher_secondary_school.append(higher_secondary_school_name);
    higher_secondary_school.append(higher_secondary_school_content);
}

function shrink_high_school(event){

    var higher_secondary_school=document.querySelector(".higher-secondary-school");

    var higher_secondary_school_title_exist=document.querySelector(".higher-secondary-school-title");
    higher_secondary_school_title_exist.remove();

    var higher_secondary_school_title=document.createElement("div");
    higher_secondary_school_title.setAttribute("class","higher-secondary-school-title");
    higher_secondary_school_title.innerHTML=`<h1>Higher Secondary Education</h1>
    <i class="fa fa-plus" id="higher-secondary-school-plus" onclick="expand_high_school(event)"></i>`;

    higher_secondary_school.append(higher_secondary_school_title);

    var higher_secondary_school_name=document.querySelector(".higher-secondary-school-name");
    higher_secondary_school_name.remove();

    var higher_secondary_school_content=document.querySelector(".higher-secondary-school-content")
    higher_secondary_school_content.remove();
}

// Nav-bar
// function expand_reorder(event) {
//     var nav = document.querySelector(".nav");
//     var nav_bar=document.querySelector(".nav-bar");
//     var reorder = document.getElementById("reorder");
//     var closeBtn = document.createElement("i");
//     closeBtn.classList.add("fa", "fa-remove", "close-btn");
//     closeBtn.onclick = function() {
//         var nav_bar = document.querySelectorAll(".nav-bar li");
//         nav_bar.forEach(function(item) {
//         item.style.display = 'block';
//     });
//         nav.style.display = "flex";
//         reorder.style.display = "inline";
//         closeBtn.style.display = "none";
//     };

//     if (nav.style.display === "none" || nav.style.display === "") {
//         nav.style.display = "flex";
//         nav.style.flexDirection = "column";
//         nav.style.alignItems = "center";
//         nav.style.justifyContent = "space-between";
//         reorder.style.display = "none";
//         nav.appendChild(closeBtn);
//     } else {
//         nav.style.display = "none";
//         reorder.style.display = "inline";
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     var screenWidth = window.innerWidth;
//     var reorderButton = document.querySelector(".reorder");
//     var closeButton = document.querySelector(".close");

//     if (screenWidth >= 1007) {
//         reorderButton.style.display = "none";
//         closeButton.style.display = "none";
//     } else {
//         reorderButton.style.display = "inline";
//         closeButton.style.display = "none";
//     }
// });

// window.addEventListener('resize', function() {
//     var screenWidth = window.innerWidth;
//     var reorderButton = document.querySelector(".reorder");
//     var closeButton = document.querySelector(".close");

//     if (screenWidth >= 1007) {
//         reorderButton.style.display = "none";
//         closeButton.style.display = "none";
//     } else {
//         reorderButton.style.display = "inline";
//         closeButton.style.display = "none"; // assuming closeButton is initially hidden
//     }
// });

/*
function expand_reorder(event){
    var nav=document.querySelector(".nav");
    var reorder=document.getElementById("reorder");
    nav.style.display="flex";
    nav.style.flexDirection="column";
    nav.style.alignItems="center";
    nav.style.justifyContent="space-between";

    var nav_bar=document.querySelectorAll(".nav-bar li");
    // nav_bar.style.display="block";
    nav_bar.forEach(function(item) {
        item.style.display = 'block';
    });

    reorder.style.display="none";
}
*/


// navigation bar

// opening menu when link is clicked
const navMenu = document.querySelector(".nav-bar");
navToggle = document.querySelector(".reorder");
if(navToggle)
{
    navToggle.addEventListener("click", () =>
    {
        navMenu.classList.toggle("active");
    })
}