import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutTasksInputSchema } from './EnergyCreateNestedOneWithoutTasksInputSchema';

export const EnergiesToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateWithoutTaskInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default EnergiesToTasksCreateWithoutTaskInputSchema;
