import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToTagsUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateInput> = z.object({
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTagsUpdateInputSchema;
