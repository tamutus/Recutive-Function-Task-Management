import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectsUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectsUncheckedCreateWithoutPersonInput> = z.object({
  projectId: z.number().int(),
  volunteerDate: z.coerce.date().optional()
}).strict();

export default PersonsToProjectsUncheckedCreateWithoutPersonInputSchema;
