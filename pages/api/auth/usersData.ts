// State Global untuk Dummy Data
let users = [
    { id: 1, name: "User One", email: "user123@gmail.com", password: "user123" },
  ];
  
  // Fungsi untuk mendapatkan semua user
  export function getUsers() {
    return users;
  }
  
  // Fungsi untuk menambahkan user baru
  export function addUser(user: { id: number; name: string; email: string; password: string }) {
    users.push(user);
  }
  