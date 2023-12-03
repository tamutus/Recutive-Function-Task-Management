import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateWithoutProjectInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsUpdateWithoutProjectInputSchema;
