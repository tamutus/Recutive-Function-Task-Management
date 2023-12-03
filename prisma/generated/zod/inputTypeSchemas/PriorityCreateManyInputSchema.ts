import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PriorityCreateManyInputSchema: z.ZodType<Prisma.PriorityCreateManyInput> = z.object({
  id: z.number().int().optional(),
  personId: z.number().int(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable()
}).strict();

export default PriorityCreateManyInputSchema;
