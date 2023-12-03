import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToSkillsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateWithoutEnergyInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToSkillsUpdateWithoutEnergyInputSchema;
