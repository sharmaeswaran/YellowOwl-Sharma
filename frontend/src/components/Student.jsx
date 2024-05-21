import React from 'react'

export default function Student() {
  return (
    <div>
      <h1>Student</h1>
      <input type="text" placeholder='serch...' />
      <button>Add</button>

      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th> </th>
            </tr>
        </thead>
      </table>
    </div>
  )
}
