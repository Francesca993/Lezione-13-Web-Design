// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.
document.addEventListener("DOMContentLoaded", function () {
  let twitter = document.querySelector(
    " .p-4:nth-of-type(3) ol li:nth-of-type(2)"
  );
  twitter.remove();
  console.log(twitter);
});


    // EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

let autore = document.querySelectorAll(
  "blog-post p:first-of-type a:nth-of-type(1)"
);
console.log(autore);

