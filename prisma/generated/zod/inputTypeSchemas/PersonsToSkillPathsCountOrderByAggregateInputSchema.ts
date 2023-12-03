import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToSkillPathsCountOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToSkillPathsCountOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToSkillPathsCountOrderByAggregateInputSchema;
