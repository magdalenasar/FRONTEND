// XmlHttpRequest nu noemt-> JSON
// XHRequest  - iets te maken met API(endpoint)

/*
Alles wat online is is request
Zie in browser bij Network => ff: refresh zonder cash
*/
//oldschool:
const apiCall = new XMLHttpRequest();
apiCall.open(
  "GET",
  "https://www.thecpctaildb.com/api/json/v1/1/randon.php",
  true
);
apiCall.send();

apiCall.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    // Typical action to be performed when the document is ready:
    printOutput(apiCall.responseText);
  }
};

function printOutput(str) {
  console.log(str);
}

//new: fetch-api
