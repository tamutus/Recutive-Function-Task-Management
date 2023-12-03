import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateInput> = z.object({
  task: z.lazy(() => TaskTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateInputSchema;
