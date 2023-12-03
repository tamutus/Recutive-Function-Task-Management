import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedCreateWithoutProjectInput> = z.object({
  personId: z.number().int(),
  volunteerDate: z.coerce.date().optional()
}).strict();

export default PersonsToProjectsUncheckedCreateWithoutProjectInputSchema;
