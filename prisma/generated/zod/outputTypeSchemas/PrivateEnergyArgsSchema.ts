import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergySelectSchema } from '../inputTypeSchemas/PrivateEnergySelectSchema';
import { PrivateEnergyIncludeSchema } from '../inputTypeSchemas/PrivateEnergyIncludeSchema';

export const PrivateEnergyArgsSchema: z.ZodType<Prisma.PrivateEnergyDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergySelectSchema).optional(),
  include: z.lazy(() => PrivateEnergyIncludeSchema).optional(),
}).strict();

export default PrivateEnergyArgsSchema;
