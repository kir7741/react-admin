export async function getUser() {
  const response = await fetch('/account');
  return await response.json();
}

