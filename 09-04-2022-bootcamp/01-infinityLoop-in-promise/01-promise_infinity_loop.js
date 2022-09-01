// Exercise 1. Create an infinite loop 
// Create an infinite loop that will not stop the execution of other JS instructions.

function infinity() {
    return new Promise ((res) => {
             res('bye');    
      })
  };
  
  infinity().then((res) => {
      
  })
  