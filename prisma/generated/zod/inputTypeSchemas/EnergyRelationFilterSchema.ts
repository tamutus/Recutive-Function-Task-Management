import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergyRelationFilterSchema: z.ZodType<Prisma.EnergyRelationFilter> = z.object({
  is: z.lazy(() => EnergyWhereInputSchema).optional(),
  isNot: z.lazy(() => EnergyWhereInputSchema).optional()
}).strict();

export default EnergyRelationFilterSchema;
