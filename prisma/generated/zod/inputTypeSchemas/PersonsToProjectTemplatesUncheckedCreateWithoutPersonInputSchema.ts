import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesUncheckedCreateWithoutPersonInput> = z.object({
  projectId: z.number().int()
}).strict();

export default PersonsToProjectTemplatesUncheckedCreateWithoutPersonInputSchema;
