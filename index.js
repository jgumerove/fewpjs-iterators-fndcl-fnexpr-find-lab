const superbowlWin = (array) => {
    let victory = array.find(w => w.result === 'W')
     if (victory) {
         return victory.year
     } 
 }