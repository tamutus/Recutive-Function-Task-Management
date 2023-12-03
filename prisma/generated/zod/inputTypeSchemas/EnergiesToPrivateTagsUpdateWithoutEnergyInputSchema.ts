import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateWithoutEnergyInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToPrivateTagsUpdateWithoutEnergyInputSchema;
