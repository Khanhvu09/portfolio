$('.close').hide()
$('#aboutBody').hide();
$(document).ready(()=>{
    animate()
})
function animate(){
    $('#about-text').animate({right: '40px',bottom:'60px'}, 600, 'linear')
    $('#contact-text').animate({left: '60px',bottom:'100px'}, 600, 'linear')
    $('#project-text').animate({right: '60px',top:'100px'}, 600, 'linear')
    $('#skills-text').animate({top: '60px',left:'40px'}, 600, 'linear')
}
function animate2(){
    $('#projectsButton').animate({top: '80%', right: '35%'}, 600, 'linear')
    $('#contactButton').animate({left: '65%', bottom: '20%'}, 600, 'linear')
    $('#aboutButton').animate({right: '35%', bottom: '20%'}, 600, 'linear')
    $('#skillsButton').animate({top: '80%', left: '65%'}, 600, 'linear')
}
function animate3(){
    $('#projectsButton').animate({top: '430px', right: '700px'}, 600, 'linear')
    $('#contactButton').animate({left: '1070px', bottom: '500px'}, 600, 'linear')
    $('#aboutButton').animate({right: '640px', bottom: '340px'}, 600, 'linear')
    $('#skillsButton').animate({top: '400px', left: '930px'}, 600, 'linear')
}

$('#aboutButton').click(function(){
    $('#aboutBody').html(`
    <div id="aboutPageContainer">
        <div id="aboutPage">
            <h1>ABOUT ME</h1>
            <h4>I'm a Full Stack Developer from Atlanta, GA.</h4>
            <p>I enjoy problem solving and designing. I strive to provide beautiful, 
            elegant and efficient code. No matter what language I use.
            </p>
        </div>
    </div>
    `)
    $('#aboutBody').show()
    if (parseInt($(window).width()) < 600){
        $('.closeMobile').show()
    } else {
        $('.close').show(),
        animate3()
    }
})
$('#projectsButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <h1 id="projectTitle" >Projects</h1>
        <div id="projectPage" class="test">
            <div id="theProffessionalHobo">
                <div id="TPHName">The Proffessional Hobo</div>
                <img class="projectImage" id="TPH" src="./images/theProffessionalHobo.png"/>
                <span class="pageDesc">
                    <ul>
                        <li>Description of webpage</li>
                        <li>Description of webpage</li>
                        <li>Description of webpage</li>
                        <li>Description of webpage</li>
                    </ul>
                </span>
                <div id="TPHLinks">
                    <a target="_blank" id="TPHGitHub" href="https://github.com/Khanhvu09/project_front-end">GitHub</a>
                    <a target="_blank" id="TPHDemo" href="./frontEnd/index.html">Live Demo</a>
                </div>
            </div>
            <div id="theBudgetHobo">
                <div id="TBHName">The Budget Hobo</div>
                <img class="projectImage" src="./images/theBudgetHobo.png"/>
                <span class="pageDesc">Description of webpage Description of webpage Description of webpage Description of webpage</span>
                <div id="TBHLinks">
                    <a target="_blank" id="TBHGitHub" href="https://github.com/Khanhvu09/backendProject">GitHub</a>
                    <a target="_blank" id="TBHDemo" href="http://thebudgethobo.khanhqvu.com">Live Demo</a>
                </div>
            </div>
        </div>
        `)
        $('#aboutBody').show()
        if (parseInt($(window).width()) < 600){
            $('.closeMobile').show()
        } else {
            $('.close').show(),
            animate3()
        }
})
$('#contactButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <div id="contactPage">
            <form id="contact" method="POST" action="https://formspree.io/kqvu09@gmail.com">
                <span>Contact Me</span>
                <input id="yourName" type="text" name="name" placeholder=" Your Name"/>
                <input type="email" name="_replyto" placeholder=" Your email">
                <textarea name="message" placeholder=" Message"></textarea><br>
                <input type="text" name="_gotcha" style="display:none">
                <button type="submit">Submit</button>
            </form>
        </div>
        `)
        $('#aboutBody').show()
        if (parseInt($(window).width()) < 600){
            $('.closeMobile').show()
        } else {
            $('.close').show(),
            animate3()
        }
})
$('#resumeButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <div id="resume">
    
        </div>
        `)
        $('#aboutBody').show()
        if (parseInt($(window).width()) < 600){
            $('.closeMobile').show()
        } else {
            $('.close').show(),
            animate3()
        }
})

$('#skillsButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <h1 id="skillsTitle">Skills</h1>
        <div id="skillsPage">
            <h3 class="skillsTitle">Skills I know</h3>
            <div id="knownSkills">
                <i class="devicon-html5-plain-wordmark"></i>
                <i class="devicon-css3-plain-wordmark"></i>
                <i class="devicon-express-original-wordmark"></i>
                <i class="fab fa-js"></i>
                <i class="devicon-python-plain-wordmark"></i>
                <i class="fab fa-aws"></i>
                <i class="devicon-mysql-plain-wordmark"></i>
                <i class="devicon-jquery-plain-wordmark"></i>
                <i class="devicon-apache-plain-wordmark"></i>
                <i class="fab fa-node"></i>
                <i class="devicon-bootstrap-plain-wordmark"></i>
            </div>
            <h3 class="skillsTitle">Skills I'm learning</h3>
            <div id="learningSkills">
                <i class="devicon-swift-plain"></i>
                <i class="devicon-java-plain-wordmark"></i>
                <i class="devicon-ruby-plain-wordmark"></i>
                <i class="devicon-react-original-wordmark"></i>
            </div>
        </div>
        `)
        $('#aboutBody').show()
        if (parseInt($(window).width()) < 600){
            $('.closeMobile').show()
        } else {
            $('.close').show(),
            animate3()
        }
})
    $('.close').click(()=>{
        $('.main-button').show()
        animate2()
        // $('#aboutBody').hide()
        $('.close').hide()
    })

    $('.closeMobile').click(()=>{
        $('.main-button').show()
        $('#aboutBody').hide()
        $('.closeMobile').hide()
    })
    