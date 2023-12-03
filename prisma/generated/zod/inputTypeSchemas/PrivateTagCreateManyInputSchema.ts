import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagCreateManyInputSchema: z.ZodType<Prisma.PrivateTagCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable(),
  personId: z.number().int()
}).strict();

export default PrivateTagCreateManyInputSchema;
