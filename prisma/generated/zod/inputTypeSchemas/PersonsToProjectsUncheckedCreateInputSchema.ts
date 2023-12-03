import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedCreateInput> = z.object({
  personId: z.number().int(),
  projectId: z.number().int(),
  volunteerDate: z.coerce.date().optional()
}).strict();

export default PersonsToProjectsUncheckedCreateInputSchema;
