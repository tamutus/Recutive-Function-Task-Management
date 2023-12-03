import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateWithoutTagInput> = z.object({
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateWithoutTagInputSchema;
