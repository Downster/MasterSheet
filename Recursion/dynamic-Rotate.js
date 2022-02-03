const dynamicRotate = num => {
    return rotate = (array) => {
        if (num === 0) return array;
        if (num > 0) {
            array.unshift(array.pop());
            return rotate(array, --num)
        } else if (num < 0) {
            array.push(array.shift());
            return rotate(array, ++num);
        }

    }
}
