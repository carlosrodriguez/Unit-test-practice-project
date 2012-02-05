window.docompare = {}
docompare.compare = ->
  if not docompare.checkcompare() then alert "You need to select at least two products"
  else docompare.setvalues()

docompare.setvalues = ->
  docompare.removevalue()
  $(".compare-check:checked").each (i, element) => docompare.storevalue($(element).attr('id'))

docompare.getcount = (item) ->
  if typeof item == "object" then item.length else $(item).length

docompare.setcomparebutton = ->
  $button = $(".compare-button")
  if docompare.getcount($(".compare-check:checked")) <= 1
    $button.attr('disabled', true).off('click').addClass('compare-button-disabled')
  else
    $button.attr('disabled', false).on('click').removeClass('compare-button-disabled')

docompare.checkcompare = ->
  if docompare.getcount($(".compare-check:checked")) >= 2 then true else false

docompare.setstorage = ->
  if not $("#hdItemIDs").length then docompare.setinput() else $("#hdItemIDs")

docompare.setinput = ->
  if $("#hdItemIDs").length <= 0
    $input = $("<input>")
    $input.attr(
      name: "hdItemIDs"
      id: "hdItemIDs"
      type: "hidden"
    )
    $('body').append($input)
    $input
  else
    $("#hdItemIDs")

docompare.storevalue = (id) ->
  $input = docompare.setinput()
  c = $input.val()
  content = 
    if c == "" then id else $input.val() + "," + id
  $input.val(content)
  content

docompare.removevalue = ($item) ->
  $("#hdItemIDs").val('')
  if typeof $item == "object" then $item.attr("checked", false)

$(".compare-check").live 'click', (event) ->
  if $(this).attr("checked") && getcount() > 4
    alert("Max items");
    $(this).attr("checked", false)
  else 
    setvalues()
  docompare.setcomparebutton()

$(".compare-button").live 'click', (event) ->
  docompare.compare()

docompare.setcomparebutton()
docompare.setstorage()