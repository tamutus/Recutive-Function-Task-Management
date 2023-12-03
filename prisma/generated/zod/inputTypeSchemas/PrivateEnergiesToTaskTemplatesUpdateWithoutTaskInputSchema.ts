import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema';

export const PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInput> = z.object({
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTaskTemplatesUpdateWithoutTaskInputSchema;
