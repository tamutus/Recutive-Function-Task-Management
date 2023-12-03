import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesCreateManyInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateManyInput> = z.object({
  personId: z.number().int(),
  projectId: z.number().int()
}).strict();

export default PersonsToProjectTemplatesCreateManyInputSchema;
