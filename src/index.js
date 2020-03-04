module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0){
        return false;
    }
    let i = 0;
    let j = str.length;
    while (i < j) {
        if (str.includes("()")) {
            str = str.replace("()", "");
        }
        if (str.includes("{}")) {
            str = str.replace("{}", "");
        }
        if (str.includes("[]")) {
            str = str.replace("[]", "");
        }
        if (str.includes("||")) {
            str = str.replace("||", "");
        }
        if (str.includes("12")) {
            str = str.replace("12", "");
        }
        if (str.includes("34")) {
            str = str.replace("34", "");
        }
        if (str.includes("56")) {
            str = str.replace("56", "");
        }
        if (str.includes("77")) {
            str = str.replace("77", "");
        }
        if (str.includes("88")) {
            str = str.replace("88", "");
        }
        i++
    }
    return str == "";
}
