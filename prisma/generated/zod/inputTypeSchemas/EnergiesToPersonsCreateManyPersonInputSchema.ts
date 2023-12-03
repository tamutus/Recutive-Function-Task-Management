import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPersonsCreateManyPersonInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateManyPersonInput> = z.object({
  energyId: z.number().int()
}).strict();

export default EnergiesToPersonsCreateManyPersonInputSchema;
