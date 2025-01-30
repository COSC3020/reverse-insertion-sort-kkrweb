// Kane Kriz
// UWYO COSC 3020
// 30 January 2025

function insertionSortReverse(array) 
{
  for(var i = array.length-1; i > 0; i--) 
  {
    var val = array[i];
    var j;
      
    for(j = i; j < array.length-1 && arr[j+1] < val; j++) 
    {
      array[j] = array[j+1];
    }
      
    array[j] = val;
  }
  return array;
}
