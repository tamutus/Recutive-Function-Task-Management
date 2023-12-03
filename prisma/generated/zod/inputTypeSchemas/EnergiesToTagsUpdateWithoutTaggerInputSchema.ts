import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutTagsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './TagUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToTagsUpdateWithoutTaggerInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateWithoutTaggerInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToTagsUpdateWithoutTaggerInputSchema;
