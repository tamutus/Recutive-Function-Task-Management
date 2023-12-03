import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema } from './ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema';
import { PrivateEnergyCreateNestedOneWithoutProjectsInputSchema } from './PrivateEnergyCreateNestedOneWithoutProjectsInputSchema';

export const PrivateEnergiesToProjectsCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default PrivateEnergiesToProjectsCreateInputSchema;
