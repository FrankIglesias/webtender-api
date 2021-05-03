const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.NODE_SUPABASE_HOST, process.env.NODE_SUPABASE_KEY)

module.exports = supabase;
