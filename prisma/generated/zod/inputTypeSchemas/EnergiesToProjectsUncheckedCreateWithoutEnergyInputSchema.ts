import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectsCreatelinksInputSchema } from './EnergiesToProjectsCreatelinksInputSchema';

export const EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUncheckedCreateWithoutEnergyInput> = z.object({
  projectId: z.number().int(),
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsCreatelinksInputSchema),z.string().array() ]).optional(),
}).strict();

export default EnergiesToProjectsUncheckedCreateWithoutEnergyInputSchema;
