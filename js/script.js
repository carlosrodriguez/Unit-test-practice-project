
  var alertitems, checkcompare, compare, getcount, removevalue, setcomparebutton, setinput, setstorage, setvalues, storevalue;

  compare = function() {
    if (!checkcompare()) {
      return alert("You need to select at least two products");
    } else {
      return setvalues();
    }
  };

  setvalues = function() {
    var _this = this;
    removevalue();
    return $(".compare-check:checked").each(function(i, element) {
      return storevalue($(element).attr('id'));
    });
  };

  getcount = function(item) {
    if (typeof item === "object") {
      return item.length;
    } else {
      return $(item).length;
    }
  };

  setcomparebutton = function() {
    var $button;
    $button = $(".compare-button");
    if (getcount($(".compare-check:checked")) <= 1) {
      $button.attr('disabled', true);
      return $button.off('click', compare).addClass('compare-button-disabled');
    } else {
      $button.attr('disabled', false);
      return $button.on('click', compare).removeClass('compare-button-disabled');
    }
  };

  checkcompare = function() {
    if (getcount($(".compare-check:checked")) >= 2) {
      return true;
    } else {
      return false;
    }
  };

  setstorage = function() {
    if (!$("#hdItemIDs").length) {
      return setinput();
    } else {
      return $("#hdItemIDs");
    }
  };

  setinput = function() {
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

  storevalue = function(id) {
    var $input, c, content;
    $input = setinput();
    c = $input.val();
    content = c === "" ? id : $input.val() + "," + id;
    $input.val(content);
    return content;
  };

  removevalue = function() {
    return $("#hdItemIDs").val('');
  };

  alertitems = function($item) {
    alert('Max items');
    return $item.attr("checked", false);
  };

  $(".compare-check").live('click', function(event) {
    if ($(this).attr("checked") && getcount() > 4) {
      alertitems($(this));
    } else {
      setvalues();
    }
    return setcomparebutton();
  });

  $(".compare-button").live('click', function(event) {
    return compare();
  });

  setcomparebutton();

  setstorage();


