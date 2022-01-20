// Note: this snippet only works in the browser

var locales1 = ['ban', 'id-u-co-pinyin', 'de-ID'];
var options1 = { localeMatcher: 'lookup' };

console.log(Intl.DateTimeFormat.supportedLocalesOf(locales1, options1));
// expected output: Array ["id-u-co-pinyin", "de-ID"]
// (Note: the exact output may be browser-dependent)