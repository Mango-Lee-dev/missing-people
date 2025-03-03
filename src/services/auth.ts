export const signInWithAdmin = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:3000/auth/sign-in", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to sign in with admin");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error signing in with admin:", error);
    throw error;
  }
};
