isPalindrome = (string) => {
    string = string.toLocaleLowerCase();
    return Array.from(string).toString() === Array.from(string).reverse().toString()
}

isPalindrome = (string) => {
    let strLen = string.length;
    string = string.toLocaleLowerCase();

    if (strLen === 0 || strLen === 1) {
        return true;
    }
    if (string[0] === string[strLen - 1]) {
        return isPalindrome(string.slice(1, strLen - 1));
    }
    return false;
};

isPalindrome = (string) => {
    let strLen = Math.floor(string.length / 2);
    string = string.toLocaleLowerCase();

    for (let i = 0; i < strLen; i++) {
        if (string[i] !== string[strLen - i - 1]) {
            return false;
        }
    }
    return true;
}
