import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://orgkommtfilswfnmcgew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yZ2tvbW10Zmlsc3dmbm1jZ2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg3MDg2NDcsImV4cCI6MjA0NDI4NDY0N30.n7mf59p0HCehZ8boaCOgXxJvVX25PbiHOLkZ4beKkcE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
