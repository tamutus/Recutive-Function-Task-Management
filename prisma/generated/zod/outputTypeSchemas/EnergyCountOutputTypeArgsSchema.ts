import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergyCountOutputTypeSelectSchema } from './EnergyCountOutputTypeSelectSchema';

export const EnergyCountOutputTypeArgsSchema: z.ZodType<Prisma.EnergyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EnergyCountOutputTypeSelectSchema).nullish(),
}).strict();

export default EnergyCountOutputTypeSelectSchema;
