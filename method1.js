const vaxTrail =(persons) => {
    const A=[];
    const B=[];
    const C=[];
    const D=[];
    persons.map((person) => {
        if(person.age >= 20 && person.age <=30 && person.temperature <100){
            A.push(person);
        }
        else if(person.age > 30 && person.age <=40 && person.temperature <100){
            B.push(person);
        }
        else if(person.age > 40 && person.age <=50 && person.temperature <100){
            C.push(person);
        }
        if(person.temperature >= 100){
            D.push(person);
        }
    })
    // Function to sort Each array by even ages people
    const sorter = (person1, person2) => {
        const isPerson1Even = !(person1.age % 2);
        const isPerson2Even = !(person2.age % 2);
        if(isPerson1Even && !isPerson2Even){
           return -1;
        };
        if(!isPerson1Even && isPerson2Even){
           return 1;
        };
        return person1.age - person2.age;
     };
    //  Each array will be sort by even ages people [First even ages people then odd ages people]
     A.sort(sorter);
     B.sort(sorter);
     C.sort(sorter);
     D.sort(sorter);
    
    return {
        A,B,C,D
    }
}
// const outPut = vaxTrail([
//     { name: 'Biplap', age: 22, temperature: 98 },
//     { name: '24fhgfh', age: 24, temperature: 98 },
//     { name: '20hgfh', age: 20, temperature: 98 },
//     { name: '21', age: 21, temperature: 98 },
//     { name: '23', age: 23, temperature: 98 },
//     { name: 'sunil', age: 21, temperature: 98 },
//     { name: 'Kabir', age: 36, temperature: 99 }, 
//     { name: 'Rahul', age: 37, temperature: 99 },
//     { name: 'Paul', age: 42, temperature: 98 }, 
//     { name: 'Kat', age: 41, temperature: 98 }, 
//     { name: 'Nayem', age: 50, temperature: 100 }, 
//     { name: 'Sabnaj', age: 51, temperature: 101 }
// ])
// console.log(outPut);
// const outputView ={
//     A: [
//       { name: '20hgfh', age: 20, temperature: 98 },
//       { name: 'Biplap', age: 22, temperature: 98 },
//       { name: '24fhgfh', age: 24, temperature: 98 },
//       { name: '21', age: 21, temperature: 98 },
//       { name: 'sunil', age: 21, temperature: 98 },
//       { name: '23', age: 23, temperature: 98 }
//     ],
//     B: [
//       { name: 'Kabir', age: 36, temperature: 99 },
//       { name: 'Rahul', age: 37, temperature: 99 }
//     ],
//     C: [
//       { name: 'Paul', age: 42, temperature: 98 },
//       { name: 'Kat', age: 41, temperature: 98 }
//     ],
//     D: [
//       { name: 'Nayem', age: 50, temperature: 100 },
//       { name: 'Sabnaj', age: 51, temperature: 101 }
//     ]
//   }