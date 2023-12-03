import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema';
import { EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema } from './EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const EnergiesToSkillsUpdateInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => EnergyUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default EnergiesToSkillsUpdateInputSchema;
