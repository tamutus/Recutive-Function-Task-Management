import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillPathRelationFilterSchema } from './SkillPathRelationFilterSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillsToSkillPathsWhereInputSchema: z.ZodType<Prisma.SkillsToSkillPathsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillsToSkillPathsWhereInputSchema),z.lazy(() => SkillsToSkillPathsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToSkillPathsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToSkillPathsWhereInputSchema),z.lazy(() => SkillsToSkillPathsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  skillPath: z.union([ z.lazy(() => SkillPathRelationFilterSchema),z.lazy(() => SkillPathWhereInputSchema) ]).optional(),
}).strict();

export default SkillsToSkillPathsWhereInputSchema;
