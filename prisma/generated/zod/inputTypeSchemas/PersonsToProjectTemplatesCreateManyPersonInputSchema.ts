import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesCreateManyPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateManyPersonInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PersonsToProjectTemplatesCreateManyPersonInputSchema;
