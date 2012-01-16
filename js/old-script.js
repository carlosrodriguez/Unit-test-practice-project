var compareno = new Array;
var comparecount = 0;

function selectCompare(comparePartID) {
	var partItemID = comparePartID.id;
	
    if (comparePartID.checked) {
        if (comparecount >= 4) {
            alert('Maximum of 4 comparison parts');
        } else {
            compareno[comparecount] = partItemID;
            comparecount++;
        }
    } else {
        for (var i = 0; i < comparecount; i++) {
            if (compareno[i] == partItemID) {
                for (var j = i; j < comparecount - 1; j++) {
                    compareno[j] = compareno[j + 1];
                }
                comparecount--;
                i = comparecount;
            }
        }
    }
    var cmstr = '';
    for (var i = 0; i < comparecount; i++) {
        if (i != 0) { cmstr += ';'; }
        cmstr += compareno[i];
    }

    document.getElementById('txtCompareList').value = cmstr;
}