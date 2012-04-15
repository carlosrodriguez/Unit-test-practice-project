doSearch = do (doSearch) ->
  statesNameCodes = [
      { state: "alaska", abbr: "AK" },
      { state: "alabama", abbr: "AL" },
      { state: "arkansas", abbr: "AR" },
      { state: "arizona", abbr: "AZ" },
      { state: "california", abbr: "CA" },
      { state: "colorado", abbr: "CO" },
      { state: "connecticut", abbr: "CT" },
      { state: "district of columbia", abbr: "DC" },
      { state: "delaware", abbr: "DE" },
      { state: "florida", abbr: "FL"},
      { state: "georgia", abbr: "GA"},
      { state: "hawaii", abbr: "HI"},
      { state: "iowa", abbr: "IA"},
      { state: "idaho", abbr: "ID"},
      { state: "illinois", abbr: "IL"},
      { state: "indiana", abbr: "IN"},
      { state: "kansas", abbr: "KS"},
      { state: "kentucky", abbr: "KY"},
      { state: "lousiana", abbr: "LA"},
      { state: "massachusetts", abbr: "MA"},
      { state: "maryland", abbr: "MD"},
      { state: "maine", abbr: "ME"},
      { state: "michigan", abbr: "MI"},
      { state: "minnesota", abbr: "MN"},
      { state: "missouri", abbr: "MO"},
      { state: "mississippi", abbr: "MS"},
      { state: "montana", abbr: "MT"},
      { state: "north carolina", abbr: "NC"},
      { state: "north dakote", abbr: "ND"},
      { state: "nebraska", abbr: "NE"},
      { state: "new hampshire", abbr: "NH"},
      { state: "new jersey", abbr: "NJ"},
      { state: "new mexico", abbr: "NM"},
      { state: "nevada", abbr: "NV"},
      { state: "new york", abbr: "NY"},
      { state: "ohio", abbr: "OH"},
      { state: "oklahoma", abbr: "OK"},
      { state: "oergon", abbr: "OR"},
      { state: "pennsylvania", abbr: "PA"},
      { state: "rhode island", abbr: "RI"},
      { state: "south carolina", abbr: "SC"},
      { state: "south dakota", abbr: "SD"},
      { state: "tennessee", abbr: "TN"},
      { state: "texas", abbr: "TX"},
      { state: "utah", abbr: "UT"},
      { state: "virgina", abbr: "VA"},
      { state: "vermont", abbr: "VT"},
      { state: "washington", abbr: "WA"},
      { state: "wisoncsin", abbr: "WI"},
      { state: "west virginia", abbr: "WV"},
      { state: "wyoming", abbr: "WY"}
  ]

  stateNames = _.pluck(statesNameCodes, 'state')
  stateCodes = _.pluck(statesNameCodes, 'abbr')

  doSearch = doSearch || {}

  doSearch.setService = (data) ->
      searchTerms = prepareData(data)
      check = _.find(searchTerms, (i) -> checkNumber(i))
      if(check) then "testingZip.aspx?zip="+check
      else
        check = _.find(searchTerms, (i) -> checkState(i))
        if(check) then "testingState.aspx?state="+check
        else "error"

  divideString = (data, separator) ->
      if data.indexOf(separator) != -1
          searchTerm = data.split(separator)
      else 
          searchTerm = [data];
          
  clearSpaces = (data) ->
      $.trim(data.replace(/,/g, "")); 
      

  prepareData = (data) ->
      searchTerm = divideString(data," ")
      searchTerm.map (i) ->
          clearSpaces(i);

  checkNumber = (data) ->
      !isNaN(parseFloat(data)) && isFinite(data);

  checkState = (data) ->
      if _.indexOf(stateCodes, data.toUpperCase()) != -1
          true
      else if _.indexOf(stateNames, data.toLowerCase()) != -1
          true
      else
          false

  doSearch.exposeTest = ->
    test = {}
    test.divideString = divideString
    test.clearSpaces = clearSpaces
    test.prepareData = prepareData
    test.checkNumber = checkNumber
    test.checkState = checkState
    test

  doSearch
