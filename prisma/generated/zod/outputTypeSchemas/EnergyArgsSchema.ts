import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergySelectSchema } from '../inputTypeSchemas/EnergySelectSchema';
import { EnergyIncludeSchema } from '../inputTypeSchemas/EnergyIncludeSchema';

export const EnergyArgsSchema: z.ZodType<Prisma.EnergyDefaultArgs> = z.object({
  select: z.lazy(() => EnergySelectSchema).optional(),
  include: z.lazy(() => EnergyIncludeSchema).optional(),
}).strict();

export default EnergyArgsSchema;
