import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema';

export const PrivateEnergiesToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateWithoutTagInput> = z.object({
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTagsUpdateWithoutTagInputSchema;
