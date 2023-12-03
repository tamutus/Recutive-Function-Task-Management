import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagCreateManyPersonInputSchema: z.ZodType<Prisma.PrivateTagCreateManyPersonInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean(),
  color: z.string().optional().nullable()
}).strict();

export default PrivateTagCreateManyPersonInputSchema;
