var data = {
  "computer" : "Click right!",
  "chloe" : "Louise's signature outfit: beautiful quirky jewellery and awesome brown lace-up boots!",
  "christina" : "Louise, you are our wonder woman and you will be dearly missed! We're incredibly happy for you and your new life journey but also sad as you will no longer come to our rescue! Best of luck and THANK YOU.",
  "danielle" : "We're going to miss you and you're gonna be great. Can't wait to hear what incredible things you do at SLaM!",
  "ephie" : "you've made the last 18 months so fun! you'll be sorely missed but i know you'll continue doing amazing work with the NHS. don't ever change & keep slayin'",  
  "michael" : "We will miss you Louise! I thought this \"mortar board hat\" was appropriate since you are the oracle of all knowledge.",
  "paul" : "Once a member of King's Online, always a member of King's Online. You will never be forgotten..",
  "santa": "Ho ho ho. Merry foobar and a happy foobar!",
  "sj": "One of your superpowers is how amazingly quick you answer our questions! Zap Zap Zap to the rescue!",
  "toral" : "I gift you these badass shoes to go forth and smash the patriarchy."
}

generateMessage();
getItem();

$("#prev, #next").click(function() {
  var selected = $("#name-select li.selected");
  var currentIndex = selected.index();
  var newIndex = $(this).is("#prev") ? currentIndex - 1 : currentIndex + 1;
  var maxItems = $("#name-select li").length;
  $(this).parents("#select-container").removeClass("start end");
  if (newIndex == 0) $(this).parents("#select-container").addClass("start");
  else if (newIndex == maxItems - 1) $(this).parents("#select-container").addClass("end");
  selected.removeClass("selected");
  $("#name-select li:eq(" + newIndex + ")").addClass("selected");
  generateMessage();
  getItem();
});

function generateMessage() {
  var name = $("#name-select li.selected").attr("id");
  $("#message-box").text('"' + data[name] + '"');
}

function getItem() {
  var name = $("#name-select li.selected").attr("id");
  $("#louise").removeClass().addClass(name);
  if ($("#louise").hasClass("ephie")) {
    $("#louise").addClass("skate-right");
    setTimeout(function(){ 
      $("#louise").removeClass("skate-right");
    }, 2000);
  }
}
