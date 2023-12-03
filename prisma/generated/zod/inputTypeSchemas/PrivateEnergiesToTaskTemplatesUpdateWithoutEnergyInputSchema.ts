import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateWithoutEnergyInputSchema;
