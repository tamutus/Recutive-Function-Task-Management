import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPersonsCreateManyEnergyInputSchema: z.ZodType<Prisma.EnergiesToPersonsCreateManyEnergyInput> = z.object({
  personId: z.number().int()
}).strict();

export default EnergiesToPersonsCreateManyEnergyInputSchema;
