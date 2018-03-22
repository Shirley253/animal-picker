$(document).ready(function() {
 $("h1#wombat").click(function() {
   $(".animal-showing#wombat-p").show();
   $(".animal-showing#grizzly-bear-p").hide();
   $(".animal-showing#moose-p").hide();
 });

 $("h1#grizzly-bear").click(function() {
   $("div.animal-showing#grizzly-bear-p").show();
   $(".animal-showing#wombat-p").hide();
   $(".animal-showing#moose-p").hide();
 });

 $("h1#moose").click(function() {
   $(".animal-showing#moose-p").show();
   $(".animal-showing#grizzly-bear-p").hide();
   $(".animal-showing#wombat-p").hide();
 });
});
