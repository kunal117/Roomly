/*eslint-disable*/
import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }
  return data;
}
export default getCabins;

export async function createCabin(newCabin) {
  // const { data, error } = await supabase.from("cabins").insert([newCabin]);

  const { data, error } = await supabase
    .from("cabins")
    .insert([newCabin])
    .select();

  if (error) {
    console.error("Supabase Error:", error);
    throw new Error(error.message || "Cabins could not be loaded");
  }

  // if (error) {
  //   console.error(error);
  //   throw new Error("Cabins could not be loaded");
  // }
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}
