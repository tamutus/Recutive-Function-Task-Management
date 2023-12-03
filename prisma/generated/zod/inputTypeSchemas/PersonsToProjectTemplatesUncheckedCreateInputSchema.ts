import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesUncheckedCreateInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUncheckedCreateInput> = z.object({
  personId: z.number().int(),
  projectId: z.number().int()
}).strict();

export default PersonsToProjectTemplatesUncheckedCreateInputSchema;
