import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema';

export const EnergiesToPrivateTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToPrivateTagsUpdateWithoutTagInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutPrivateTagsNestedInputSchema).optional()
}).strict();

export default EnergiesToPrivateTagsUpdateWithoutTagInputSchema;
