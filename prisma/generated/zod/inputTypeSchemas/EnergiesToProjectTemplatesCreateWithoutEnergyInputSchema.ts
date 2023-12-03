import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreatelinksInputSchema } from './EnergiesToProjectTemplatesCreatelinksInputSchema';
import { ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema } from './ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateWithoutEnergyInput> = z.object({
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  info: z.string().optional().nullable(),
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToProjectTemplatesCreateWithoutEnergyInputSchema;
