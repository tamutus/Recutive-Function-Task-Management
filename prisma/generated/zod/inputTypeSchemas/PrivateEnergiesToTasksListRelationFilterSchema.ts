import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksWhereInputSchema } from './PrivateEnergiesToTasksWhereInputSchema';

export const PrivateEnergiesToTasksListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToTasksListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToTasksWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToTasksWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToTasksWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToTasksListRelationFilterSchema;
