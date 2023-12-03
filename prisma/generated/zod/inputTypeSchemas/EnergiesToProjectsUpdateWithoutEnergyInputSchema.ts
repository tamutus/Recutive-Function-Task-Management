import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { EnergiesToProjectsUpdatelinksInputSchema } from './EnergiesToProjectsUpdatelinksInputSchema';
import { ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema } from './ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema';

export const EnergiesToProjectsUpdateWithoutEnergyInputSchema: z.ZodType<Prisma.EnergiesToProjectsUpdateWithoutEnergyInput> = z.object({
  info: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  links: z.union([ z.lazy(() => EnergiesToProjectsUpdatelinksInputSchema),z.string().array() ]).optional(),
  project: z.lazy(() => ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema).optional()
}).strict();

export default EnergiesToProjectsUpdateWithoutEnergyInputSchema;
