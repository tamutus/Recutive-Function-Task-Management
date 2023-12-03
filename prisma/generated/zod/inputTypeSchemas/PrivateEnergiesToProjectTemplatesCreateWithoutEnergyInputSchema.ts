import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema';

export const PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInput> = z.object({
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema)
}).strict();

export default PrivateEnergiesToProjectTemplatesCreateWithoutEnergyInputSchema;
