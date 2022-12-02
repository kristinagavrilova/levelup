$(".btn-order").on('click', () => {
    const sectionOrderPosition = $(".section-order").position().top;
    $('html, body').animate({
        scrollTop: sectionOrderPosition
    }, 800,);
});
