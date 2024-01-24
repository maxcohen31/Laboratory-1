/*
    Ricerca binaria 
*/


function binary_search(arr, target)
{
    let position = -1;
    // array start
    let start = 0;
    // array end
    let end = arr.length - 1;


    while(start <= end)
    {   
        // get middle element
        let mid = start + ((end - start) / 2);

        if(arr[mid] === target)
        {
            return mid;
        }
        // If target is in the right of our mid then increase left pointer
        if(arr[mid] < target)
        {
            start = mid + 1;
        }

        // If target is in the left of our mid then decrease right pointer
        if(arr[mid] > target)
        {
            end = mid - 1;
        }
    }
    return position;
}

let x = [4, 5, 6, 12, 23, 55, 79];
console.log(binary_search(x, 23));
