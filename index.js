/**
 * To throw error in case of invalid datatype.
 *
 * @returns TypeError
 */
function _throw() {
    throw new TypeError("Must be a valid array!");
}

/**
 * To check if arr is array.
 *
 * @param array arr
 * @returns bool | TypeError
 */
function is_array(arr) {
    return Array.isArray(arr) ? true : _throw();
}

/**
 * To check if array of numbers.
 *
 * @param array arr
 * @returns bool | TypeError
 */
function is_num_array(arr) {
    var a = arr.reduce(function (result, val) {
        return result && typeof val === "number";
    }, true);
    if (a == false) {
        throw new TypeError("Must be an array of numbers!");
    }
}

/**
 * To get the head or first element of the array.
 *
 * @param array arr
 * @returns any
 */
function head(arr) {
    is_array(arr);
    return arr[0];
}

/**
 * To get the tail last element of the array.
 *
 * @param array arr
 * @returns any
 */
function tail(arr) {
    is_array(arr);
    let element = arr.pop();
    arr.push(element);
    return element;
}

/**
 * To check the existence of an element inside the array.
 *
 * @param array arr
 * @param any value
 * @returns any
 */
function in_array(arr, value) {
    is_array(arr);
    return arr.includes(value);
}

/**
 * To split arrays into fixed size chunks.
 *
 * @param array arr
 * @param number chunk_size
 * @returns any
 */
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

/**
 * To filter out arrays by removing nullish values.
 *
 * @param array arr
 * @returns array
 */
function array_filter(arr) {
    is_array(arr);
    arr = arr.filter((e) => {
        return e === 0 || e;
    });
    return arr;
}

/**
 * To get the frequency of occurence of each unique element inside the array.
 *
 * @param array arr
 * @returns array
 */
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

/**
 * To convert Objects into Arrays.
 *
 * @param object obj
 * @returns array
 */
function object_to_array(obj) {
    let temp = [];
    const entries = Object.entries(obj);
    entries.forEach((ent) => temp.push(ent[1]));
    return temp;
}

/**
 * To get indexes of all occurences of an element inside an array.
 *
 * @param array arr
 * @param any val
 * @returns array
 */
function get_all_indexes(arr, val) {
    is_array(arr);
    var indexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            indexes.push(i);
        }
    }
    return indexes;
}

/**
 * To check if a substr exists within an array of strings
 *
 * @param string query
 * @param array arr
 * @returns array
 */
function search_in_array(query, arr) {
    is_array(arr);
    return arr.filter((item) => item.toLowerCase().search(query.toLowerCase()) !== -1);
}

/**
 * Get sum of array
 *
 * @param array arr
 * @returns number
 */
function array_sum(arr) {
    is_array(arr);
    return arr.reduce((prev, curr) => (isNaN(curr) ? 0 : prev + curr), 0);
}

/**
 *  Get sum of a subarray
 *
 * @param array arr
 * @param number slice_start
 * @param number slice_end
 * @param bool includes
 * @returns number | TypeError
 */
function array_slice_sum(arr, slice_start = 0, slice_end = arr.length, includes = true) {
    is_array(arr);
    if (
        Number.isInteger(slice_start) &&
        Number.isInteger(slice_end) &&
        typeof includes === "boolean"
    ) {
        if (includes) {
            return array_sum(arr.slice(slice_start, slice_end + 1));
        } else {
            return array_sum(arr.slice(slice_start, slice_end));
        }
    } else {
        throw new TypeError("Input parameters not valid!");
    }
}

/**
 * To sort numeric arrays ascending and descending
 *
 * @param array arr
 * @param bool reverse
 * @returns array
 */
function sort_nums(arr, reverse = false) {
    is_array(arr);
    is_num_array(arr);
    if (reverse) {
        return arr.sort(function (a, b) {
            return b - a;
        });
    } else {
        return arr.sort(function (a, b) {
            return a - b;
        });
    }
}

/**
 * Deep copy of array
 *
 * @param array arr
 * @returns array
 */
const array_copy = (arr) => arr.map(item => Array.isArray(item) ? array_copy(item) : item);

export {
    is_array,
    is_num_array,
    head,
    tail,
    in_array,
    array_chunk,
    array_filter,
    array_frequency,
    object_to_array,
    get_all_indexes,
    search_in_array,
    array_sum,
    array_slice_sum,
    sort_nums,
    array_copy,
};
