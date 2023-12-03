import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutTagsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutTagsNestedInputSchema';
import { PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema';

export const EnergiesToTagsUpdateWithoutTagInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateWithoutTagInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema).optional()
}).strict();

export default EnergiesToTagsUpdateWithoutTagInputSchema;
