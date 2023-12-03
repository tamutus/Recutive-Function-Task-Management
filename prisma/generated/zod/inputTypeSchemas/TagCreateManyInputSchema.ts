import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const TagCreateManyInputSchema: z.ZodType<Prisma.TagCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  nsfw: z.boolean().optional(),
  color: z.string().optional().nullable()
}).strict();

export default TagCreateManyInputSchema;
