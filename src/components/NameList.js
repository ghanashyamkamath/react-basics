import React from 'react'

function NameList() {

    // const names = ['bruce' ,'clark','diana']
    const persons = [
      {
        id: 1,
        name: "ghanashyam",
        age: "30",
      },
      {
        id: 2,
        name: "kiran",
        age: "20",
      },
      {
        id: 3,
        name: "manu",
        age: "40",
      },
    ];
    
    return (
      <div>
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}

        {
            persons.map(person => <h2>{person.name} with {person.age}</h2>)
        }
      </div>
    );
}

export default NameList
