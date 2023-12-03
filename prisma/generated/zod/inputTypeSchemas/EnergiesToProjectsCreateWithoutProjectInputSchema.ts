import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreatelinksInputSchema } from './EnergiesToProjectsCreatelinksInputSchema';
import { EnergyCreateNestedOneWithoutProjectsInputSchema } from './EnergyCreateNestedOneWithoutProjectsInputSchema';

export const EnergiesToProjectsCreateWithoutProjectInputSchema: z.ZodType<Prisma.EnergiesToProjectsCreateWithoutProjectInput> = z.object({
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsCreatelinksInputSchema),z.string().array() ]).optional(),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default EnergiesToProjectsCreateWithoutProjectInputSchema;
