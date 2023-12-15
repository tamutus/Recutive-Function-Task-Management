import { z } from 'zod';

export const UnixTimestamp = z.number();
export type UnixTimestamp = z.infer<typeof UnixTimestamp>;

export const RecurringSchedule = z.object({
	kind: z.literal('recurring'),
	start: UnixTimestamp.optional(),
	end: UnixTimestamp.optional(),
	every: z.tuple([z.number(), z.enum(['days', 'weeks', 'months', 'years'])]),
	weekdays: z
		.enum(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'])
		.array()
		.optional(),
	monthdays: z
		.number()
		.refine((n) => n >= 0 && n < 31)
		.array()
		.optional()
});
export type RecurringSchedule = z.infer<typeof RecurringSchedule>;

export const OngoingSchedule = z.object({
	kind: z.literal('ongoing'),
	start: UnixTimestamp
});
export type OngoingSchedule = z.infer<typeof OngoingSchedule>;

export const DiscreteSchedule = z.object({
	kind: z.literal('discrete'),
	start: UnixTimestamp,
	end: UnixTimestamp
});
export type DiscreteSchedule = z.infer<typeof DiscreteSchedule>;

export const Schedule = z.discriminatedUnion('kind', [
	RecurringSchedule,
	OngoingSchedule,
	DiscreteSchedule
]);
export type Schedule = z.infer<typeof Schedule>;

export const DBDateKey = z.union([
	z.literal('createdAt'),
	z.literal('updatedAt'),
	z.literal('publicAt'),
	z.literal('startAt'),
	z.literal('startedAt'),
	z.literal('dueAt'),
	z.literal('endedAt'),
	z.literal('volunteerDate'),
	z.literal('date')
]);

export type DBDateKey = z.infer<typeof DBDateKey>;

export type DBDateStrings = {
	[key in DBDateKey]?: string | null;
} & {
	[key: string]: any;
};

export type RestoredDates<T> = {
	[key in DBDateKey]?: Date | null;
} & {
	[key: string]: any;
};

export function restoreDBDateTimes<T extends DBDateStrings>(stringified: T): RestoredDates<T> {
	const datified: RestoredDates<T> = {};
	Object.keys(stringified).forEach((key) => {
		if (DBDateKey.safeParse(key).success) {
			datified[key] = new Date(stringified[key]);
		} else {
			datified[key] = stringified[key];
		}
	});
	return datified;
}
