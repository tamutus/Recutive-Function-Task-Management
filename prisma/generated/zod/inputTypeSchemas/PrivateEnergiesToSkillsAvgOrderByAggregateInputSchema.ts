import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToSkillsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsAvgOrderByAggregateInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsAvgOrderByAggregateInputSchema;
