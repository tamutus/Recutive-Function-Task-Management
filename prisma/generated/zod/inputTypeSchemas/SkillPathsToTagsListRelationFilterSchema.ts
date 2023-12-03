import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathsToTagsWhereInputSchema } from './SkillPathsToTagsWhereInputSchema';

export const SkillPathsToTagsListRelationFilterSchema: z.ZodType<Prisma.SkillPathsToTagsListRelationFilter> = z.object({
  every: z.lazy(() => SkillPathsToTagsWhereInputSchema).optional(),
  some: z.lazy(() => SkillPathsToTagsWhereInputSchema).optional(),
  none: z.lazy(() => SkillPathsToTagsWhereInputSchema).optional()
}).strict();

export default SkillPathsToTagsListRelationFilterSchema;
