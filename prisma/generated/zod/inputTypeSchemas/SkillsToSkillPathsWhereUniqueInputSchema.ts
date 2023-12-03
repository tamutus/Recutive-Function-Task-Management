import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInputSchema } from './SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInputSchema';
import { SkillsToSkillPathsWhereInputSchema } from './SkillsToSkillPathsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { SkillRelationFilterSchema } from './SkillRelationFilterSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';
import { SkillPathRelationFilterSchema } from './SkillPathRelationFilterSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillsToSkillPathsWhereUniqueInputSchema: z.ZodType<Prisma.SkillsToSkillPathsWhereUniqueInput> = z.object({
  skillId_skillPathId: z.lazy(() => SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInputSchema)
})
.and(z.object({
  skillId_skillPathId: z.lazy(() => SkillsToSkillPathsSkillIdSkillPathIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => SkillsToSkillPathsWhereInputSchema),z.lazy(() => SkillsToSkillPathsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillsToSkillPathsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillsToSkillPathsWhereInputSchema),z.lazy(() => SkillsToSkillPathsWhereInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  skill: z.union([ z.lazy(() => SkillRelationFilterSchema),z.lazy(() => SkillWhereInputSchema) ]).optional(),
  skillPath: z.union([ z.lazy(() => SkillPathRelationFilterSchema),z.lazy(() => SkillPathWhereInputSchema) ]).optional(),
}).strict());

export default SkillsToSkillPathsWhereUniqueInputSchema;
