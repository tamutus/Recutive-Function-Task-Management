import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreatemusicInputSchema } from './EnergyCreatemusicInputSchema';

export const EnergyCreateManyInputSchema: z.ZodType<Prisma.EnergyCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  unit: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  music: z.union([ z.lazy(() => EnergyCreatemusicInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergyCreateManyInputSchema;
