//To throw error in case of invalid datatype.
function _throw() {
    throw new TypeError("Must be a valid array!");
}

//To check if arr is array.
function is_array(arr) {
    return Array.isArray(arr) ? true : _throw();
}

//To get the head or first element of the array.
function head(arr) {
    is_array(arr);
    return arr[0];
}

//To get the tail last element of the array.
function tail(arr) {
    is_array(arr);
    let element = arr.pop();
    arr.push(element);
    return element;
}

//To check the existence of an element inside the array.
function in_array(arr, value) {
    is_array(arr);
    return arr.includes(value);
}

//To split arrays into fixed size chunks.
function array_chunk(arr, chunk_size) {
    is_array(arr);
    if (typeof chunk_size != "number") {
        throw new TypeError("chunk_size should be a integer!");
    }

    let length = arr.length;
    chunk_size = Math.abs(Math.round(chunk_size));

    if (chunk_size > length || [0, null, NaN].includes(chunk_size)) {
        return arr;
    } else {
        let modified_array = [];
        for (let index = 0; index < length; index += chunk_size) {
            modified_array.push(arr.slice(index, index + chunk_size));
        }
        arr = modified_array;
        return arr;
    }
}

//To filter out arrays based on datatypes.
function array_filter(arr) {
    is_array(arr);
    arr = arr.filter((e) => {
        return e === 0 || e;
    });
    return arr;
}

//To get the frequency of occurence of each unique element inside the array.
function array_frequency(arr) {
    is_array(arr);
    let freq_obj = {};
    arr.forEach((value) => {
        if (value in freq_obj) {
            freq_obj[value] += 1;
        } else {
            freq_obj[value] = 1;
        }
    });
    return freq_obj;
}

//To convert Objects into Arrays.
function object_to_array(obj) {
    let temp = [];
    const entries = Object.entries(obj);
    entries.forEach((ent) => temp.push(ent[1]));
    return temp;
}

//To get indexes of all occurences of an element inside an array.
function get_all_indexes(arr, val) {
    is_array(arr);
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

export {
    head,
    tail,
    is_array,
    in_array,
    array_chunk,
    array_filter,
    array_frequency,
    object_to_array,
    get_all_indexes,
};
