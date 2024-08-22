"use strict"
let arr =[1,2,3,4,5,]

let newArray = arr.map(timestwo)
// function double (item, index,array){
//     console.log(`item:${item}, index:${index},array:${array}`)
// }

function timestwo (item){
    return item*2
}console.log(newArray)

let friends=['paige','subomi','mbata']

let newfriends = friends.map(friend)

function friend (names){
    return names.toUpperCase()
}
console.log(newfriends)

const quadpule= arr.map(function(item){return item*4})
console.log(quadpule)

const upper =friends.map(function(names){return names.toUpperCase()})
console.log(upper)

const students=[
    {
        id:1,
        name:'paige',
        age:20,
        course:'js',
        fee:200,
        exam:58,
        test:29,
    },
    {
        id:2,
        name:'page',
        age:26,
        course:'mysql',
        fee:200,
        exam:1/2,
        test:29,
    },
    {
        id:3,
        name:'pig',
        age:25,
        course:'django',
        fee:200,
        exam:0,
        test:29,
    },
    {
        id:4,
        name:'great',
        age:21,
        course:'html',
        fee:200,
        exam:2,
        test:29,
    },
    {
        id:5,
        name:'hoe',
        age:23,
        course:'python',
        fee:200,
        exam:8,
        test:29,
    }
]
const studentsId =students.map((students)=>students.id)
console.log(studentsId)

const studentsname =students.map((students)=>students.name)
console.log(studentsname)

const studentsage =students.map((students)=>students.age)
console.log(studentsage)

const studentscourse =students.map((students)=>students.course)
console.log(studentscourse)

const studentinfo = students.map((student)=>{
    return{
    id:student.id,
    name:student.name,
    course:student.course,
}    
})
console.log(studentinfo)

const awardmarks =students.map((students)=>{
    return{
        id:students.id,
        name:students.name,
        course:students.course,
        total_score:students.exam+students+3,
    }
})
console.log(awardmarks)


// award a mrk to the student that scores above 60