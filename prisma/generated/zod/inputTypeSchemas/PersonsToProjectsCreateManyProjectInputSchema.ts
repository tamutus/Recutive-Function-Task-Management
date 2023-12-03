import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsCreateManyProjectInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateManyProjectInput> = z.object({
  personId: z.number().int(),
  volunteerDate: z.coerce.date().optional()
}).strict();

export default PersonsToProjectsCreateManyProjectInputSchema;
