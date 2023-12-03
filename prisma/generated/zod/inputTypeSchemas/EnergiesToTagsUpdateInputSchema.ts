import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutTagsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutTagsNestedInputSchema';
import { TagUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './TagUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema } from './PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema';

export const EnergiesToTagsUpdateInputSchema: z.ZodType<Prisma.EnergiesToTagsUpdateInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutTagsNestedInputSchema).optional(),
  tag: z.lazy(() => TagUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  tagger: z.lazy(() => PersonUpdateOneRequiredWithoutEnergyTagsNestedInputSchema).optional()
}).strict();

export default EnergiesToTagsUpdateInputSchema;
