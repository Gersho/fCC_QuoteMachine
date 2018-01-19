$(document).ready(function() {
  $.ajaxSetup({
    cache: false
  });

  $("#clicMe").on("click", function() {
    var display = "";

    $.getJSON(
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=",
      function(data) {
        var twittUrl = "https://twitter.com/intent/tweet?text=";

        var cleanQuote = data[0].content.replace("<p>", "");
        cleanQuote = cleanQuote.replace("</p>", "");
        twittUrl += cleanQuote;
        twittUrl += "   ";
        twittUrl += data[0].title;

        display +=
          "<div class='card'><div class='card-block'><h3 class='card-title'>" +
          data[0].content +
          "</h3><p class='card-text'>" +
          data[0].title +
          "</p><a href='" +
          twittUrl +
          "' target='_blank' class='btn btn-secondary'><i class='fa fa-twitter'></i> Share on Twitter</a></div></div>";

        $("#output").html(display);
      }
    ); //fin getJSON
  }); //fin onclic clicMe
}); //fin doc ready