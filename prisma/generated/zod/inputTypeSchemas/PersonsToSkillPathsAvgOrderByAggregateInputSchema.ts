import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToSkillPathsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToSkillPathsAvgOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToSkillPathsAvgOrderByAggregateInputSchema;
