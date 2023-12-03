import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToSkillsCountOrderByAggregateInputSchema: z.ZodType<Prisma.EnergiesToSkillsCountOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToSkillsCountOrderByAggregateInputSchema;
