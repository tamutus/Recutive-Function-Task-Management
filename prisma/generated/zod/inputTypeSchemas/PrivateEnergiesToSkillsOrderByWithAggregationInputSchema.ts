import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PrivateEnergiesToSkillsCountOrderByAggregateInputSchema } from './PrivateEnergiesToSkillsCountOrderByAggregateInputSchema';
import { PrivateEnergiesToSkillsAvgOrderByAggregateInputSchema } from './PrivateEnergiesToSkillsAvgOrderByAggregateInputSchema';
import { PrivateEnergiesToSkillsMaxOrderByAggregateInputSchema } from './PrivateEnergiesToSkillsMaxOrderByAggregateInputSchema';
import { PrivateEnergiesToSkillsMinOrderByAggregateInputSchema } from './PrivateEnergiesToSkillsMinOrderByAggregateInputSchema';
import { PrivateEnergiesToSkillsSumOrderByAggregateInputSchema } from './PrivateEnergiesToSkillsSumOrderByAggregateInputSchema';

export const PrivateEnergiesToSkillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsOrderByWithAggregationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => PrivateEnergiesToSkillsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrivateEnergiesToSkillsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrivateEnergiesToSkillsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrivateEnergiesToSkillsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrivateEnergiesToSkillsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsOrderByWithAggregationInputSchema;
