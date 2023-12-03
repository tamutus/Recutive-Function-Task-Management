import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsCreateManyInputSchema: z.ZodType<Prisma.PersonsToProjectsCreateManyInput> = z.object({
  personId: z.number().int(),
  projectId: z.number().int(),
  volunteerDate: z.coerce.date().optional()
}).strict();

export default PersonsToProjectsCreateManyInputSchema;
