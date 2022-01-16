var cutcopypaste = document.getElementById('cut-copy-paste');
cutcopypaste.addEventListener('click', cutCopyPaste, false);


function cutCopyPaste() {
    var $p = $('p');
    var $cloneQuote = $p.clone();
    $p[1].remove();
    $cloneQuote.insertAfter('$p');
};