import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreatemusicInputSchema } from './PrivateEnergyCreatemusicInputSchema';

export const PrivateEnergyCreateManyPersonInputSchema: z.ZodType<Prisma.PrivateEnergyCreateManyPersonInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  unit: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  music: z.union([ z.lazy(() => PrivateEnergyCreatemusicInputSchema),z.string().array() ]).optional(),
}).strict();

export default PrivateEnergyCreateManyPersonInputSchema;
