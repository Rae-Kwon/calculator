var entries = array;
var total = 0;

var temporary = emptyString;

"button".onclick(calcDisplay);

def calcDisplay() {
    var val = pressed button to textcontent
    if (val is num or val is '.') {
        add val to temporary

        add to answerDisplay(make temp up to 10 digits)


    } else if (val is 'AC'){
        entries = empty array
        temporary = empty string
        total = 0
        set answerDisplay to empty string
    } else if (val is 'CE'){
        temporary = empty string
        set answerDisplay to empty string
    } else if (val is multiply) {
        entries.push(temporary)
        entries.push("multiply")
        temporary = empty string
    } else if (val is divide) {
        entries.push(temporary)
        entries.push(divide)
        temporary = empty string
    } else if (val is equals) {
        entries.push(temp);

        var firstNum = convert entries[0] to num

        for i in entries {
            var nextNum = convert entries[1+] to num
            var symbol = entries[i]


            if(symbol is plus) {
                firstNum += nextNum
            } else if (symbol is minus) {
                firstNum -= nextNum
            } else if (symbol is multiply) {
                firstNum *= nextNum
            } else if (symbol is divide) {
                firstNum /= nextNum
            }
            i++ //increment i so that it skips symbol, if symbol
        }

        if (firstNum is negative num) {
            firstNum = absoluteNum(firstNum) + '-'
        }

        set answerDisplay val to firstNum
        entries = empty array
        temporary = empty string


        
    } else {
        entries.push(temporary)
        entries.push(val)
        temporary = empty string
    }
}