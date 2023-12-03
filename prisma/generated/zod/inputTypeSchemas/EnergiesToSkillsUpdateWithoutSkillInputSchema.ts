import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const EnergiesToSkillsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateWithoutSkillInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default EnergiesToSkillsUpdateWithoutSkillInputSchema;
