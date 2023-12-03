import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsWhereInputSchema } from './PrivateEnergiesToProjectsWhereInputSchema';

export const PrivateEnergiesToProjectsListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsListRelationFilterSchema;
