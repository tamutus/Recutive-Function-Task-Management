import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPersonsCreateManyInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateManyInput> = z.object({
  personId: z.number().int(),
  energyId: z.number().int()
}).strict();

export default EnergiesToPersonsCreateManyInputSchema;
