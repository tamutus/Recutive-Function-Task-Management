import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesCreateManyProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesCreateManyProjectInput> = z.object({
  personId: z.number().int()
}).strict();

export default PersonsToProjectTemplatesCreateManyProjectInputSchema;
