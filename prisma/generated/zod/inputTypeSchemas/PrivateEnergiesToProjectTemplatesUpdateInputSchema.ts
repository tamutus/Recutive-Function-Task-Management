import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema';

export const PrivateEnergiesToProjectTemplatesUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesUpdateInput> = z.object({
  project: z.lazy(() => ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectTemplatesUpdateInputSchema;
