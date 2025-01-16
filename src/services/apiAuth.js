import supabase from "./supabase";

// const SUPABASE_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ2tvbW10Zmlsc3dmbm1jZ2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MDg2NDcsImV4cCI6MjA0NDI4NDY0N30.n7mf59p0HCehZ8boaCOgXxJvVX25PbiHOLkZ4beKkcE";

// const SUPABASE_URL = "https://orgkommtfilswfnmcgew.supabase.co";

export async function signup({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      },
    },
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error("Invalid login credentials");
    }

    return data;
  } catch (err) {
    console.error("Error during login:", err);
    throw err;
  }
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}
