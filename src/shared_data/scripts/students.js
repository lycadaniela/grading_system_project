interface Student {
    name: string;
    age: number;
}

let students: Student[] = [];

// Function to toggle between Add Student and Student Records sections
function toggleSections(): void {
    $('#addStudentSection').toggle();
    $('#studentRecordsSection').toggle();
}

// Function to render student list
function renderStudents(): void {
    const studentList: JQuery<HTMLElement> = $('#studentList');
    studentList.empty();
    students.forEach((student: Student, index: number) => {
        const row: string = `<tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>
                <button class="btn btn-info btn-sm" onclick="viewStudent(${index})">View</button>
                <button class="btn btn-warning btn-sm" onclick="editStudent(${index})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
            </td>
        </tr>`;
        studentList.append(row);
    });
}

// Function to add student
$('#addForm').submit(function (e: JQuery.Event): void {
    e.preventDefault();
    const name: string = $('#name').val() as string;
    const age: number = parseInt($('#age').val() as string, 10);
    students.push({ name, age });
    renderStudents();
    this.reset();
    toggleSections();
});

// Function to view student details
function viewStudent(index: number): void {
    const student: Student = students[index];
    alert(`Student Name: ${student.name}\nStudent Age: ${student.age}`);
}

// Function to edit student details
function editStudent(index: number): void {
    const newName: string | null = prompt('Enter new name:', students[index].name);
    const newAge: string | null = prompt('Enter new age:', String(students[index].age));
    
    if (newName !== null && newAge !== null) {
        students[index].name = newName;
        students[index].age = parseInt(newAge, 10);
        renderStudents();
    }
}

// Function to delete student
function deleteStudent(index: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
        students.splice(index, 1);
        renderStudents();
    }
}
