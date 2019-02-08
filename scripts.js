$('.close').hide()
$('#aboutBody').hide();
$('#aboutButton').click(function(){
    $('#aboutBody').html(`
    <div id="aboutMe" class="test">
        <h1>ABOUT ME</h1>
        <h4>I'm a Full Stack Developer from Atlanta, GA.</h4>
        <p>I enjoy problem solving and designing. I strive to provide beautiful, 
        elegant and efficient code. No matter what language I use.
        </p>
    </div>
    `,
    )
    $('.close').show()
    $('.main-button').hide()
    $('#aboutBody').show()
})
$('#projectsButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `

        <div id="projectPage" class="test">
            <div id="theProffessionalHobo">
                <div id="TPHName">The Proffessional Hobo</div>
                <img class="projectImage" id="TPH" src="./images/theProffessionalHobo.png"/>
                <div id="TPHLinks">
                    <a id="TPHGitHub" href="https://github.com/Khanhvu09/project_front-end">GitHub</a>
                    <a id="TPHDemo" href="./frontEnd/index.html">Live Demo</a>
                </div>
            </div>
            <div id="theBudgetHobo">
                <div id="TBHName">The Budget Hobo</div>
                <img class="projectImage" src="./images/theBudgetHobo.png"/>
                <div id="TBHLinks">
                    <a id="TBHGitHub" href="https://github.com/Khanhvu09/backendProject">GitHub</a>
                    <a id="TBHDemo" href="http://thebudgethobo.khanhqvu.com">Live Demo</a>
                </div>
            </div>
        </div>

        
        
        </div>
        `,
        
        )
        $('.close').show(),
        $('.main-button').hide(),
        $('#aboutBody').show()
})
$('#contactButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <div class="test">
            <form id="contact" method="POST" action="https://formspree.io/kqvu09@gmail.com">
                <span>Contact Me</span>
                <input id="yourName" type="text" name="name" placeholder=" Your Name"/>
                <input type="email" name="_replyto" placeholder=" Your email">
                <textarea name="message" placeholder=" Message"></textarea><br>
                <input type="text" name="_gotcha" style="display:none">
                <button type="submit">Submit</button>
            </form>
        </div>
        `,
        )
        $('.close').show(),
        $('.main-button').hide(),
        $('#aboutBody').show()
})
$('#resumeButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <div id="test4" class="test">
        <p>Lorem khanh ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
    
        </div>
        `,
        $('.close').show(),
        $('.main-button').hide(),
        $('#aboutBody').show()
    )
})

$('#skillsButton').click(function(){
    console.log('hello')
    $('#aboutBody').html(
        `
        <div id="test2" class="test">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora deleniti aliquam sapiente quidem, quam, ullam praesentium vel excepturi voluptatem odio sunt optio porro soluta? Laborum corporis eveniet sequi non sed.

        `,
        $('.close').show(),
        $('.main-button').hide(),
        $('#aboutBody').show()
    )
})
    $('.close').click(()=>{
        console.log('Hello')
        $('#aboutBody').hide()
        $('.close').hide()
        $('.main-button').show()
    })
    