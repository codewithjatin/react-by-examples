type Student = {
    id: number,
    name: string;
    standard: number;
    age: number;
}
const Students = () => {
    const students: Array<Student> = [{
        id: 1,
        name: "Jatin Prajapati",
        age: 7,
        standard: 1
    }, {
        id: 2,
        name: "Neha Gandhi",
        age: 7,
        standard: 1
    }, {
        id: 3,
        name: "Ashish Gandhi",
        age: 7,
        standard: 1
    }, {
        id: 4,
        name: "Jigar Patel",
        age: 7,
        standard: 2
    },];
    return (
        <div>
            <table className="w-full table-auto">
                <thead>
                    <tr className="font-semibold mb-2">
                        <td>Name</td>
                        <td>Standard</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student: Student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.standard}</td>
                            <td>{student.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Students;