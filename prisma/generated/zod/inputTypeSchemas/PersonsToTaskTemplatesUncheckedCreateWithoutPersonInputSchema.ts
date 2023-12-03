import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema: z.ZodType<Prisma.PersonsToTaskTemplatesUncheckedCreateWithoutPersonInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PersonsToTaskTemplatesUncheckedCreateWithoutPersonInputSchema;
