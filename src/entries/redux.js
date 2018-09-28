console.log("redux js");

var $form = document.getElementById('form');
$form = addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    var data = new FormData($form);
    console.log("form " + $form);

    var title = data.get('title');
    console.log("title " + title);
}