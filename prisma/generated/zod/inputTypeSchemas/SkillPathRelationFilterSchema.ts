import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillPathRelationFilterSchema: z.ZodType<Prisma.SkillPathRelationFilter> = z.object({
  is: z.lazy(() => SkillPathWhereInputSchema).optional(),
  isNot: z.lazy(() => SkillPathWhereInputSchema).optional()
}).strict();

export default SkillPathRelationFilterSchema;
