import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const PrivateEnergiesToSkillsUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsUpdateInputSchema;
