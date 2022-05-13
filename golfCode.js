/*Assignment 

In the game of golf, each hole has a par, meaning, the average number of strokes a golfer is expected to make in order to sink the ball in the hole to complete the play. Depending on how far above or below par your strokes are, there is a different nickname.

Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes		    Return
1		          "Hole-in-one!"
<= par - 2	  "Eagle"
par - 1		    "Birdie"
par		        "Par"
par + 1		    "Bogey"
par + 2		    "Double Bogey"
>= par + 3	  "Go Home!"

*/

const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];


function golfScore(par,strokes ) {
  // Only change code below this line
  const scores = [1==strokes,strokes<=par-2,strokes==par-1,strokes==par,strokes==par+1,strokes==par+2,strokes>=par+3]

  let i=0;
  for (const score in scores){
  if (scores[score]){
  return names[i]
  } 
  i++
  } 
   return 'no match'
  }
 
  // Only change code above this line


console.log(golfScore(4, 6));
