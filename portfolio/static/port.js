document.addEventListener('DOMContentLoaded',function(){
    const content = document.getElementById('sec');
    const f_content = document.getElementById('div2')
    const org_fot_content = f_content.innerHTML;
    const originalContent = content.innerHTML;
    // console.log('content');
    function loadcontent(page){
        switch (page){
            case 'about':
                content.innerHTML = `
                    <div id='p1'>
                        <h2>About Me</h2>
                        <p>
                            Hi, This is <span class='s1'>Prakash Kumar Daram</span>. I have recently completed my 
                            <span class='s1'>Master of Computer Applications</span>. I successfully completed a project during my final semester of my Master's degree. 
                            During my post-graduation, I decided to enhance my <span class='s1'>technical skills</span> through Python, which led me to undertake a 
                            <span class='s1'>Python Full Stack course</span>. During this course, I worked on up to six projects.  
                            Now, I am ready to <span class='s1'>work</span> with my <span class='s1'>technical skills in any IT company</span> to deliver integrated solutions 
                            for challenging problems.
                        </p>
                        <h2>Certifications</h2>
                        
                            <ul>
                                <li style=' text-align:left;'>✅ Achieved a <b>Python Course Completion Certificate</b> for mastering Python concepts and development.</li>
                                <li style=' text-align:left;'>✅ Received a certification for <b>UI Development</b> during my internship at graduation, 2023.</li>
                                <li style=' text-align:left;'>✅ Completed a free online course and received a certification from <b>Great Learning</b>, 2024.</li>
                                
                            </ul>
                        <h2>Achievements</h2>
                        <p>
                            <ul> 
                                <li> 🏆 <strong><span class='s1'>Academic Excellence:</span></strong> Received a <b> <span class='s1'>prize for achieving full marks in Physics</span></b> during my school education. </li>
                                <li> 🏅 <strong><span class='s1'>Best Employee Award:</span></strong> Honored with the <b><span class='s1'>Best Employee Award</span></b> while working at <b><span class='s1'>DMart</span></b> as part of my course period. </li> </ul><br>
                        </p>
                        <h2>Interests</h2>
                        <ul>
                            <li id='s2'>🤖 Artificial Intelligence (AI)></li>
                            <li id='s2'>📊 Data Analytics</li>
                            <li id='s2'>📈 Machine Learning (ML)</li>
                        </ul>
                        <h2>Future Goals</h2>
                        <ul id='u'>
                            <li>💼 Eager to secure a job in a reputable <b>software company</b></li>
                            <li>🗄️ Aspire to become a skilled <b>Data Analytics Developer</b></li>
                            <li>💡 Aim to contribute to innovative projects involving <b>AI and Data Science</b>.</li>
                            
                        </ul>
                    </div>
                `;
                f_content.innerHTML = '';
            break;
            case 'contact':
                content.innerHTML=`
                    <div id='container'><h2>Contact Me</h2>
                        <div class='supsub'>
                            <div id='sub1'>
                                <img  id ='img1' src="https://images.vexels.com/media/users/3/137415/isolated/svg/0e475bb9b17b3fa4f94f31fba1635b8f.svg" alt="Image Not Found">  +91 6302581405
                            </div>
                            <a href="https://github.com/prakash-python" >
                            <div id='sub3'>
                            <img src="https://cdn-icons-png.freepik.com/512/4494/4494740.png" alt="Image Not Found" width="13px" height="13px">  
                                Git Account
                            </div></a>
                        </div>
                        <div class='supsub'>
                        <a href="https://www.linkedin.com/in/prakash-kumar-daram-891191298/">
                            <div id='sub2'>
                            <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png" alt="Image Not Found" width="15px" height="15px"> 
                                Linked-In
                            </div></a>
                            <div id='sub4'>
                                <img src="https://png.pngtree.com/png-vector/20220612/ourmid/pngtree-gmail-icon-in-simple-style-on-a-white-background-png-image_4998692.png" alt="Image Not Found" width="15px" height="15px"> @daramprakashkumar587@gamil.com
                            </div>
                        </div>
                    </div>
                    
                `;
                f_content.innerHTML = `
                <div id='fif'>
                
                    <marquee id='mar1'>
                        
                        <p><a href='https://goo.gl/maps/jxhx8Bho8PiQJUBa6?g_st=aw/'><img  src="https://hips.hearstapps.com/hmg-prod/images/west-virginia-gray-cottage-64dd6bb056057.jpg?crop=0.943xw:0.817xh;0.0224xw,0.0932xh&resize=980:*" alt='image not found' width:40px height=25px >
                        <span style=' margin-bottom:10px;'>Reddy's ramalayam back side main road Prathipadu (m),Guntur (dt).
                        </span></a></p>
                        
                    </marquee>
                    
                    
                
                </div>
                `;
            break;
            case 'skill':
                content.innerHTML=

                `<h2 style='margin-left:580px; margin-top:100px'>My Skills</h2>
                <div class='container'>
                    
                    <div class='left'>
                        <div class='skill'>Python
                            <div class='discription'>
                                <span>Created a Veg Mart application using Python, 
                                demonstrating proficiency in Python's core concepts and implementing effective solutions for real-world scenarios.</span>
                            </div>
                        </div>
                        <div class='skill'>MySQL
                            <div class='discription'>
                                <span>Utilized MySQL in multiple projects to design efficient database structures, ensuring data integrity and seamless performance.</span>
                            </div>
                        </div>
                        <div class='skill'>Python & MySQL
                            <div class='discription'>
                                <span>Developed a Bank Management System using Python and MySQL, 
                                showcasing strong problem-solving skills, 
                                database management expertise, and logical thinking.</span>
                            </div>
                        </div>
                        <div class='skill'>Html & CSS
                            <div class='discription'>
                                <span>I have the ability to create static web pages using HTML and CSS. 
                                HTML helps me structure the content in an organized manner, 
                                while CSS enhances the design, ensuring the web pages are visually appealing and user-friendly.</span>
                            </div>
                        </div>
                        <div class='skill'>Problem-Solving
                            <div class='discription1'>
                                <span>I have strong problem-solving skills, supported by my ability to grasp new concepts quickly.  
                                This allows me to understand challenges efficiently, analyze situations, and apply appropriate solutions.  
                                My quick learning ability helps me adapt to new technologies and methods, enabling me to resolve issues effectively.</span>
                            </div>
                        </div>
                    </div>
                    <div class='right'>
                        <div class='skills'>Java Script
                            <div class='discription'>
                                <span>I have the ability to enhance web pages using JavaScript by adding interactivity and dynamic functionality. 
                                JavaScript allows me to create responsive elements, manage events, and manipulate the DOM to improve user experience. 
                                With my knowledge of JavaScript, I can build interactive features like form validation, and dynamic content updates.</span>
                            </div>
                        </div>
                        <div class='skills'>Django
                            <div class='discription'>
                                <span>I have experience developing web applications using Django, a powerful Python framework. 
                                With Django, I can build dynamic, secure, and scalable web applications efficiently. 
                                I am skilled in creating models, views, and templates, implementing REST APIs, and managing database interactions. 
                                My knowledge of Django's built-in authentication, admin interface, and ORM enhances my ability to develop full-stack applications.</span>
                            </div>
                        </div>
                        <div class='skills'>React JS
                            <div class='discription'>
                                <span>I have basic knowledge of React and can build simple web applications using its component-based structure. 
                                I am familiar with JSX, props, and state management, allowing me to create interactive user interfaces effectively.</span>
                            </div>
                        </div>
                        <div class='skills'>Communication
                            <div class='discription1'>
                                <span>I have strong communication skills, with proficiency in both English and Telugu.  
                                I can effectively convey ideas, explain technical concepts clearly, and engage in productive discussions.  
                                Additionally, I have basic experience in technical industry communication, enabling me to collaborate with teams and present information in a professional manner.</span>
                            </div>
                        </div>
                        <div class='skills'>Aptitude 
                            <div class='discription1'>
                                <span>I have strong aptitude skills, backed by my solid mathematical foundation.  
                                My ability to think logically and solve numerical problems efficiently helps me excel in analytical reasoning, problem-solving, and decision-making tasks.  
                                This skill set enables me to approach challenges with clarity and precision.</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
                f_content.innerHTML='';
            break;
            case 'projects':
                content.innerHTML=`
                <div>
                    <h2 style='margin-left:580px; margin-top:100px'>My Projects</h2>
                    <div id='p_container'>
                        <div id='p_left'>
                            <div class='p_sub'>
                                <a href='https://github.com/prakash-python/Python_Veg_Inventory'>Veg Mart Inventory</a>
                            </div>
                            <div class='p_sub'>
                                <a href=''>Port_Folio</a>
                            </div>
                        </div>
                        <div id='p_right'>
                            <div class='p_sub'>
                                <a href='https://github.com/prakash-python/python_mysql_bank_project'>Bank Management System</a>
                            </div>
                            <div class='p_sub'>
                                <a href='https://prakashkumarpython.pythonanywhere.com/'>Mail Sending </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
                `;
                f_content.innerHTML='';
            break
            
        };
        


    };
    document.getElementById('home').addEventListener('mouseover',function(event){
        event.preventDefault();
        content.innerHTML = originalContent;
        f_content.innerHTML=org_fot_content;
    });
    document.getElementById('about').addEventListener('mouseover',function(event){
        event.preventDefault();
        loadcontent('about')
        
    });
    document.getElementById('contact').addEventListener('mouseover',function(event){
        event.preventDefault();
        loadcontent('contact')
    });
    document.getElementById('skill').addEventListener('mouseover',function(event){
        event.preventDefault();
        loadcontent('skill')
    });
    document.getElementById('projects').addEventListener('mouseover',function(event){
        event.preventDefault();
        loadcontent('projects')
    });

    
})