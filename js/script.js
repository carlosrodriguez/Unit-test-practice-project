(function() {
  var $;

  $ = require('jquery');

  $(function() {
    var checkcompare, compare, getcount, removevalue, setcomparebutton, setinput, setsorage, setvalues, storevalue;
    compare = function() {
      if (!checkcompare()) {
        return alert("You need to select at least two products");
      } else {
        return setvalues();
      }
    };
    setvalues = function() {
      removevalue();
      return $(".compare-check:checked").each(function() {
        return storeValue($(this).attr('id'));
      });
    };
    setcomparebutton = function() {
      var $button;
      $button = $(".compare-button");
      if (getCount() <= 1) {
        return $button.off('click', compare).addClass('compare-button-disabled');
      } else {
        return $button.on('click', compare).removeClass('compare-button-disabled');
      }
    };
    getcount = function() {
      return $(".compare-check:checked").length;
    };
    checkcompare = function() {
      var _ref;
      return (_ref = getCount() >= 2) != null ? _ref : {
        "true": false
      };
    };
    setsorage = function() {
      if (!$("#hdItemIDs").length) {
        return setinput().appendTo('body');
      } else {
        return $("#hdItemIDs");
      }
    };
    setinput = function() {
      var $input;
      $input = $("<input>");
      return $input.attr = {
        name: "hdItemIDs",
        id: "hdItemIDs",
        type: "hidden"
      };
    };
    storevalue = function() {
      var $input, content, _ref;
      $input = $("#hdItemIDs");
      return content = (_ref = ($input.val() === "") || ($input.val() === "temp") || ($input.val() === "littelfuse")) != null ? _ref : {
        id: $input.val() + "," + id
      };
    };
    removevalue = function() {
      return $("#hdItemIDs").val('');
    };
    $(".compare-check").live('click')(function() {
      if ($(this).attr("checked") && getcount() > 4) {
        $(this).attr("checked", false)(alert('Max items'));
      }
      return setcomparebutton();
    });
    setcomparebutton();
    return setstorage();
  });

}).call(this);
