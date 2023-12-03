import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreateNestedOneWithoutProjectsInputSchema } from './PrivateEnergyCreateNestedOneWithoutProjectsInputSchema';

export const PrivateEnergiesToProjectsCreateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateWithoutProjectInput> = z.object({
  notes: z.string().optional().nullable(),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default PrivateEnergiesToProjectsCreateWithoutProjectInputSchema;
