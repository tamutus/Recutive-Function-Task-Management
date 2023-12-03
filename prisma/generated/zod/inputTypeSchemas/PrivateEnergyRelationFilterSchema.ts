import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyRelationFilterSchema: z.ZodType<Prisma.PrivateEnergyRelationFilter> = z.object({
  is: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  isNot: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyRelationFilterSchema;
