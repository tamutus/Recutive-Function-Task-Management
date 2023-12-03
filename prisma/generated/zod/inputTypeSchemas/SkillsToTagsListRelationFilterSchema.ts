import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToTagsWhereInputSchema } from './SkillsToTagsWhereInputSchema';

export const SkillsToTagsListRelationFilterSchema: z.ZodType<Prisma.SkillsToTagsListRelationFilter> = z.object({
  every: z.lazy(() => SkillsToTagsWhereInputSchema).optional(),
  some: z.lazy(() => SkillsToTagsWhereInputSchema).optional(),
  none: z.lazy(() => SkillsToTagsWhereInputSchema).optional()
}).strict();

export default SkillsToTagsListRelationFilterSchema;
