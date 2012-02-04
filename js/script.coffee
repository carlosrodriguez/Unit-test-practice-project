setcomparebutton()
setstorage()

$(".compare-check").live('click') ->
  if $(this).attr("checked") && getcount() > 4 then $(this).attr("checked", false) alert 'Max items'
  setcomparebutton()

compare = ->
  if not checkcompare() then alert "You need to select at least two products"
  else setvalues()

setvalues = ->
  removevalue()
  $(".compare-check:checked").each -> storeValue($(this).attr('id'))

setcomparebutton = ->
  $button = $(".compare-button")
  if getCount() <= 1 then $button.off('click', compare).addClass('compare-button-disabled') else $button.on('click', compare).removeClass('compare-button-disabled')

getcount = ->
  $(".compare-check:checked").length

checkcompare = ->
  (getCount() >= 2) ? true : false

setsorage = ->
  if not $("#hdItemIDs").length then  setinput().appendTo('body') else $("#hdItemIDs")

setinput = ->
  $input = $("<input>")
  $input.attr =
    name: "hdItemIDs"
    id: "hdItemIDs"
    type: "hidden"

storevalue = ->
  $input = $("#hdItemIDs")
  content = (($input.val() == "") || ($input.val() == "temp") || ($input.val() == "littelfuse")) ? id : $input.val() + "," + id

removevalue = ->
  $("#hdItemIDs").val('')