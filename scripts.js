$('.closeMobile').hide()
$('.close').hide()
$('#mainBody').hide();
$(document).ready(()=>{
    wordAnimation()
})
function wordAnimation(){
    $('#about-text').animate({right: '40px',bottom:'60px'}, 600, 'linear')
    $('#contact-text').animate({left: '60px',bottom:'100px'}, 600, 'linear')
    $('#project-text').animate({right: '60px',top:'100px'}, 600, 'linear')
    $('#skills-text').animate({top: '60px',left:'40px'}, 600, 'linear')
}
function closeAnimation(){
    $('#projectsButton').animate({top: '80%', right: '35%'}, 600, 'linear')
    $('#contactButton').animate({left: '65%', bottom: '20%'}, 600, 'linear')
    $('#aboutButton').animate({right: '35%', bottom: '20%'}, 600, 'linear')
    $('#skillsButton').animate({top: '80%', left: '65%'}, 600, 'linear')
}
function openAnimation(){
    $('#projectsButton').animate({top: '530px', right: '800px'}, 600, 'linear')
    $('#contactButton').animate({left: '1170px', bottom: '550px'}, 600, 'linear')
    $('#aboutButton').animate({right: '640px', bottom: '340px'}, 600, 'linear')
    $('#skillsButton').animate({top: '500px', left: '1030px'}, 600, 'linear')
}

$('#aboutButton').click(function(){
    $('#mainBody').html(`
    <div id="aboutPageContainer">
        <div id="aboutPage">
            <h1>ABOUT ME</h1>
            <h3>Hi, I'm Khanh</h3>
            <p id="bio">Born and raised in Orange County, CA. I have been in Atlanta long enough to know
            not to call it Hot-Lanta. I am a proud, analytical Full-Stack Web Developer who
            utilizes a dozen different technical skills from HTML to React</p>
            <p>Most of my time is spent at the drawing board coming up with designs for my next project
            or face down in my Mac debugging or typing out lines of code. If you do not
            see me there, I am doing 1 of these 3 things:</p>
            <ol>
                <li>In my gaming lair... I mean gaming chair.</li>
                <li>Hitching my mountain bike to my car about to head out to the trails.</li>
                <li>Restaurant hopping on Buford Hwy.</li>
            </ol>
            <p>Discovering my passion for coding did not come to me as quick as others but my love for technology did.
            My love for tech started when I was 8 when I got my first RC car, tore it apart, just to see how it worked and put it back together
            again to play with. That's when my family discovered that I was the "techie" to go to for all of the answers.
            Discovering my passion for coding started with Udemy courses learning this new "hobby" and then I 
            looked up from my screen and it was 2:00 A.M. This passion of mine has come with a lot of hours spent building websites from scratch, many nights of Chinese take-out and a few all-nighters
            to perfect the projects while improving my code. Turning a hobby into a career is everyone's dream...I just happened to hustle to make 
            that a reality.</p>
        </div>
    </div>
    `)
    $('#mainBody').show()
    if (parseInt($(window).width()) < 812){
        $('.closeMobile').show()
        $('.main-button').hide()
    } else {
        $('.close').show(),
        openAnimation()
    }
})
$('#projectsButton').click(function(){
    console.log('hello')
    $('#mainBody').html(
        `
        <h1 id="projectTitle" >Projects</h1>
        <div id="projectPage">
            <div id="theProffessionalHobo">
                <div id="TPHName">The Proffessional Hobo</div>
                <img class="projectImage" id="TPH" src="./images/theProffessionalHobo.png"/>
                <span class="pageDesc">
                    The Proffessional Hobo is a travel web app that utilizes amadeus api to provide
                    live flight information. 
                </span>
                <div id="TPHLinks">
                    <a target="_blank" id="TPHGitHub" href="https://github.com/Khanhvu09/project_front-end">GitHub</a>
                    <a target="_blank" id="TPHDemo" href="./frontEnd/index.html">Live Demo</a>
                </div>
            </div>
            <div id="theBudgetHobo">
                <div id="TBHName">The Budget Hobo</div>
                <img class="projectImage" src="./images/theBudgetHobo.png"/>
                <span class="pageDesc">The Budget Hobo allows the user to link their bank accounts with the app
                to keep track of spending. The app also includes their own personal budget calculator to help budget as well.</span>
                <div id="TBHLinks">
                    <a target="_blank" id="TBHGitHub" href="https://github.com/Khanhvu09/backendProject">GitHub</a>
                    <a target="_blank" id="TBHDemo" href="http://thebudgethobo.khanhqvu.com">Live Demo</a>
                </div>
            </div>
        </div>
        `)
    $('#mainBody').show()
    if (parseInt($(window).width()) < 812){
        $('.closeMobile').show()
        $('.main-button').hide()
    } else {
        $('.close').show(),
        openAnimation()
    }
})
$('#contactButton').click(function(){
    $('#mainBody').html(
        `
        <div id="contactContainer">
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
        <div id="location">
            <h1>Location:</h1>
            <h2>Atlanta, GA</h2>
            <h1>Phone:</h1>
            <h2>(404)993-3613</h2>
            <h1>Email:</h1>
            <h2>Kqvu09@gmail.com</h2>
        </div>
        </div>
        `)
    $('#mainBody').show()
    if (parseInt($(window).width()) < 812){
        $('.closeMobile').show()
        $('.main-button').hide()
    } else {
        $('.close').show(),
        openAnimation()
    }
})
$('#resumeButton').click(function(){
    console.log('hello')
    $('#mainBody').html(
        `
        <div>
            <iframe id="resume" src="Resume.pdf"></iframe>
        </div>
        `)
    $('#mainBody').show()
    if (parseInt($(window).width()) < 812){
        $('.closeMobile').show()
        $('.main-button').hide()
    } else {
        $('.close').show(),
        openAnimation()
    }
})

$('#skillsButton').click(function(){
    console.log('hello')
    $('#mainBody').html(
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
                <i class="devicon-react-original-wordmark"></i>
            </div>
            <h3 class="skillsTitle">Skills I'm learning</h3>
            <div id="learningSkills">
                <i class="devicon-swift-plain"></i>
                <i class="devicon-ruby-plain-wordmark"></i>
            </div>
        </div>
        `)
    $('#mainBody').show()
    if (parseInt($(window).width()) < 812){
        $('.closeMobile').show()
        $('.main-button').hide()
    } else {
        $('.close').show(),
        openAnimation()
    }
})

$('.close').click(()=>{
    $('.main-button').show()
    closeAnimation()
    $('.close').hide()
})

$('.closeMobile').click(()=>{
    $('.main-button').show()
    $('#mainBody').hide()
    $('.closeMobile').hide()
})
    