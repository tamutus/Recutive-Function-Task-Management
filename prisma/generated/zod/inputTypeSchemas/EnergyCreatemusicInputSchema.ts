import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergyCreatemusicInputSchema: z.ZodType<Prisma.EnergyCreatemusicInput> = z.object({
  set: z.string().array()
}).strict();

export default EnergyCreatemusicInputSchema;
