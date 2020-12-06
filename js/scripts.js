/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

var ctx = document.getElementById("myChart");

var stars = [20, 17, 17, 15, 10];
var frameworks = ["Apple", "Google", "LinkedIn", "Facebook", "Twitter"];

var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "% of women held jobs",
                data: stars,
                backgroundColor: [
                    "rgb(53, 62, 131, 0.2)",
                    "rgba(187, 107, 217, 0.2)",
                    "rgb(173, 186, 255, 0.2)",
                    "rgb(255, 182, 171, 0.2)"


                ],
                borderColor: [
                    "rgb(53, 62, 131, 1)",
                    "rgba(187, 107, 217, 1)",
                    "rgb(173, 186, 255, 1)",
                    "rgb(255, 182, 171, 1)"

                ],
                borderWidth: 1
            }
        ]

    },

    options: {
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var ctx = document.getElementById("myChart2");

var stars = [20, 17, 17, 15, 10];
var frameworks = ["Apple", "Google", "LinkedIn", "Facebook", "Twitter"];

var myChart2 = new Chart(ctx, {
    type: "pie",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "% of women held jobs",
                data: stars,
                backgroundColor: [
                    "rgba(187, 107, 217, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)"
                ],
                borderColor: [
                    "rgba(187, 107, 217, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)"
                ],
                borderWidth: 1
            }
        ]

    }

});

var ctx = document.getElementById("myChart3");

var stars = [20, 17, 17, 15, 10];
var frameworks = ["Apple", "Google", "LinkedIn", "Facebook", "Twitter"];

var myChart3 = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: frameworks,
        datasets: [
            {
                label: "% of women held jobs",
                data: stars,
                backgroundColor: [
                    "rgba(169, 201, 255, 0.5)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)"
                ],
                borderColor: [
                    "rgba(169, 201, 255, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)"
                ],
                borderWidth: 1
            }
        ]

    }

});