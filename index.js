function _throw() {
    throw new TypeError("Must be a valid array!");
}

function is_array(arr) {
    return Array.isArray(arr) ? true : _throw();
}

function head(arr) {
    is_array(arr);
    return arr[0];
}

function tail(arr) {
    is_array(arr);
    let element = arr.pop();
    arr.push(element);
    return element;
}

function in_array(arr, value) {
    is_array(arr);
    return arr.includes(value);
}

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

function array_filter(arr) {
    is_array(arr);
    arr = arr.filter((e) => {
        return e === 0 || e;
    });
    return arr;
}

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

function object_to_array(obj) {
    let temp = [];
    const entries = Object.entries(obj);
    entries.forEach((ent) => temp.push(ent[1]));
    return temp;
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
};
