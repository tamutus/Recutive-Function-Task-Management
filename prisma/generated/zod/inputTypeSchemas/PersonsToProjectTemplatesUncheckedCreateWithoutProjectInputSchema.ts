import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUncheckedCreateWithoutProjectInput> = z.object({
  personId: z.number().int()
}).strict();

export default PersonsToProjectTemplatesUncheckedCreateWithoutProjectInputSchema;
