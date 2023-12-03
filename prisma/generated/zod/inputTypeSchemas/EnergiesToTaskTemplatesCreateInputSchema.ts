import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesCreatelinksInputSchema } from './EnergiesToTaskTemplatesCreatelinksInputSchema';
import { TaskTemplateCreateNestedOneWithoutEnergiesInputSchema } from './TaskTemplateCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyCreateNestedOneWithoutTaskTemplatesInputSchema } from './EnergyCreateNestedOneWithoutTaskTemplatesInputSchema';

export const EnergiesToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesCreateInput> = z.object({
  info: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToTaskTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutEnergiesInputSchema),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutTaskTemplatesInputSchema)
}).strict();

export default EnergiesToTaskTemplatesCreateInputSchema;
