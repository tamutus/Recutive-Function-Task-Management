import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateEnergyCountOutputTypeSelectSchema } from './PrivateEnergyCountOutputTypeSelectSchema';

export const PrivateEnergyCountOutputTypeArgsSchema: z.ZodType<Prisma.PrivateEnergyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PrivateEnergyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PrivateEnergyCountOutputTypeSelectSchema;
