var table = GetValueFromUser("table");            // Unit of table
// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = GetTableContent(table);

function GetValueFromUser(valueType) {
  var greetingMessage = "Enter the number you want to multiply by";
  
  return prompt(greetingMessage);
}

function GetTableContent(table) {
  var i = 1;                 // Set counter to 1
  var msg = '<h2>Multiplication Table</h2>';              // Message  
{
    // Do multiplication
    while (i < 10) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
      i++;
    }
  }
  return msg;
}
