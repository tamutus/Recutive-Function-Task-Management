import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const SkillPathScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SkillPathScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SkillPathScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillPathScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillPathScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillPathScalarWhereWithAggregatesInputSchema),z.lazy(() => SkillPathScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default SkillPathScalarWhereWithAggregatesInputSchema;
