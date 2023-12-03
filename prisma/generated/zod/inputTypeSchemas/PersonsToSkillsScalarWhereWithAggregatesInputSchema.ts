import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const PersonsToSkillsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PersonsToSkillsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PersonsToSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PersonsToSkillsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PersonsToSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => PersonsToSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  personId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PersonsToSkillsScalarWhereWithAggregatesInputSchema;
