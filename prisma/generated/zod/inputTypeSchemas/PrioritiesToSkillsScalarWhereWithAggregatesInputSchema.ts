import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrioritiesToSkillsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrioritiesToSkillsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrioritiesToSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToSkillsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrioritiesToSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrioritiesToSkillsScalarWhereWithAggregatesInputSchema;
