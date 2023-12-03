import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTaskWorksWhereInputSchema } from './PrivateEnergiesToTaskWorksWhereInputSchema';

export const PrivateEnergiesToTaskWorksListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergiesToTaskWorksListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergiesToTaskWorksWhereInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskWorksListRelationFilterSchema;
