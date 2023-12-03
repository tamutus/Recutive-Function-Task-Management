import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityRelationFilterSchema: z.ZodType<Prisma.PriorityRelationFilter> = z.object({
  is: z.lazy(() => PriorityWhereInputSchema).optional(),
  isNot: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityRelationFilterSchema;
