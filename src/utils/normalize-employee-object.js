export const normalizeEmployeeObject = (employee = { }) => {
  const { _id, isSacked, isVerified, name, department, email, role, phone, createdAt, organization } = employee
  return {
    id: _id, createdAt: new Date(createdAt).toLocaleDateString(),
    key: _id, department: department.name, email, role,
    isSacked, isVerified, name: `${name} ${employee?.surname}`, phone, organization
  }
}
