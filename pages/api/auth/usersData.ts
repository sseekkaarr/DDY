let users = [
    { id: 1, name: "User One", email: "user123@gmail.com", password: "user123" },
  ];
  
  export function getUsers() {
    return users;
  }
  
  export function addUser(user: { id: number; name: string; email: string; password: string }) {
    users.push(user);
  }
  