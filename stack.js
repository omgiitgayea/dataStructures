/**
 * Created by GodaiYuusaku on 11/11/16.
 */
function Stack ()
{
    var data = [];

    this._push = function(element)
    {
        data.push(element);
    };

    this._pop = function()
    {
        if (data.length > 0) {
            return data.pop();
        }
        else
        {
            console.log("Your array is empty");
            return null;
        }
    };

    this.peek = function()
    {
        if (data.length > 0) {
            return data[data.length - 1];
        }
        else
        {
            console.log("Your array is empty");
            return null;
        }
    };

    this.size = function()
    {
        return data.length;
    };
}

var myStack = new Stack();

console.log(myStack._pop());
console.log(myStack.peek());
console.log(myStack.size());
myStack._push("Tokyo");
myStack._push("Osaka");
myStack._push("Kyoto");
myStack._push("Hiroshima");
console.log(myStack.size());
console.log(myStack._pop());
console.log(myStack.peek());
console.log(myStack.size());