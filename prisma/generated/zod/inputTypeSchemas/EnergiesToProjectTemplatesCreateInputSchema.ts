import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesCreatelinksInputSchema } from './EnergiesToProjectTemplatesCreatelinksInputSchema';
import { ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema } from './ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema';
import { EnergyCreateNestedOneWithoutProjectTemplatesInputSchema } from './EnergyCreateNestedOneWithoutProjectTemplatesInputSchema';

export const EnergiesToProjectTemplatesCreateInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesCreateInput> = z.object({
  links: z.union([ z.lazy(() => EnergiesToProjectTemplatesCreatelinksInputSchema),z.string().array() ]).optional(),
  info: z.string().optional().nullable(),
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema),
  energy: z.lazy(() => EnergyCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default EnergiesToProjectTemplatesCreateInputSchema;
