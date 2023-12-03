import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema),z.lazy(() => PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  skillId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PrivateEnergiesToSkillsScalarWhereWithAggregatesInputSchema;
