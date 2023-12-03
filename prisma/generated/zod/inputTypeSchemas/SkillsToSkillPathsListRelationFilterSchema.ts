import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsWhereInputSchema } from './SkillsToSkillPathsWhereInputSchema';

export const SkillsToSkillPathsListRelationFilterSchema: z.ZodType<Prisma.SkillsToSkillPathsListRelationFilter> = z.object({
  every: z.lazy(() => SkillsToSkillPathsWhereInputSchema).optional(),
  some: z.lazy(() => SkillsToSkillPathsWhereInputSchema).optional(),
  none: z.lazy(() => SkillsToSkillPathsWhereInputSchema).optional()
}).strict();

export default SkillsToSkillPathsListRelationFilterSchema;
