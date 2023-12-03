import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';
import { PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateInput> = z.object({
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional(),
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateInputSchema;
