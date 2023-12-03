import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergyListRelationFilterSchema: z.ZodType<Prisma.PrivateEnergyListRelationFilter> = z.object({
  every: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  some: z.lazy(() => PrivateEnergyWhereInputSchema).optional(),
  none: z.lazy(() => PrivateEnergyWhereInputSchema).optional()
}).strict();

export default PrivateEnergyListRelationFilterSchema;
