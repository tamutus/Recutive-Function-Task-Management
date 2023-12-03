import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutTasksInputSchema } from './PrivateEnergyCreateNestedOneWithoutTasksInputSchema';

export const PrivateEnergiesToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksCreateWithoutTaskInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default PrivateEnergiesToTasksCreateWithoutTaskInputSchema;
