import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToSkillsCountOrderByAggregateInputSchema } from './EnergiesToSkillsCountOrderByAggregateInputSchema';
import { EnergiesToSkillsAvgOrderByAggregateInputSchema } from './EnergiesToSkillsAvgOrderByAggregateInputSchema';
import { EnergiesToSkillsMaxOrderByAggregateInputSchema } from './EnergiesToSkillsMaxOrderByAggregateInputSchema';
import { EnergiesToSkillsMinOrderByAggregateInputSchema } from './EnergiesToSkillsMinOrderByAggregateInputSchema';
import { EnergiesToSkillsSumOrderByAggregateInputSchema } from './EnergiesToSkillsSumOrderByAggregateInputSchema';

export const EnergiesToSkillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.EnergiesToSkillsOrderByWithAggregationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => EnergiesToSkillsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EnergiesToSkillsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EnergiesToSkillsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EnergiesToSkillsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EnergiesToSkillsSumOrderByAggregateInputSchema).optional()
}).strict();

export default EnergiesToSkillsOrderByWithAggregationInputSchema;
