
(function() {
  
  var quotes = [
	" Discipline and consistency. I owe these two factors all have attained in my life. Things have never happened overnight. Results have appeared as a consequence of decades long toil. It is necessary to persist. -Master Carlos Gracie Jr.",
	"The perfect technique is one without much effort or conscious thought applied at the right time in the right direction, with the right amount of force – a spontaneous reaction to the opportunity presented by the opponent’s movement.",
	"Time on the mat will eventually surpass talent and ability. -Gracie Mag",
	"In the fight, only one person can be comfortable. Your job is to transfer the comfortable from your opponent to you.-Rickson Gracie",
	"If you think, you are late. If you are late, you use strength. If you use strength, you tire. And if you tire, you die. -Saulo Ribeiro ",
	"At first repetition is what counts”, says Carlos Gracie Jr. “I teach my students to repeat the moves to exhaustion, until it enters their subconscious and they therefore can apply them automatically, without thinking. Later on, once the combat situations have become complex I try and stimulate them to be creative. -Master Carlos Gracie Jr.",
	"The perfect technique is one without much effort or conscious thought applied at the right time in the right direction, with the right amount of force – a spontaneous reaction to the opportunity presented by the opponent’s movement. -Unknown Judoka",
	"…look he carry all of my weight. That’s another theory of jiu-jitsu. When I rest I should put him to work so I don’t get tired and he get tired. He spend energy. -Demian Maia",
	"I am a shark, the ground is my ocean, and most people don’t know how to swim. -Jean Jacques Machado"
  ];
  
	var rand = Math.floor(Math.random() * quotes.length);
	
      document.getElementById("quote").innerHTML = quotes[rand];
	
	bgTimer();
	
})(); 

/** @author Vuong Nguyen
* @pre Load the real time clock from JavaScript, an array of reminders
* @return Based on the clock time, use jQuery to change the background image, display the suitable reminder
**/
function bgTimer() {
	var reminder = [
    " Lawrence, Kansas' highest quality and most affordable Brazilian Jiu-Jitsu training club", "Brazilian Jiu-Jitsu for the people of Lawrence,KS by the people of Lawrence,KS"];
	//get clock time
    var today = new Date();
    var h = today.getHours();
    
	//period of time
	if (h>5 && h<=9) {
		$(".intro").addClass("breakfast");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>9 && h<=10) {
		$(".intro").addClass("water");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>10 && h<=13) {
		$(".intro").addClass("lunch");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>13 && h<=14) {
		$(".intro").addClass("tea");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>14 && h <=16) {
		$(".intro").addClass("nap");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>16 && h <= 20) {
		$(".intro").addClass("run");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h> 20 && h<=22) {
		$(".intro").addClass("animal");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h>22 && h<=23) {
		$(".intro").addClass("dream");
		document.getElementById("reminders").innerHTML = reminder[0];
	} else if (h >= 0 && h <=5) {
		$(".intro").addClass("coffee");
		document.getElementById("reminders").innerHTML = reminder[0];
	} 
    var t = setTimeout(bgTimer, 500);
}


