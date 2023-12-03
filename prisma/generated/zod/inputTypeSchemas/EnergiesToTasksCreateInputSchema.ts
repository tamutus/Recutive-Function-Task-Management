import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreateNestedOneWithoutTasksInputSchema } from './EnergyCreateNestedOneWithoutTasksInputSchema';
import { TaskCreateNestedOneWithoutEnergiesInputSchema } from './TaskCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToTasksCreateInputSchema: z.ZodType<Prisma.EnergiesToTasksCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToTasksCreateInputSchema;
