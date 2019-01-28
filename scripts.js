$('.close').hide()
$('#aboutBody').hide();
$('#aboutButton').click(function(){
    $('#aboutBody').html(`
    <div id="test" class="test">
        <h1>ABOUT ME</h1>
        <h4>I'm a Full Stack Developer from Atlanta, GA.</h4>
        <p>I enjoy problem solving and designing. I strive to provide beautiful, elegant and efficient code. No matter what language I use.</p>
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
                <h1>Contact Me</h1>
                <input type="text" name="name" placeholder=" Your Name"/>
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
    $('.close').click(()=>{
        console.log('Hello')
        $('#aboutBody').hide()
        $('.close').hide()
        $('.main-button').show()
    })
    