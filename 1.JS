function describeValue(value) {
 if (value === String) {
   return "string | truthy";
 }else if (value === Number) {
   return "number | truthy";
 }
 else if (value === 0) {
   return "number | falsy";
 }
 else if (value === "") {
   return "string | falsy";
 }    
 else if (value === Boolean) {  
   return "boolean | truthy";
}

else if (value === null) {
   return "string | falsy";

}
else if (value === undefined) {
   return "undefined | falsy";
}
}
