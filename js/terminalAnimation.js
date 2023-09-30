var typeWriting = new TypeWriting({
    targetElement   : document.getElementsByClassName('terminal')[0],
    inputString     : '> Welcome.',
    typing_interval : 130, // Interval between each character
    blink_interval  : '3s', // Interval of the cursor blinks
    cursor_color    : '#00fd55', // Color of the cursor
    }, function() {
});
