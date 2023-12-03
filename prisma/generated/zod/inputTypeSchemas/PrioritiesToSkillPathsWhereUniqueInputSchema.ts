import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInputSchema } from './PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInputSchema';
import { PrioritiesToSkillPathsWhereInputSchema } from './PrioritiesToSkillPathsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { SkillPathRelationFilterSchema } from './SkillPathRelationFilterSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { PriorityRelationFilterSchema } from './PriorityRelationFilterSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PrioritiesToSkillPathsWhereUniqueInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsWhereUniqueInput> = z.object({
  skillPathId_priorityId: z.lazy(() => PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInputSchema)
})
.and(z.object({
  skillPathId_priorityId: z.lazy(() => PrioritiesToSkillPathsSkillPathIdPriorityIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToSkillPathsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToSkillPathsWhereInputSchema),z.lazy(() => PrioritiesToSkillPathsWhereInputSchema).array() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  skillPath: z.union([ z.lazy(() => SkillPathRelationFilterSchema),z.lazy(() => SkillPathWhereInputSchema) ]).optional(),
  priority: z.union([ z.lazy(() => PriorityRelationFilterSchema),z.lazy(() => PriorityWhereInputSchema) ]).optional(),
}).strict());

export default PrioritiesToSkillPathsWhereUniqueInputSchema;
