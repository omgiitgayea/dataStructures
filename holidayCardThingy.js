/**
 * Created by GodaiYuusaku on 11/18/16.
 */
var badJudgements = ["naughty", "a future dictator", "a shady businessman", "a war criminal", "an alien invader sympathizer"];
var goodJudgements = ["nice", "a boy scout", "Mother Theresa", "unbelievably good", "pure as the driven snow"];
var show = false;
function KidsNode (name, gift)
{
    this.name = name;
    this.gift = gift;

    var goodBad = Math.round(Math.random());
    if (goodBad === 1)
    {
        this.judgement = goodJudgements[Math.floor(Math.random() * goodJudgements.length)];
        this.good = true;
    }
    else
    {
        this.judgement = badJudgements[Math.floor(Math.random() * badJudgements.length)];
        this.good = false;
    }
}

$("#judgements").click(function()
{
    show = !show;
    if (!show)
    {
        $("#judgements").html("Show all of Santa's Judgements!");
        $("#showJudgement").html("");
    }
    else
    {
        $("#judgements").html("Hide all of Santa's Judgements!");
        showJudgements();
    }
});



