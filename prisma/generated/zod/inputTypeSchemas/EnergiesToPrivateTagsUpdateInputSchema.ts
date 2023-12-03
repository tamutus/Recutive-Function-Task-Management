import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';
import { PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToPrivateTagsUpdateInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional(),
  tag: z.lazy(() => PrivateTagUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToPrivateTagsUpdateInputSchema;
