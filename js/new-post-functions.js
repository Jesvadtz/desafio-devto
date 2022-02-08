$(document).ready(function () {
  //Help formText
  $("#formText").click(function () {
    deleteHelpers();

    $("#help").append(
      $("<div/>").append(
        $("<ul/>")
          .text("Editor Basics")
          .css({
            marginTop: "280px",
          })
          .append(
            $("<li/>").text(
              "Use Markdown to write and format posts. Commonly used syntax"
            )
          )
          .append(
            $("<li/>").text(
              "You can use Liquid tags to add rich content such as Tweets, YouTube videos, etc."
            )
          )
          .append(
            $("<li/>").text(
              "In addition to images for the post's content, you can also drag and drop a cover image"
            )
          )
      )
    );
  });
  //Help titleText
  $("#titleText").click(function () {
    deleteHelpers();

    $("#help").append(
      $("<div/>").append(
        $("<ul/>")
          .text("Writing a Great Post Title")
          .css({
            marginTop: "120px",
          })
          .append(
            $("<li/>").text(
              "Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence."
            )
          )
          .append(
            $("<li/>").text(
              "Use keywords where appropriate to help ensure people can find your post by search."
            )
          )
      )
    );
  });
  // Help Hashtag
  $("#hashtag").click(function () {
    deleteHelpers();

    $("#help").append(
      $("<div/>").append(
        $("<ul/>")
          .text("Tagging Guidelines")
          .css({
            marginTop: "180px",
          })
          .append($("<li/>").text("Tags help people find your post."))
          .append(
            $("<li/>").text(
              "Think of tags as the topics or categories that best describe your post."
            )
          )
          .append(
            $("<li/>").text(
              "Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities."
            )
          )
          .append($("<li/>").text("Use existing tags whenever possible."))
          .append(
            $("<li/>").text(
              "Some tags, such as “help” or “healthydebate”, have special posting guidelines."
            )
          )
      )
    );
  });
  //Close active
  $("#icon-close").click(function () {
    window.location.replace("/");
  });
  //Dropdown hashtag
  $(function () {
    var availableTags = [
      "#ActionScript",
      "#AppleScript",
      "#Asp",
      "#BASIC",
      "#C",
      "#C++",
      "#Clojure",
      "#COBOL",
      "#ColdFusion",
      "#Erlang",
      "#Fortran",
      "#Groovy",
      "#Haskell",
      "#Java",
      "#JavaScript",
      "#Lisp",
      "#Perl",
      "#PHP",
      "#Python",
      "#React",
      "#Ruby",
      "#Scala",
      "#Scheme",
    ];
    function split(val) {
      return val.split(/,\s*/);
    }
    function extractLast(term) {
      return split(term).pop();
    }

    $("#hashtag")
      // don't navigate away from the field on tab when selecting an item
      .on("keydown", function (event) {
        if (
          event.keyCode === $.ui.keyCode.TAB &&
          $(this).autocomplete("instance").menu.active
        ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function (request, response) {
          // delegate back to autocomplete, but extract the last term
          response(
            $.ui.autocomplete.filter(availableTags, extractLast(request.term))
          );
        },
        focus: function () {
          // prevent value inserted on focus
          return false;
        },
        select: function (event, ui) {
          var terms = split(this.value);
          // remove the current input
          terms.pop();
          if (terms.length >= 4) {
            alert("Solo puedes ingresar 4 tags");
          } else {
            // add the selected item
            terms.push(ui.item.value);
            // add placeholder to get the comma-and-space at the end
            terms.push("");
            this.value = terms.join(", ");
          }
          return false;
        },
      });
  });
});

function deleteHelpers() {
  while (help.hasChildNodes()) {
    help.removeChild(help.lastChild);
  }
}
