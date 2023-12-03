import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedCreateWithoutTaskInput> = z.object({
  personId: z.number().int()
}).strict();

export default PersonsToTaskTemplatesUncheckedCreateWithoutTaskInputSchema;
