import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PriorityCreateManyPersonInputSchema: z.ZodType<Prisma.PriorityCreateManyPersonInput> = z.object({
  id: z.number().int().optional(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable()
}).strict();

export default PriorityCreateManyPersonInputSchema;
