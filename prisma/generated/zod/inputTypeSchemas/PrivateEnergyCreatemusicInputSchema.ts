import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateEnergyCreatemusicInputSchema: z.ZodType<Prisma.PrivateEnergyCreatemusicInput> = z.object({
  set: z.string().array()
}).strict();

export default PrivateEnergyCreatemusicInputSchema;
