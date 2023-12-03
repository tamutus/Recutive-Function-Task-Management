import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillRelationFilterSchema: z.ZodType<Prisma.SkillRelationFilter> = z.object({
  is: z.lazy(() => SkillWhereInputSchema).optional(),
  isNot: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillRelationFilterSchema;
