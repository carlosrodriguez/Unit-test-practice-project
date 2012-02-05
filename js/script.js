(function() {
  var addinput, alertitems, checkcompare, compare, getcount, removevalue, setcomparebutton, setinput, setstorage, setvalues, storevalue;

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

  addinput = function() {
    var m;
    m = setinput();
    return $('body').append(m);
  };

  setstorage = function() {
    if (!$("#hdItemIDs").length) {
      return addinput();
    } else {
      return $("#hdItemIDs");
    }
  };

  setinput = function() {
    var $input;
    $input = $("<input>");
    return $input.attr({
      name: "hdItemIDs",
      id: "hdItemIDs",
      type: "hidden"
    });
  };

  storevalue = function(id) {
    var $input, c, content;
    $input = $("#hdItemIDs");
    c = $input.val();
    content = c === "" ? id : $input.val() + "," + id;
    return $input.val(content);
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

}).call(this);
