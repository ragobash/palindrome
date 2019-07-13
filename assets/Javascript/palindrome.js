$(document).ready(function() {

    $("#check-btn").on("click", checkWord);

    function checkWord() {
        var word = $("#inputWord");
        var result = $("#result");

        if(isPalindrome(word.val())) {
            result.text("Palindrome!")
        } else {
            result.text("Not a Palindrome!");
        }

        word.val("");
    }

    function isPalindrome(string) {
        string = string.toLocaleLowerCase().replace(/\s/g, '');
        return Array.from(string).toString() === Array.from(string).reverse().toString();
    }
});
