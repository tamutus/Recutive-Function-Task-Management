import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreatelinksInputSchema } from './EnergiesToProjectsCreatelinksInputSchema';
import { ProjectCreateNestedOneWithoutEnergiesInputSchema } from './ProjectCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToProjectsCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsCreateWithoutEnergyInput> = z.object({
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsCreatelinksInputSchema),z.string().array() ]).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToProjectsCreateWithoutEnergyInputSchema;
