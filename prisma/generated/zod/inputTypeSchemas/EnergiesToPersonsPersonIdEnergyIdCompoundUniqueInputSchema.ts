import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInputSchema: z.ZodType<Prisma.EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInput> = z.object({
  personId: z.number(),
  energyId: z.number()
}).strict();

export default EnergiesToPersonsPersonIdEnergyIdCompoundUniqueInputSchema;
