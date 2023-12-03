import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PersonsToSkillPathsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsToSkillPathsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToSkillPathsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToSkillPathsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToSkillPathsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToSkillPathsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToSkillPathsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PersonsToSkillPathsScalarWhereWithAggregatesInputSchema;
