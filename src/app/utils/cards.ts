
 export interface studentData {
    image:string,
    name: string,
    rollno:string,
    batch: string|number,
    year: string,

 }

 export const studentsList: studentData[] =[
    {
        image: "/images/image1.jpg",
        name:" Name:Sumera",
        rollno: "RollNo: 1111",
        batch: "Batch: second",
        year:"Year:2024",


    },


    {
        image: "/images/image2.jpg",
        name:" Name: Naheed",
        rollno:"RollNo: 2222",
        batch: " Batch: second",
        year:"Year:2024",


    },



    {
        image: "/images/image3.jpg",
        name:"Name: seema",
        rollno:"RollNo: 3333",
        batch: "Batch: second",
        year:"Year: 2024",


    },




 ]

 console.log(studentsList);