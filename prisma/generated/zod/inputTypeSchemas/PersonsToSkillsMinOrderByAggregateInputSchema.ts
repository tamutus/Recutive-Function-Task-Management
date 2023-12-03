import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PersonsToSkillsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PersonsToSkillsMinOrderByAggregateInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PersonsToSkillsMinOrderByAggregateInputSchema;
