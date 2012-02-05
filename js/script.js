(function() {

  window.docompare = {};

  docompare.compare = function() {
    if (!docompare.checkcompare()) {
      return alert("You need to select at least two products");
    } else {
      return docompare.setvalues();
    }
  };

  docompare.setvalues = function() {
    var _this = this;
    docompare.removevalue();
    return $(".compare-check:checked").each(function(i, element) {
      return docompare.storevalue($(element).attr('id'));
    });
  };

  docompare.getcount = function(item) {
    if (typeof item === "object") {
      return item.length;
    } else {
      return $(item).length;
    }
  };

  docompare.setcomparebutton = function() {
    var $button;
    $button = $(".compare-button");
    if (docompare.getcount($(".compare-check:checked")) <= 1) {
      return $button.attr('disabled', true).off('click').addClass('compare-button-disabled');
    } else {
      return $button.attr('disabled', false).on('click').removeClass('compare-button-disabled');
    }
  };

  docompare.checkcompare = function() {
    if (docompare.getcount($(".compare-check:checked")) >= 2) {
      return true;
    } else {
      return false;
    }
  };

  docompare.setstorage = function() {
    if (!$("#hdItemIDs").length) {
      return docompare.setinput();
    } else {
      return $("#hdItemIDs");
    }
  };

  docompare.setinput = function() {
    var $input;
    if ($("#hdItemIDs").length <= 0) {
      $input = $("<input>");
      $input.attr({
        name: "hdItemIDs",
        id: "hdItemIDs",
        type: "hidden"
      });
      $('body').append($input);
      return $input;
    } else {
      return $("#hdItemIDs");
    }
  };

  docompare.storevalue = function(id) {
    var $input, c, content;
    $input = docompare.setinput();
    c = $input.val();
    content = c === "" ? id : $input.val() + "," + id;
    $input.val(content);
    return content;
  };

  docompare.removevalue = function($item) {
    $("#hdItemIDs").val('');
    if (typeof $item === "object") return $item.attr("checked", false);
  };

  $(".compare-check").live('click', function(event) {
    if ($(this).attr("checked") && getcount() > 4) {
      alert("Max items");
      $(this).attr("checked", false);
    } else {
      setvalues();
    }
    return docompare.setcomparebutton();
  });

  $(".compare-button").live('click', function(event) {
    return docompare.compare();
  });

  docompare.setcomparebutton();

  docompare.setstorage();

}).call(this);
