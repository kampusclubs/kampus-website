// ============================================================
// KAMPUS — Supabase configuration
// ============================================================
// This file is loaded by BOTH index.html and club-admin.html.
// It only needs your Project URL and PUBLISHABLE (anon) key —
// these are safe to ship in frontend code because every request
// they make is still restricted by your Row Level Security (RLS)
// policies in Supabase. NEVER put a service_role/secret key here
// or anywhere in frontend code.
// ============================================================

const SUPABASE_URL = "https://wmjlbbewijwjyanrsipd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_l7N31pJJSuK8jqjnlOtT4A_y5sl78E6";

// Single shared client instance.
// NOTE: the CDN script exposes a global object called `supabase`
// (the library). We immediately create our *client* and store it
// under a different name, `supabaseClient`, so the rest of the app's
// code can call supabaseClient.from(...) without ever confusing the
// library namespace with the client instance.
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
