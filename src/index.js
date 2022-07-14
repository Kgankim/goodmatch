 
function add() {
	inputText = document.getElementById("str1").value + " Matches " + document.getElementById("str2").value;
	alert(inputText);
	captureLetter();
    
};
//.........................................................
function captureLetter() {
	var count = 0;
    var icount = 0;
	var str = inputText;
    str = str.replace(/\s+/g, '');
	var firstChar = str[0];// get 1st character
//..........................................................	
	num = str.split(firstChar).length -1; // how many times it appears
    alert(firstChar); //show 1st character
    alert(num); //  
//..................................................................
    //create a loop through other characters
    for (icount = 0; icount < str.length; icount++)
    {
        let otherChar = str.charAt(icount); //write the string
        numOther = parseInt (str.split(otherChar).length -1);
                       
        // Add them together and display
        
        
        document.write(numOther); //number of times
        
     }; 
 };	

//.................................................................
//reading CSV
function csvread() {
    
    
        var file = document.querySelector('#myFile').files[0];
        var reader = new FileReader();
        reader.readAsText(file);
      
           
        //When the file finish load
        reader.onload = function(event) {
      
          //get the file.
          var csv = event.target.result;
      
          //split and get the rows in an array
          var rows = csv.split('\n');
      
          //move line by line
          for (var i = 1; i < rows.length; i++) {
            //split by separator (,) and get the columns
            cols = rows[i].split(',');
      
            //move column by column
            for (var j = 0; j < cols.length; j++) {
              /*the value of the current column.
              Do whatever you want with the value*/
              var value = cols[j];
              
            }
            
          }
        }
      };
//..................................................................
function validatetext() {
    var e = event || window.event;  // get event object
    var key = e.keyCode || e.which; // get key cross-browser
    if (key < 65 || key > 90) { //if it is not a alphabet ascii code
       alert("No numbers allowed, Type Only alphabets");
		//Prevent default action, which is inserting numbers
        if (e.preventDefault) e.preventDefault(); //normal browsers
        e.returnValue = false; //IE
    }
}
//.....................................................................
