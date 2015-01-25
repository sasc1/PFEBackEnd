/**
 * Created by sasc on 22.10.14.
 */
module.exports.decode = function (to_dec) {
    var encrypted_token = "";
    var xor_key = 6;

    // must start at i=1, because first char is "/" (this one is added through ng-route) and the second char is the encrypted "/"
    for (var i = 1; i < to_dec.length; ++i) {
        var char = to_dec.charAt(i);
        var charCode = to_dec.charCodeAt(i);
        var dec_char = String.fromCharCode(charCode - 2);

        // handle special characters
        if (char == " " || char == "#" || char == "|" || char == "y")
            encrypted_token += char;
        else
            encrypted_token += dec_char;

    }
    return encrypted_token;
};