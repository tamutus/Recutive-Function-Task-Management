import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const EnergiesToPersonsCountOutputTypeSelectSchema: z.ZodType<Prisma.EnergiesToPersonsCountOutputTypeSelect> = z.object({
  measurements: z.boolean().optional(),
}).strict();

export default EnergiesToPersonsCountOutputTypeSelectSchema;
