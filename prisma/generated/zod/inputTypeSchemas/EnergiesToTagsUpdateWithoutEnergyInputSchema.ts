import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TagUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './TagUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema';

export const EnergiesToTagsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateWithoutEnergyInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema).optional()
}).strict();

export default EnergiesToTagsUpdateWithoutEnergyInputSchema;
