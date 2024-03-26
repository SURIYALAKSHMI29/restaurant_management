function markAttendance() {
    const employeeId = document.getElementById('employeeId').value;
    const attendance = document.getElementById('attendance').value;
    const attendanceList = document.getElementById('attendanceList');

    if (employeeId.trim() === '') {
        alert('Please enter employee ID');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = `Employee ID: ${employeeId}, Attendance: ${attendance}`;
    attendanceList.appendChild(listItem);

    // Clear input fields after marking attendance
    document.getElementById('employeeId').value = '';
    document.getElementById('attendance').value = 'present';
}
