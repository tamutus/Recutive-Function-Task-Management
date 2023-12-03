import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInput> = z.object({
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToPrivateTagsUpdateWithoutEnergyInputSchema;
