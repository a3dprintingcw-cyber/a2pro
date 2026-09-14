/* A2PRO — training prices in the currency the player actually pays in.
   Curacao switched from the Antillean guilder to the Caribbean guilder in 2025,
   and the peg to the dollar did not move, so USD stays a straight conversion.
   A price tagged data-unit="hour" is per lesson, so the season toggle leaves it
   alone: ten times a private lesson is not a season ticket. */
(function(){
  "use strict";

  var RATE = {XCG:1, USD:1/1.79, EUR:1/1.95};   /* indicative, XCG is pegged to USD */
  var SYM  = {XCG:"XCG", USD:"USD", EUR:"EUR"};
  var SEASON = 10;                              /* twelve cycles, two of them free */
  var cur = "XCG", season = false;

  /* XCG is the real price list, so it is never rounded. Conversions are indicative
     and land on a round number rather than pretending to cent accuracy. */
  function money(n, currency){
    return currency === "XCG" ? Math.round(n) : Math.round(n/5)*5;
  }

  function paint(){
    Array.prototype.forEach.call(document.querySelectorAll("[data-xcg]"), function(el){
      var unit = el.dataset.unit || "month";
      var perHour = unit === "hour";
      var base = parseFloat(el.dataset.xcg) * (season && !perHour ? SEASON : 1);
      var label = perHour ? " / hour" : (season ? " / season" : " / month");
      el.querySelector(".amt-val").textContent = money(base * RATE[cur], cur).toLocaleString("en-US");
      el.querySelector(".amt-cur").textContent = SYM[cur] + label;
    });
    var note = document.getElementById("billNote");
    if(note) note.textContent = season
      ? "Paid up front for the season, two cycles free. Private lessons stay per hour."
      : "Paid per six week cycle. Converted from XCG at the pegged rate, invoiced in XCG.";
  }

  document.addEventListener("click", function(e){
    var c = e.target.closest("[data-cur]");
    if(c){
      cur = c.dataset.cur;
      Array.prototype.forEach.call(document.querySelectorAll("[data-cur]"), function(b){
        b.classList.toggle("on", b.dataset.cur === cur);
      });
      paint();
    }
    var b = e.target.closest("[data-bill]");
    if(b){
      season = b.dataset.bill === "year";
      Array.prototype.forEach.call(document.querySelectorAll("[data-bill]"), function(x){
        x.classList.toggle("on", x.dataset.bill === b.dataset.bill);
      });
      paint();
    }
  });

  paint();
})();
