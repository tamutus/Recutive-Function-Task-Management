import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema';
import { PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema } from './PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema';

export const PrivateEnergiesToProjectsUpdateInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsUpdateInput> = z.object({
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema).optional(),
  energy: z.lazy(() => PrivateEnergyUpdateOneRequiredWithoutProjectsNestedInputSchema).optional()
}).strict();

export default PrivateEnergiesToProjectsUpdateInputSchema;
