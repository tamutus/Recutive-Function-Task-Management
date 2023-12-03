import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrioritiesToSkillPathsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  skillPathId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToSkillPathsScalarWhereWithAggregatesInputSchema;
