compare = ->
  if not checkcompare() then alert "You need to select at least two products"
  else setvalues()

setvalues = ->
  removevalue()
  $(".compare-check:checked").each (i, element) => storevalue($(element).attr('id'))

getcount = ->
  $(".compare-check:checked").length

setcomparebutton = ->
  $button = $(".compare-button")
  if getcount() <= 1 
    $button.attr('disabled', true)
    $button.off('click', compare).addClass('compare-button-disabled')
  else
    $button.attr('disabled', false)
    $button.on('click', compare).removeClass('compare-button-disabled')

checkcompare = ->
  if getcount() >= 2 then true else false

addinput = ->
  m = setinput()
  $('body').append(m)

setstorage = ->
  if not $("#hdItemIDs").length then addinput() else $("#hdItemIDs")

setinput = ->
  $input = $("<input>")
  $input.attr(
    name: "hdItemIDs"
    id: "hdItemIDs"
    type: "hidden"
  )

storevalue = (id) ->
  $input = $("#hdItemIDs")
  c = $input.val()
  content = if c == "" then id else $input.val() + "," + id
  $input.val(content);

removevalue = ->
  $("#hdItemIDs").val('')

alertitems = ($item) ->
  alert 'Max items'
  $item.attr("checked", false)

$(".compare-check").live 'click', (event) ->
  if $(this).attr("checked") && getcount() > 4 then alertitems($(this)) else setvalues()
  setcomparebutton()

$(".compare-button").live 'click', (event) ->
  compare()

setcomparebutton()
setstorage()