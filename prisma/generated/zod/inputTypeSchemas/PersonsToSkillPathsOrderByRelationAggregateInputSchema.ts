import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToSkillPathsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PersonsToSkillPathsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToSkillPathsOrderByRelationAggregateInputSchema;
