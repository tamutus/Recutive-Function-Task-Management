import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutPrivateEnergiesInputSchema } from './TaskCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToTasksCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateWithoutEnergyInput> = z.object({
  notes: z.string().optional().nullable(),
  task: z.lazy(() => TaskCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToTasksCreateWithoutEnergyInputSchema;
