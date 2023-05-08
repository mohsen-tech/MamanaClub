var chars = '';
var specialChars = "اأإآدذرزژوؤء";
var arabicPunctuation = '';
specialChars += String.fromCharCode(0xFEFC,0xFEFB,0xFEF8,0xFEF7,0xFEFA,0xFEF9,0xFEF6,0xFEF5);
arabicPunctuation = String.fromCharCode(0x0609, 0x060A, 0x061B, 0x061E, 0x061F, 0x060C, 0x060D, 0x066A, 0x066B, 0x066C, 0x066D, 0x06D4);
function parsePersian2(input) {
	chars = input;
	var string = "";
	var toggleTag = false;
	for (i=0; i<input.length; i++) {
// 		if (input.charAt(i-1) == ">") {
// 			toggleTag = false;
// 		}
// 		if (input.charAt(i) == "<") {
// 			toggleTag = true;
// 		}
		if (toggleTag) {
			string += input.charAt(i);
		} else {
			string += getCharState(i);
		}
	}
	return string;
}
function getCharState(i) {
	var string;
	switch (chars.charAt(i)) {
		case "ا":
		string = setChar(i, String.fromCharCode(0xFE8D), String.fromCharCode(0xFE8D), String.fromCharCode(0xFE8E), String.fromCharCode(0xFE8E));
		break;
		case "أ":
		string = setChar(i, String.fromCharCode(0xFE83), String.fromCharCode(0xFE83), String.fromCharCode(0xFE84), String.fromCharCode(0xFE84));
		break;
		case "إ":
		string = setChar(i, String.fromCharCode(0xFE87), String.fromCharCode(0xFE87), String.fromCharCode(0xFE88), String.fromCharCode(0xFE88));
		break;
		case "آ":
		string = setChar(i, String.fromCharCode(0xFE81), String.fromCharCode(0xFE81), String.fromCharCode(0xFE82), String.fromCharCode(0xFE82));
		break;
		case "ب":
		string = setChar(i, String.fromCharCode(0xFE8F), String.fromCharCode(0xFE91), String.fromCharCode(0xFE92), String.fromCharCode(0xFE90));
		break;
		case "پ":
		string = setChar(i, String.fromCharCode(0xFB56), String.fromCharCode(0xFB58), String.fromCharCode(0xFB59), String.fromCharCode(0xFB57));
		break;
		case "ت":
		string = setChar(i, String.fromCharCode(0xFE95), String.fromCharCode(0xFE97), String.fromCharCode(0xFE98), String.fromCharCode(0xFE96));
		break;
		case "ث":
		string = setChar(i, String.fromCharCode(0xFE99), String.fromCharCode(0xFE9B), String.fromCharCode(0xFE9C), String.fromCharCode(0xFE9A));
		break;
		case "ج":
		string = setChar(i, String.fromCharCode(0xFE9D), String.fromCharCode(0xFE9F), String.fromCharCode(0xFEA0), String.fromCharCode(0xFE9E));
		break;
		case "چ":
		string = setChar(i, String.fromCharCode(0xFB7A), String.fromCharCode(0xFB7C), String.fromCharCode(0xFB7D), String.fromCharCode(0xFB7B));
		break;
		case "ح":
		string = setChar(i, String.fromCharCode(0xFEA1), String.fromCharCode(0xFEA3), String.fromCharCode(0xFEA4), String.fromCharCode(0xFEA2));
		break;
		case "خ":
		string = setChar(i, String.fromCharCode(0xFEA5), String.fromCharCode(0xFEA7), String.fromCharCode(0xFEA8), String.fromCharCode(0xFEA6));
		break;
		case "د":
		string = setChar(i, String.fromCharCode(0xFEA9), String.fromCharCode(0xFEA9), String.fromCharCode(0xFEAA), String.fromCharCode(0xFEAA));
		break;
		case "ذ":
		string = setChar(i, String.fromCharCode(0xFEAB), String.fromCharCode(0xFEAB), String.fromCharCode(0xFEAC), String.fromCharCode(0xFEAC));
		break;
		case "ر":
		string = setChar(i, String.fromCharCode(0xFEAD), String.fromCharCode(0xFEAD), String.fromCharCode(0xFEAE), String.fromCharCode(0xFEAE));
		break;
		case "ز":
		string = setChar(i, String.fromCharCode(0xFEAF), String.fromCharCode(0xFEAF), String.fromCharCode(0xFEB0), String.fromCharCode(0xFEB0));
		break;
		case "ژ":
		string = setChar(i, String.fromCharCode(0xFB8A), String.fromCharCode(0xFB8A), String.fromCharCode(0xFB8B), String.fromCharCode(0xFB8B));
		break;
		case "س":
		string = setChar(i, String.fromCharCode(0xFEB1), String.fromCharCode(0xFEB3), String.fromCharCode(0xFEB4), String.fromCharCode(0xFEB2));
		break;
		case "ش":
		string = setChar(i, String.fromCharCode(0xFEB5), String.fromCharCode(0xFEB7), String.fromCharCode(0xFEB8), String.fromCharCode(0xFEB6));
		break;
		case "ص":
		string = setChar(i, String.fromCharCode(0xFEB9), String.fromCharCode(0xFEBB), String.fromCharCode(0xFEBC), String.fromCharCode(0xFEBA));
		break;
		case "ض":
		string = setChar(i, String.fromCharCode(0xFEBD), String.fromCharCode(0xFEBF), String.fromCharCode(0xFEC0), String.fromCharCode(0xFEBE));
		break;
		case "ط":
		string = setChar(i, String.fromCharCode(0xFEC1), String.fromCharCode(0xFEC3), String.fromCharCode(0xFEC4), String.fromCharCode(0xFEC2));
		break;
		case "ظ":
		string = setChar(i, String.fromCharCode(0xFEC5), String.fromCharCode(0xFEC7), String.fromCharCode(0xFEC8), String.fromCharCode(0xFEC6));
		break;
		case "ع":
		string = setChar(i, String.fromCharCode(0xFEC9), String.fromCharCode(0xFECB), String.fromCharCode(0xFECC), String.fromCharCode(0xFECA));
		break;
		case "غ":
		string = setChar(i, String.fromCharCode(0xFECD), String.fromCharCode(0xFECF), String.fromCharCode(0xFED0), String.fromCharCode(0xFECE));
		break;
		case "ف":
		string = setChar(i, String.fromCharCode(0xFED1), String.fromCharCode(0xFED3), String.fromCharCode(0xFED4), String.fromCharCode(0xFED2));
		break;
		case "ق":
		string = setChar(i, String.fromCharCode(0xFED5), String.fromCharCode(0xFED7), String.fromCharCode(0xFED8), String.fromCharCode(0xFED6));
		break;
		case "ك":
		string = setChar(i, String.fromCharCode(0xFED9), String.fromCharCode(0xFEDB), String.fromCharCode(0xFEDC), String.fromCharCode(0xFEDA));
		break;
		case "ک":
		string = setChar(i, String.fromCharCode(0xFB8E), String.fromCharCode(0xFB90), String.fromCharCode(0xFB91), String.fromCharCode(0xFB8F));
		break;
		case "گ":
		string = setChar(i, String.fromCharCode(0xFB92), String.fromCharCode(0xFB94), String.fromCharCode(0xFB95), String.fromCharCode(0xFB93));
		break;
		case "ل":
		string = setChar(i, String.fromCharCode(0xFEDD), String.fromCharCode(0xFEDF), String.fromCharCode(0xFEE0), String.fromCharCode(0xFEDE));
		break;
		case "م":
		string = setChar(i, String.fromCharCode(0xFEE1), String.fromCharCode(0xFEE3), String.fromCharCode(0xFEE4), String.fromCharCode(0xFEE2));
		break;
		case "ن":
		string = setChar(i, String.fromCharCode(0xFEE5), String.fromCharCode(0xFEE7), String.fromCharCode(0xFEE8), String.fromCharCode(0xFEE6));
		break;
		case "ه":
		string = setChar(i, String.fromCharCode(0xFEE9), String.fromCharCode(0xFEEB), String.fromCharCode(0xFEEC), String.fromCharCode(0xFEEA));
		break;
		case "ة":
		string = setChar(i, String.fromCharCode(0xFE93), "", "", String.fromCharCode(0xFE94));
		break;
		case "و":
		string = setChar(i, String.fromCharCode(0xFEED), String.fromCharCode(0xFEED), String.fromCharCode(0xFEEE), String.fromCharCode(0xFEEE));
		break;
		case "ؤ":
		string = setChar(i, String.fromCharCode(0xFE85), String.fromCharCode(0xFE85), String.fromCharCode(0xFE86), String.fromCharCode(0xFE86));
		break;
		case "ى":
		string = setChar(i, String.fromCharCode(0xFEEF), String.fromCharCode(0xFEEF), String.fromCharCode(0xFEF0), String.fromCharCode(0xFEF0));
		break;
		case "ي":
		string = setChar(i, String.fromCharCode(0xFEF1), String.fromCharCode(0xFEF3), String.fromCharCode(0xFEF4), String.fromCharCode(0xFEF2));
		break;
		case "ئ":
		string = setChar(i, String.fromCharCode(0xFE89), String.fromCharCode(0xFE8B), String.fromCharCode(0xFE8C), String.fromCharCode(0xFE8A));
		break;
		case "ی":
		string = setChar(i, String.fromCharCode(0xFBFC), String.fromCharCode(0xFBFE), String.fromCharCode(0xFBFF), String.fromCharCode(0xFBFD));
		break;
		case "ء":
		string = String.fromCharCode(0xFE80);
		break;
 
		default:
		string = chars.charAt(i);
		break;
	}
	return string;
}
function setChar(i, solo, begin, middle, end) {
	var string = "";
	// detect lam-alef (ﻻ) cases
	if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "ا") {
		if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
			string = String.fromCharCode(0xFEFC);
		} else {
			string = String.fromCharCode(0xFEFB);
		}
		chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
	} else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "أ") {
		if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
			string = String.fromCharCode(0xFEF8);
		} else {
			string = String.fromCharCode(0xFEF7);
		}
		chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
	} else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "إ") {
		if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
			string = String.fromCharCode(0xFEFA);
		} else {
			string = String.fromCharCode(0xFEF9);
		}
		chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
	} else if (chars.charAt(i) == "ل" && chars.charAt(i+1) == "آ") {
		if (validateArabicChar(i-1) && specialChars.indexOf(chars.charAt(i-1)) == -1) {
			string = String.fromCharCode(0xFEF6);
		} else {
			string = String.fromCharCode(0xFEF5);
		}
		chars = chars.substring(0, i)+string+chars.substring(i+2, chars.length);
	} else {
		// check for arabic character position in word (solo, begin, middle, end)
		if (i == 0) {
			if (specialChars.indexOf(chars.charAt(i)) != -1 || !validateArabicChar(i+1)) {
				string = solo;
			} else {
				string = begin;
			}
		} else if (i == chars.length-1) {
			if (specialChars.indexOf(chars.charAt(i-1)) != -1 || !validateArabicChar(i-1)) {
				string = solo;
			} else {
				string = end;
			}
		} else if (validateArabicChar(i-1) && validateArabicChar(i+1)) {
			if (specialChars.indexOf(chars.charAt(i-1)) != -1) {
				if (specialChars.indexOf(chars.charAt(i)) != -1) {
					string = solo;
				} else {
					string = begin;
				}
			} else {
				if (specialChars.indexOf(chars.charAt(i)) != -1 || chars.charAt(i+1) == "ء" || chars.charAt(i) == "ة") {
					if (chars.charAt(i-1) != "ة") {
						string = end;
					} else {
						string = begin;
					}
				} else {
					if (chars.charAt(i-1) != "ة") {
						string = middle;
					} else {
						string = begin;
					}
				}
			}
		} else {
			if (validateArabicChar(i-1) && !validateArabicChar(i+1)) {
				if (specialChars.indexOf(chars.charAt(i-1)) != -1) {
					string = solo;
				} else {
					string = end;
				}
			} else if (!validateArabicChar(i-1) && validateArabicChar(i+1)) {
				if (specialChars.indexOf(chars.charAt(i)) != -1) {
					string = solo;
				} else {
					string = begin;
				}
			} else if (!validateArabicChar(i-1) && !validateArabicChar(i+1)) {
				string = solo;
			}
		}
	}
	return string;
}
function validateArabicChar(i) {
	var valid = false;
	if (i>=0 && i<chars.length) {
		var code = chars.charCodeAt(i);
		// arabic unicode Form-A range from 0x0600 to 0x06FF (1536 - 1791) (64336-64511)
		// arabic unicode Form-B range from 0xFE70 to 0xFEFF (65136 - 65279)
		if (code >= 1536 && code <= 1791 ||  code >= 65136 && code <= 65279 || code >= 64336 && code<=64511) 
		{
			valid = true;
		}
	}
	return valid;
}

function ppt2(v)
{
	return parsePersian(v);
}