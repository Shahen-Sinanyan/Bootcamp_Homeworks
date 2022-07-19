/* Return array of courses including average evaluation for each course,
Վերադարձնել բոլոր առարկաների ցուցակը և նրանց միջին քննական արդյունքը։
*/
const evaluations = [
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 70
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 60
    },
    {
      studentId: 1, // Unique identifier for each student
      studentName: "John Doe",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 60
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 50
    },
    {
      studentId: 2, // Unique identifier for each student
      studentName: "Tom Colins",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 40
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 1, // Unique identifier for each course
      courseName: "JS Bootcamp",
      score: 45
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 2, // Unique identifier for each course
      courseName: "JS Level 0",
      score: 35
    },
    {
      studentId: 3, // Unique identifier for each student
      studentName: "Sarah Conor",
      courseId: 3, // Unique identifier for each course
      courseName: "JS Level 1",
      score: 25
    }
   ];
    
   
   
   function getCourseScoreAvg (evaluations) {
          let checkCourseIdArray = [];
          let result = [];
          let averageDivisor = 0;
          let studentScoreSum = 0;
          let courseNumId
          root:
          for (let i = 0; i < evaluations.length; i++) {
              courseNumId = evaluations[i].courseId;
              for (let x = 0 ; x < checkCourseIdArray.length; x++) { // arden hashvarkvacneri ID cucaki stugum
                  if (checkCourseIdArray[x] === courseNumId) {
                      continue root;
                  }
              }
              for (let j = 0; j < evaluations.length; j++) { 
                  if (courseNumId === evaluations[j].courseId) {   // hamapatasxan ID score -neri gumarum 
                      studentScoreSum += evaluations[j].score;
                      averageDivisor++;
                  }
              }   
                  result.push({
                      courseId: evaluations[i].courseId,
                      courseName: evaluations[i].courseName,
                      courseScoreAvg: (studentScoreSum / averageDivisor),
                  });
              averageDivisor = 0;
              studentScoreSum = 0;
              checkCourseIdArray.push(courseNumId);
          }
          return result;
      };
      console.log(getCourseScoreAvg (evaluations));