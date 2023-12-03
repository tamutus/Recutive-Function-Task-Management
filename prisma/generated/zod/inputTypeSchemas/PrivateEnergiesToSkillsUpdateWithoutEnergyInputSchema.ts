import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateWithoutEnergyInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  skill: z.lazy(() => SkillUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsUpdateWithoutEnergyInputSchema;
