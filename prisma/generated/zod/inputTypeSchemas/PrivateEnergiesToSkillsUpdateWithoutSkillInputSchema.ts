import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema';

export const PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema: z.ZodType<Prisma.PrivateEnergiesToSkillsUpdateWithoutSkillInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutSkillsNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToSkillsUpdateWithoutSkillInputSchema;
