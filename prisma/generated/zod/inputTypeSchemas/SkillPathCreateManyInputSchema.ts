import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const SkillPathCreateManyInputSchema: z.ZodType<Prisma.SkillPathCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable()
}).strict();

export default SkillPathCreateManyInputSchema;
