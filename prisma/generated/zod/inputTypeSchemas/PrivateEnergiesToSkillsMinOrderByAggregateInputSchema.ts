import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToSkillsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsMinOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsMinOrderByAggregateInputSchema;
