import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const EnergiesToSkillsUpdateManyMutationInputSchema: z.ZodType<Prisma.EnergiesToSkillsUpdateManyMutationInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default EnergiesToSkillsUpdateManyMutationInputSchema;