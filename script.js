
//experience

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
    ul.innerHTML=`<li><i class="fa fa-check-square-o"></i>Demonstrated strong collaborative skills by actively participating in the development of UWB-related features, 
    showcasing effective teamwork and a profound understanding of UWB technology.</li>
<li><i class="fa fa-check-square-o"></i>Exhibit adaptability and problem-solving abilities through a strong grasp of various applications of UWB technology, such
        asindoor positioning, asset tracking, and gesture recognition.</li>
<li><i class="fa fa-check-square-o"></i>Demonstrate extensive expertise in debugging and validating UWB systems utilizing the C programming language.</li>
<li><i class="fa fa-check-square-o"></i>Possess strong analytical and problem-solving skills to effectively troubleshoot issues and optimize performance in UWB-based
        systems.</li>`;

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
                                <p class="college-cgpa"><span>CGPA : </span>9.01</p>`;


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
                                <p>Duration : Jun 2015 - Mar 2017</p>
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
                <p>Duration : Jun 2017 - Mar 2019</p>
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