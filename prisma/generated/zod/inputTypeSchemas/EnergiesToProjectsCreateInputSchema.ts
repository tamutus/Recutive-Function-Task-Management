import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreatelinksInputSchema } from './EnergiesToProjectsCreatelinksInputSchema';
import { ProjectCreateNestedOneWithoutEnergiesInputSchema } from './ProjectCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyCreateNestedOneWithoutProjectsInputSchema } from './EnergyCreateNestedOneWithoutProjectsInputSchema';

export const EnergiesToProjectsCreateInputSchema: z.ZodType<Prisma.EnergiesToProjectsCreateInput> = z.object({
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsCreatelinksInputSchema),z.string().array() ]).optional(),
  project: z.lazy(() => ProjectCreateNestedOneWithoutEnergiesInputSchema),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default EnergiesToProjectsCreateInputSchema;
