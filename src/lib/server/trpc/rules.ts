import { rule, shield, allow } from 'trpc-shield';
import type { Context } from '$tb/context';
import { LAVRA_EMAIL } from '$env/static/private';

// Rules

export const isAuthenticated = rule<Context>()(async (ctx, type, path, input, rawInput) => {
	if (ctx.session?.user) return true;
	return false;
});
export const isLavra = rule<Context>()(async (ctx, type, path, input, rawInput) => {
	if (ctx.session?.user?.email === LAVRA_EMAIL) return true;
	return false;
});

// Permissions

export const permissions = shield<Context>({
	task: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isAuthenticated,
			edit: isAuthenticated
		}
	},
	project: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isLavra,
			edit: isAuthenticated
		}
	},
	energy: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isLavra,
			edit: isAuthenticated
		}
	},
	person: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isLavra,
			edit: isAuthenticated
		}
	},
	priority: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isLavra,
			edit: isAuthenticated
		}
	},
	skill: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isLavra,
			edit: isAuthenticated
		}
	},
	tag: {
		query: {
			get: allow,
			list: allow
		},
		mutation: {
			create: isAuthenticated,
			delete: isLavra,
			edit: isAuthenticated
		}
	}
});
