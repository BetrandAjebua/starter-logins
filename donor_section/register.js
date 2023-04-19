$("#click").click(function () {
    $(".opa").fadeToggle()
    $(".hidden-submit").fadeToggle()
    $(".hidden-submit").draggable()
})
$("#submit-no").click(function () {
    $(".hidden-submit").fadeToggle()
    $(".opa").fadeToggle()
})
