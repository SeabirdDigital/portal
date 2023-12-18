import type { SupabaseClient } from '@supabase/supabase-js';

const createPortal = async (supabase: SupabaseClient, id: string) => {
	const { data } = await supabase.from(id).select<'*', { key: string; value: string }>('*');

	if (!data) throw new Error(`No data found for portal ${id}`);

	const texts: { [key: string]: string } = {};
	for (const t of data) {
		texts[t.key] = t.value;
	}

	return { texts };
};

export { createPortal };
