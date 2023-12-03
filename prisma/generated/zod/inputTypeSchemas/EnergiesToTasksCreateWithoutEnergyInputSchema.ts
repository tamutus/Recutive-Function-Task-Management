import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutEnergiesInputSchema } from './TaskCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToTasksCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateWithoutEnergyInput> = z.object({
  notes: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToTasksCreateWithoutEnergyInputSchema;
