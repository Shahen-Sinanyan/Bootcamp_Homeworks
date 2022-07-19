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
   function getStudentsScoreAvgLessThan40 (evaluations) {
    let checkIdArray = [];
    let result = [];
    let averageDivisor = 0;
    let studentScoreSum = 0;
    let numId;
    root:
    for (let i = 0; i < evaluations.length; i++) {
        numId = evaluations[i].studentId;
        for (let x = 0 ; x < checkIdArray.length; x++) { // arden hashvarkvacneri ID cucaki stugum
            if (checkIdArray[x] === numId) {
                continue root;
            }
        }
        for (let j = 0; j < evaluations.length; j++) { 
            if (numId === evaluations[j].studentId) {   // hamapatasxan ID score -neri gumarum 
                studentScoreSum += evaluations[j].score;
                averageDivisor++;
            }
        }
        if ((studentScoreSum / averageDivisor) < 40) {
            result.push(evaluations[i].studentName);
        }
        averageDivisor = 0;
        studentScoreSum = 0;
        checkIdArray.push(numId);
    }
    return result;
};
console.log(getStudentsScoreAvgLessThan40 (evaluations));