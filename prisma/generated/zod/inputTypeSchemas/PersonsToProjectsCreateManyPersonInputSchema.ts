import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsCreateManyPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateManyPersonInput> = z.object({
  projectId: z.number().int(),
  volunteerDate: z.coerce.date().optional()
}).strict();

export default PersonsToProjectsCreateManyPersonInputSchema;
