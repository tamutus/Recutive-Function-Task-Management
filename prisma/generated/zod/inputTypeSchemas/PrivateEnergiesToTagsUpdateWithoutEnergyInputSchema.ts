import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToTagsUpdateWithoutEnergyInput> = z.object({
  tag: z.lazy(() => TagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToTagsUpdateWithoutEnergyInputSchema;
