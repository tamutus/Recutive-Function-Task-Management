import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonsToSkillsCountOrderByAggregateInputSchema } from './PersonsToSkillsCountOrderByAggregateInputSchema';
import { PersonsToSkillsAvgOrderByAggregateInputSchema } from './PersonsToSkillsAvgOrderByAggregateInputSchema';
import { PersonsToSkillsMaxOrderByAggregateInputSchema } from './PersonsToSkillsMaxOrderByAggregateInputSchema';
import { PersonsToSkillsMinOrderByAggregateInputSchema } from './PersonsToSkillsMinOrderByAggregateInputSchema';
import { PersonsToSkillsSumOrderByAggregateInputSchema } from './PersonsToSkillsSumOrderByAggregateInputSchema';

export const PersonsToSkillsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PersonsToSkillsOrderByWithAggregationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PersonsToSkillsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PersonsToSkillsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PersonsToSkillsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PersonsToSkillsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PersonsToSkillsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PersonsToSkillsOrderByWithAggregationInputSchema;
