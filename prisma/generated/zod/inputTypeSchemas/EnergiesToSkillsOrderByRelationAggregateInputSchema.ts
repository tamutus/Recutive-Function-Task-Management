import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const EnergiesToSkillsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EnergiesToSkillsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default EnergiesToSkillsOrderByRelationAggregateInputSchema;
