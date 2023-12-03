import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateWithoutEnergyInputSchema;
