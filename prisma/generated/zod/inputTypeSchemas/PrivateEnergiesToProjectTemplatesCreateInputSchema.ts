import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema';
import { PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema } from './PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema),
  energy: z.lazy(() => PrivateEnergyCreateNestedOneWithoutProjectTemplatesInputSchema)
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateInputSchema;
