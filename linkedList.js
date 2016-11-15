/**
 * Created by GodaiYuusaku on 11/10/16.
 */
var lastTrooper = "head";

function Node(element)
{
    this.element = element;
    this.next = null;
}

function LinkedList()
{
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
}

function find(item)
{
    var currentNode = this.head;
    while (currentNode.element != item)
    {
        if(currentNode.next === null)
        {
            var error = "<span>" + item + " is not an active Stormtrooper. </span>";
            $("#error").append(error);
            return null;
        }
        currentNode = currentNode.next;
    }
    return currentNode;
}

function insert(newElement, item)
{
    var newNode = new Node(newElement);
    var currentNode = this.find(item);
    if (currentNode != null) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }
    lastTrooper = newNode.element;
}

function display()
{
    $("#trooperDiv").html("");
    var currentNode = this.head;
    while (currentNode.next != null)
    {
        var newTrooper = "<div class='trooperDivs'><img src='images/stormTrooper.png' width='50px'/><div>" + currentNode.next.element + "</div></div>";
        $("#trooperDiv").append(newTrooper);
        currentNode = currentNode.next;
    }
}

var troopers = new LinkedList();

$("#submit").click(function () {
    var newTrooper = $("#trooper").val();
    $("#trooper").val("");
    troopers.insert(newTrooper, lastTrooper);
    troopers.display();
});
