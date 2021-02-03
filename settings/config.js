"use strict";

window.Config = {

    /*
    |--------------------------------------------------------------------------
    | Preloader configuration
    |--------------------------------------------------------------------------
    */
    preloader:
    {
        duration: 300, // Default preloader duration in ms
    },

    /*
    |--------------------------------------------------------------------------
    | Intro section configuration
    |--------------------------------------------------------------------------
    | Here you can find all settings of Intro section.
    */

    /**
     * Typing Texts module configuration
     */
    introStaticText: "I'm", // Static text
    introTypingTexts: [ // Set of texts to display in Typing Texts module
        "Khushal Jain",
        "on pursuit of making Intelligent machines"
    ],

    /*
    |--------------------------------------------------------------------------
    | Counters
    |--------------------------------------------------------------------------
    */

    counters:
    {
        duration: 3000 // Duration of counting in ms
    },


    /*
    |--------------------------------------------------------------------------
    | Portfolio
    |--------------------------------------------------------------------------
    */

    portfolio:
    {
        enableLightbox: true // Lightbox enable, set it to false if you use dedicated pages for projects
    },


    /*
    |--------------------------------------------------------------------------
    | Testimonials slides configuration
    |--------------------------------------------------------------------------
    | Tetimonial module uses OWL Carousel plugin. Here you can configure all
    | its behavior. All available options you can find on the
    | https://owlcarousel2.github.io/OwlCarousel2/docs/api-options.html
    */

    testimonials:
    {
        items: 1, // The number of items you want to see on the screen
        autoplay: true, // Autoplay
        autoplaySpeed: 1000, // Autoplay speed
        loop: true // Infinity loop. Duplicate last and first items to get loop illusion
    },


    /*
    |--------------------------------------------------------------------------
    | Contact form
    |--------------------------------------------------------------------------
    | 
    */

    contactForm:
    {
        mailScriptLocation: 'adarshghimire5@gmail.com',
        successMessage: 'Your message was sent!'
    },

    /*
    |--------------------------------------------------------------------------
    | AOS - Animate on Scroll
    |--------------------------------------------------------------------------
    | This template uses AOS - small library to animate elements on your page 
    | when you scroll. Here you can configure global settings.
    | All available options you can find at https://github.com/michalsnik/aos
    */
    AOS:
    {
        offset: 120, // Change offset to trigger animations sooner or later (px)
        duration: 600, // Duration of animation (accepted values from 50 to 3000, with step 50ms)
        easing: 'ease-out-quart', // Choose timing function to ease elements in different ways 
        delay: 100, // Delay animation (ms)
        anchor: null, // Anchor element, whose offset will be counted to trigger animation instead of actual elements offset
        placement: 'top-bottom', // Anchor placement - which one position of element on the screen should trigger animation
        once: true, // Choose wheter animation should fire once, or every time you scroll up/down to element      
    },



    translations:
    {
        of: 'of', // eg. 3 of 8
        all: 'all',
        previous: 'previous',
        next: 'next',
        sendMessage: 'Send message'
    }

}
