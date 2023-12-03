import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskWorksWhereInputSchema } from './EnergiesToTaskWorksWhereInputSchema';

export const EnergiesToTaskWorksListRelationFilterSchema: z.ZodType<Prisma.EnergiesToTaskWorksListRelationFilter> = z.object({
  every: z.lazy(() => EnergiesToTaskWorksWhereInputSchema).optional(),
  some: z.lazy(() => EnergiesToTaskWorksWhereInputSchema).optional(),
  none: z.lazy(() => EnergiesToTaskWorksWhereInputSchema).optional()
}).strict();

export default EnergiesToTaskWorksListRelationFilterSchema;
