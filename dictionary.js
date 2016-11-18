/**
 * Created by GodaiYuusaku on 11/16/16.
 */
function Dictionary ()
{
    this.add = add;
    this.dataStore = {};
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

function add(key, value)
{
    this.dataStore[key] = new KidsNode(key, value);
}

function find(key)
{
    return this.dataStore[key];
}

function remove(key)
{
    delete this.dataStore[key];
}

function showAll()
{
    $("#showlist").html("");
    var output = "";
    for (var key in this.dataStore)
    {
        output = "<div>" + key + " wants " + this.dataStore[key].gift + " for Christmas</div>";
        if(this.dataStore[key].good)
        {
            output += "<div> Santa has judged " + key + " to be " + this.dataStore[key].judgement + "! " + key + " will get " + this.dataStore[key].gift + " this Christmas!</div>";
        }
        else
        {
            output += "<div> Santa has judged " + key + " to be " + this.dataStore[key].judgement + "! " + key + " will get nothing this Christmas!</div>";
        }
    }
    $("#showlist").html(output);
}

function count()
{
    var n = 0;
    for (var key in this.dataStore)
    {
        n++;
    }
    return n;
}

function clear()
{
    for (var key in this.dataStore)
    {
        delete this.dataStore[key];
    }
}

var phonebook = new Dictionary();

$("#submitBtn").click(function ()
{
    addPerson();
});

$("input").keypress(function(event) {
    if (event.which == 13)
    {
        event.preventDefault();
        addPerson();
    }
});


function addPerson()
{
    if (!($("#name").val() == "" || $("#extension").val() == ""))
    {
        if(phonebook.find($("#name").val()) != undefined)
        {
            var error = "<div>"+ $("#name").val() + " is already in line</div>";
            $("#showerror").html(error);
            $("#name").focus();
        }
        else {
            phonebook.add($("#name").val(), $("#extension").val());
            phonebook.showAll();
            $("#name").val("");
            $("#extension").val("");
            $("#showerror").html("");
            $("#name").focus();
        }
    }
    else
    {
        var error = "<div>Please fill in both fields</div>";
        $("#showerror").html(error);
    }
}


function showJudgements()
{
    if (!phonebook)
    {
        $("#showerror").html("Santa hasn't made any Judgements yet...");
    }
    else {
        $("#showerror").html("");
        $("#showJudgement").html("");
        var output = "";
        for (var key in phonebook.dataStore) {
            output += "<div> Santa has judged " + key + " to be " + this.dataStore[key].judgement + "! " + key + " will get " + this.dataStore[key].gift + " this Christmas!</div>";
        }
        $("#showJudgement").html(output);
    }
}

