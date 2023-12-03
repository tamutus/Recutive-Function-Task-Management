import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreatelinksInputSchema } from './EnergiesToTaskTemplatesCreatelinksInputSchema';
import { TaskTemplateCreateNestedOneWithoutEnergiesInputSchema } from './TaskTemplateCreateNestedOneWithoutEnergiesInputSchema';

export const EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateWithoutEnergyInput> = z.object({
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutEnergiesInputSchema)
}).strict();

export default EnergiesToTaskTemplatesCreateWithoutEnergyInputSchema;
