import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';

export const PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateWithoutEnergyInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsUpdateWithoutEnergyInputSchema;
