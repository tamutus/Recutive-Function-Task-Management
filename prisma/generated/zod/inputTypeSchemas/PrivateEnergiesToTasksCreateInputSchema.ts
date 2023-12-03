import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutTasksInputSchema } from './PrivateEnergyCreateNestedOneWithoutTasksInputSchema';
import { TaskCreateNestedOneWithoutPrivateEnergiesInputSchema } from './TaskCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToTasksCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToTasksCreateInputSchema;
