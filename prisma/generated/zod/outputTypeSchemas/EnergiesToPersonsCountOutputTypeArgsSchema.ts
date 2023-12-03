import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { EnergiesToPersonsCountOutputTypeSelectSchema } from './EnergiesToPersonsCountOutputTypeSelectSchema';

export const EnergiesToPersonsCountOutputTypeArgsSchema: z.ZodType<Prisma.EnergiesToPersonsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EnergiesToPersonsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default EnergiesToPersonsCountOutputTypeSelectSchema;
