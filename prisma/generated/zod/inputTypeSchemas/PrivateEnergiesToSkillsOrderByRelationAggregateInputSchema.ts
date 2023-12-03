import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema;
