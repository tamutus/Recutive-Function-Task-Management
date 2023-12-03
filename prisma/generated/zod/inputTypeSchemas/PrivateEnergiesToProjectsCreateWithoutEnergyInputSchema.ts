import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema } from './ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateWithoutEnergyInput> = z.object({
  notes: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToProjectsCreateWithoutEnergyInputSchema;
