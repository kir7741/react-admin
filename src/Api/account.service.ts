
const enviroment = {
  api: process.env.REACT_APP_API
}

export async function getUser() {
  const response = await fetch('/api/dashboard');
  return await response.json();
}

// export async function getOther() {
//   const response = await fetch('/api2/dashboard');
//   return await response.json();
// }
