import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTaskTemplatesWhereInputSchema } from './SkillsToTaskTemplatesWhereInputSchema';

export const SkillsToTaskTemplatesListRelationFilterSchema: z.ZodType<Prisma.SkillsToTaskTemplatesListRelationFilter> = z.object({
  every: z.lazy(() => SkillsToTaskTemplatesWhereInputSchema).optional(),
  some: z.lazy(() => SkillsToTaskTemplatesWhereInputSchema).optional(),
  none: z.lazy(() => SkillsToTaskTemplatesWhereInputSchema).optional()
}).strict();

export default SkillsToTaskTemplatesListRelationFilterSchema;
